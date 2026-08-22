# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`ngx-ui-tour` is a UI tour (guided walkthrough) library for Angular, published as a family of npm packages. It is a fork of Isaac Mann's no-longer-maintained `ngx-tour`. The published demo/docs live at https://hakimio.github.io/ngx-ui-tour.

It is an **Nx monorepo** using **bun** as the package manager (`cli.packageManager` in `nx.json`, and bun workspaces over `libs/*`). Tests run on **Jest** (not Karma), and linting uses flat-config **ESLint** (`eslint.config.mjs` per project).

## Commands

```bash
# Tests — only ngx-ui-tour-core has a test suite
bun run test                                  # = nx test ngx-ui-tour-core
nx test ngx-ui-tour-core -t "deepMerge"   # run a single test by name (Jest -t)

# Lint
bun run lint                              # nx run-many --target=lint (all projects)
nx lint ngx-ui-tour-core                  # lint one project

# Build the libraries
bun run build:lib:all                     # all libs (projects tagged "libs")
nx build ngx-ui-tour-md-menu             # build one lib (runs prebuild -> postbuild)

# Run demos locally
bun run start:demo                        # main docs/demo app (apps/ngx-ui-tour-demo)
bun run start:material-ui-demo            # minimal Material UI demo
bun run start:lazy-tour                   # lazy-loaded tour demo

# Dependency upgrades (taze)
bun run upgrade:interactive
```

There is no top-level `nx test` that runs everything — the core library holds the only meaningful unit tests (utils like `deep-merge`, `is-in-viewport`).

## Architecture

### Core + per-UI-flavor package design

The library is split into a framework-agnostic **core** and one **UI-flavor package per supported UI toolkit**. Each flavor package depends on `ngx-ui-tour-core` and supplies the visual popover/anchor implementation.

- `libs/ngx-ui-tour-core` — all tour state, navigation, scrolling, backdrop, and hotkey logic. Published as `ngx-ui-tour-core`. Contains no popover UI.
- UI-flavor packages, each a separate npm package:
  - `ngx-ui-tour-md-menu` (Angular Material), `ngx-ui-tour-ionic`, `ngx-ui-tour-primeng`, `ngx-ui-tour-ng-zorro`, `ngx-ui-tour-ng-bootstrap`, `ngx-ui-tour-tui-dropdown`, `ngx-ui-tour-tui-hint` (Taiga UI), and `ngx-ui-tour-console` (logs steps to the JS console — useful as a reference implementation).

Each flavor package has independent versioning (see the per-Angular-version compatibility tables in `README.md`) and its own `CHANGELOG.md`.

### How `TourService` drives everything

`libs/ngx-ui-tour-core/src/lib/tour.service.ts` is the heart of the library. Key points when modifying tour behavior:

- **Generic over the step option type**: `TourService<T extends IStepOption>`. Each flavor extends both the service and the option interface — e.g. `NgxmTourService extends TourService<IMdStepOption>`, and `IMdStepOption extends IStepOption`. When adding a core step option, add it to `IStepOption` and `DEFAULT_STEP_OPTIONS`; flavor-specific options go in the flavor's `step-option.interface.ts`.
- **Defaults layering**: `initialize()` builds each step via `deepMerge(DEFAULT_STEP_OPTIONS, globalDefaults, stepDefaults, step)` (later wins). `globalDefaults` come from the `UI_TOUR_OPTIONS` injection token (set via `provideUiTour()`); `stepDefaults` is the optional second argument to `initialize()`.
- **Anchors register themselves**: `TourAnchorDirective` instances call `tourService.register(anchorId, anchor)` / `unregister()`. The service keeps an `anchors: Record<string, TourAnchorDirective>` map and matches steps to anchors by `anchorId`. `register()` honors `duplicateAnchorHandling` (`'error' | 'registerFirst' | 'registerLast'`).
- **Event streams**: every lifecycle action emits on a `Subject` (`stepShow$`, `stepHide$`, `start$`, `end$`, `pause$`, `resume$`, `anchorRegister$`, ...). These are merged into a single `events$` observable. Use these to react to tour progress.
- **Async / optional steps**: `showStep()` waits on `anchorRegister$` for `isAsync` steps (with optional `asyncStepTimeout`), and auto-skips `isOptional` steps whose anchor is missing — `hasNext`/`hasPrev` also look past missing optional anchors.
- **Router integration**: steps with a `route` trigger navigation before showing. The service subscribes to `NavigationStart` + `popstate` and ends the tour on user-initiated navigation unless `allowUserInitiatedNavigation` is set (browser back always ends it).

### Anchor contract and proxy anchors

- `TourAnchorDirective` (interface in core) is the minimal contract every flavor's anchor directive implements: `showTourStep(step)`, `hideTourStep()`, and an `element: ElementRef`.
- `BaseTourProxyAnchor` (`base-tour-proxy-anchor.ts`) lets a tour step target a **third-party / non-directive element** via a CSS selector or `HTMLElement` (the `anchorEl` input), resolving the element after render and pointing the anchor directive at it. Flavor packages subclass this (e.g. `TourProxyAnchorComponent`).

### Supporting core services

These are injected into `TourService` and own a single concern; touch the relevant one rather than putting logic in `TourService`:
- `ScrollingService` — scrolls an anchor into view (`smoothScroll`, `centerAnchorOnScroll`, custom `scrollContainer`, shadow DOM handling).
- `TourBackdropService` — the dimming backdrop + spotlight cutout, with a resize observer.
- `ScrollBlockingService` — disables page scrolling while a step is shown (`disablePageScrolling`).
- `AnchorClickService` — implements `nextOnAnchorClick`.

## Apps

- `apps/ngx-ui-tour-demo` — the full documentation site (deployed to GitHub Pages via `gh-pages`; `publish` target). Showcases every UI flavor.
- `apps/material-ui-demo`, `apps/lazy-tour-demo` — focused demos (minimal Material example, and lazy-loaded tour) used for manual testing of specific scenarios.

## Conventions

- **Standalone Angular APIs**: configure global defaults via the `provideUiTour(config)` environment-provider function exported by each flavor (it wires up `UI_TOUR_OPTIONS` + the flavor's `TourService`).
- **`inject()` over constructor injection** throughout (matches recent commit history).
- **`import type`** is used for type-only imports across the codebase — keep this consistent.
- A new flavor package mirrors the `ngx-ui-tour-md-menu` layout: `public_api.ts` re-exporting the directive, components, step-option interface, the extended `TourService` (aliased as `TourService`), and `provideUiTour`. Build wiring lives in `project.json` (`prebuild` via `@nx/angular:package`, then `postbuild` copies `README.md`/`CHANGELOG.md` into `dist/`).
- Releases are managed with `nx release` (`bun run release`); each lib is published independently from its `dist/` output.

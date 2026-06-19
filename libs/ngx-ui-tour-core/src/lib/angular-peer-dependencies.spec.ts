import {readFileSync} from 'fs';
import {join} from 'path';

interface PackageJson {
    name: string;
    version: string;
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
}

const libRoot = join(__dirname, '..', '..');
const workspaceRoot = join(libRoot, '..', '..');
const libsRoot = join(workspaceRoot, 'libs');
const angularPeerPattern = /^\^22\./;
const angular21PeerPattern = /^\^21\./;

const publishedLibs = [
    'ngx-ui-tour-core',
    'ngx-ui-tour-md-menu',
    'ngx-ui-tour-console',
    'ngx-ui-tour-ng-bootstrap',
    'ngx-ui-tour-ionic',
    'ngx-ui-tour-primeng',
    'ngx-ui-tour-tui-hint',
    'ngx-ui-tour-tui-dropdown',
    'ngx-ui-tour-ng-zorro'
];

const angular22Libs = [
    'ngx-ui-tour-core',
    'ngx-ui-tour-md-menu',
    'ngx-ui-tour-console',
    'ngx-ui-tour-ionic',
    'ngx-ui-tour-tui-hint',
    'ngx-ui-tour-tui-dropdown'
];

const angular21WrapperLibs = [
    'ngx-ui-tour-ng-bootstrap',
    'ngx-ui-tour-primeng',
    'ngx-ui-tour-ng-zorro'
];

function readPackageJson(libName: string): PackageJson {
    const path = join(libsRoot, libName, 'package.json');

    return JSON.parse(readFileSync(path, 'utf8')) as PackageJson;
}

describe('Angular 22 package compatibility', () => {

    it.each(publishedLibs)(
        'should not bundle Angular packages in %s dependencies',
        (libName) => {
            const pkg = readPackageJson(libName);
            const bundledAngular = Object.keys(pkg.dependencies ?? {})
                .filter((name) => name.startsWith('@angular/'));

            expect(bundledAngular).toEqual([]);
        }
    );

    it.each(angular22Libs)(
        'should declare Angular 22 peer dependencies in %s',
        (libName) => {
            const pkg = readPackageJson(libName);
            const angularPeers = Object.entries(pkg.peerDependencies ?? {})
                .filter(([name]) => name.startsWith('@angular/'));

            expect(angularPeers.length).toBeGreaterThan(0);
            angularPeers.forEach(([, version]) => {
                expect(version).toMatch(angularPeerPattern);
            });
        }
    );

    it.each(angular21WrapperLibs)(
        'should not claim Angular 22 for %s until its UI peer supports it',
        (libName) => {
            const pkg = readPackageJson(libName);
            const angularPeers = Object.entries(pkg.peerDependencies ?? {})
                .filter(([name]) => name.startsWith('@angular/'));

            angularPeers.forEach(([, version]) => {
                expect(version).toMatch(angular21PeerPattern);
            });
            expect(pkg.dependencies?.['ngx-ui-tour-core']).toBe('16.0.0');
        }
    );

    it('should require Angular 22 router peer in core', () => {
        const pkg = readPackageJson('ngx-ui-tour-core');

        expect(pkg.peerDependencies?.['@angular/router'])
            .toMatch(angularPeerPattern);
    });

    it('should not bundle router in md-menu dependencies', () => {
        const pkg = readPackageJson('ngx-ui-tour-md-menu');

        expect(pkg.dependencies?.['@angular/router']).toBeUndefined();
        expect(pkg.peerDependencies?.['@angular/core'])
            .toMatch(angularPeerPattern);
    });

});

describe('Angular 22 router compatibility', () => {

    it('should expose the renamed router global util in Angular 22', async () => {
        const core = await import('@angular/core') as Record<string, unknown>;

        expect(core['ɵpublishNonCoreGlobalUtil']).toBeDefined();
        expect(core['ɵpublishExternalGlobalUtil']).toBeUndefined();
    });

    it('should load @angular/router against Angular 22 core', async () => {
        await expect(import('@angular/router')).resolves.toBeDefined();
    });

});

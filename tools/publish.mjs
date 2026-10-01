// Publishes a built library from its dist folder, skipping versions that are already on the registry.
// Usage: node tools/publish.mjs <dist-dir> [extra npm publish args, e.g. --otp=123456]
import {spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {join, resolve} from 'node:path';

const [distArg, ...publishArgs] = process.argv.slice(2);

if (!distArg) {
    console.error('Usage: node tools/publish.mjs <dist-dir> [npm publish args]');
    process.exit(1);
}

// Absolute path, so npm doesn't read e.g. "dist/lib" as a GitHub repository shorthand
const distDir = resolve(distArg);
const {name, version} = JSON.parse(readFileSync(join(distDir, 'package.json'), 'utf8'));

function npm(args, options) {
    // npm is a .cmd shim on Windows, which can only be started through a shell
    const command = ['npm', ...args].map(arg => /\s/.test(arg) ? `"${arg}"` : arg).join(' ');

    return spawnSync(command, {shell: true, encoding: 'utf8', ...options});
}

function isPublished() {
    const result = npm(['view', `${name}@${version}`, 'version', '--json']);

    if (result.status === 0) {
        // An existing package without this version prints nothing
        return result.stdout.trim() !== '';
    }

    // The package itself has never been published
    if (/\bE404\b/.test(result.stderr)) {
        return false;
    }

    process.stderr.write(result.stderr);
    console.error(`Failed to check whether ${name}@${version} is already published.`);
    process.exit(result.status ?? 1);
}

if (isPublished()) {
    console.log(`${name}@${version} is already published, skipping.`);
    process.exit(0);
}

const result = npm(['publish', distDir, '--ignore-scripts', ...publishArgs], {stdio: 'inherit'});

process.exit(result.status ?? 1);

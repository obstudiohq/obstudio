import { describe, it, expect } from 'vitest';
/**
 * Important: This test also serves as a point to
 * import the entire lib for coverage reporting
 */
import { isJSDOM } from '#test-utils';
import * as Obstudio from './index';

describe('@obstudio/react', () => {
  it('should have exports', () => {
    expect(typeof Obstudio).toBe('object');
  });

  it('should not have undefined exports', () => {
    Object.keys(Obstudio).forEach((exportKey) => {
      const value = (Obstudio as Record<string, unknown>)[exportKey];
      expect(Boolean(value)).toBe(true);
    });
  });

  it.skipIf(!isJSDOM)('should resolve internals and auxiliary exports', async () => {
    const packageJson = await import('../package.json');
    const subpathExports = packageJson.exports;

    const internalKeys = Object.keys(subpathExports).filter((key) =>
      key.startsWith('./internals/'),
    );

    await Promise.all(
      internalKeys.map(async (subpath) => {
        const importSpecifier = `@obstudio/react/${subpath.replace('./', '')}`;
        const module = await import(/* @vite-ignore */ importSpecifier);
        expect(module, `${subpath} failed to resolve`).toBeDefined();
      }),
    );
  });

  it.skipIf(!isJSDOM)('should have the correct root exports', async () => {
    const packageJson = await import('../package.json');
    const subpathExports = packageJson.exports;

    await Promise.all(
      Object.keys(subpathExports)
        .filter(
          (key) =>
            !['.', './utils', './types'].includes(key) &&
            !key.startsWith('./unstable-') &&
            !key.startsWith('./internals/'),
        )
        .map(async (subpath) => {
          const importSpecifier = `@obstudio/react/${subpath.replace('./', '')}`;
          const module = await import(/* @vite-ignore */ importSpecifier);

          Object.keys(module).forEach((exportKey) => {
            expect((Obstudio as Record<string, unknown>)[exportKey]).not.toBeUndefined();
          });
        }),
    );
  });
});

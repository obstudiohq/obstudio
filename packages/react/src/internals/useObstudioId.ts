'use client';
import { useId } from '@obstudio/utils/useId';

/**
 * Wraps `useId` and prefixes generated `id`s with `obstudio-`
 * @param {string | undefined} idOverride overrides the generated id when provided
 * @returns {string | undefined}
 */
export function useObstudioId(idOverride?: string): string | undefined {
  return useId(idOverride, 'obstudio');
}

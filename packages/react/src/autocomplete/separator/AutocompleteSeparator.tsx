'use client';
import type * as React from 'react';
import { ListboxSeparator } from '../../utils/listbox-separator/ListboxSeparator';
import type { ObstudioComponentProps, Orientation } from '../../internals/types';

export interface AutocompleteSeparatorProps extends ObstudioComponentProps<
  'div',
  AutocompleteSeparatorState
> {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
}

export interface AutocompleteSeparatorState {
  /**
   * The orientation of the separator.
   */
  orientation: Orientation;
}

/**
 * A visual separator between items or groups.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Autocomplete](https://obstudio.co/react/components/autocomplete)
 */
export const AutocompleteSeparator = ListboxSeparator as React.ForwardRefExoticComponent<
  AutocompleteSeparatorProps & React.RefAttributes<HTMLDivElement>
>;

export namespace AutocompleteSeparator {
  export type Props = AutocompleteSeparatorProps;
  export type State = AutocompleteSeparatorState;
}

'use client';
import type * as React from 'react';
import { ListboxSeparator } from '../../utils/listbox-separator/ListboxSeparator';
import type { ObstudioComponentProps, Orientation } from '../../internals/types';

export interface ComboboxSeparatorProps extends ObstudioComponentProps<
  'div',
  ComboboxSeparatorState
> {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
}

export interface ComboboxSeparatorState {
  /**
   * The orientation of the separator.
   */
  orientation: Orientation;
}

/**
 * A visual separator between items or groups.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Combobox](https://obstudio.co/react/components/combobox)
 */
export const ComboboxSeparator = ListboxSeparator as React.ForwardRefExoticComponent<
  ComboboxSeparatorProps & React.RefAttributes<HTMLDivElement>
>;

export namespace ComboboxSeparator {
  export type Props = ComboboxSeparatorProps;
  export type State = ComboboxSeparatorState;
}

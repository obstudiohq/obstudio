'use client';
import type * as React from 'react';
import { ListboxSeparator } from '../../utils/listbox-separator/ListboxSeparator';
import type { ObstudioComponentProps, Orientation } from '../../internals/types';

export interface SelectSeparatorProps extends ObstudioComponentProps<'div', SelectSeparatorState> {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
}

export interface SelectSeparatorState {
  /**
   * The orientation of the separator.
   */
  orientation: Orientation;
}

/**
 * A visual separator between items or groups.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Select](https://obstudio.co/react/components/select)
 */
export const SelectSeparator = ListboxSeparator as React.ForwardRefExoticComponent<
  SelectSeparatorProps & React.RefAttributes<HTMLDivElement>
>;

export namespace SelectSeparator {
  export type Props = SelectSeparatorProps;
  export type State = SelectSeparatorState;
}

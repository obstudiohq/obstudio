'use client';
import * as React from 'react';
import { SelectScrollArrow } from '../scroll-arrow/SelectScrollArrow';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * An element that scrolls the select popup up when hovered. Does not render when using touch input.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Select](https://obstudio.co/react/components/select)
 */
export const SelectScrollUpArrow = React.forwardRef(function SelectScrollUpArrow(
  props: SelectScrollUpArrow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return <SelectScrollArrow {...props} ref={forwardedRef} direction="up" />;
});

export interface SelectScrollUpArrowState {}

export interface SelectScrollUpArrowProps extends ObstudioComponentProps<
  'div',
  SelectScrollUpArrowState
> {
  /**
   * Whether to keep the HTML element in the DOM while the select popup is not scrollable.
   * @default false
   */
  keepMounted?: boolean | undefined;
}

export namespace SelectScrollUpArrow {
  export type State = SelectScrollUpArrowState;
  export type Props = SelectScrollUpArrowProps;
}

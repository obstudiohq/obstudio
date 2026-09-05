'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import { usePopoverRootContext } from '../root/PopoverRootContext';
import { useRenderElement } from '../../internals/useRenderElement';
import { useObstudioId } from '../../internals/useObstudioId';

/**
 * A heading that labels the popover.
 * Renders an `<h2>` element.
 *
 * Documentation: [Obstudio Popover](https://obstudio.co/react/components/popover)
 */
export const PopoverTitle = React.forwardRef(function PopoverTitle(
  componentProps: PopoverTitle.Props,
  forwardedRef: React.ForwardedRef<HTMLHeadingElement>,
) {
  const { render, className, style, ...elementProps } = componentProps;

  const store = usePopoverRootContext();

  const id = useObstudioId(elementProps.id);

  store.useSyncedValueWithCleanup('titleElementId', id);

  const element = useRenderElement('h2', componentProps, {
    ref: forwardedRef,
    props: [{ id }, elementProps],
  });

  return element;
});

export interface PopoverTitleState {}

export interface PopoverTitleProps extends ObstudioComponentProps<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  PopoverTitleState
> {}

export namespace PopoverTitle {
  export type State = PopoverTitleState;
  export type Props = PopoverTitleProps;
}

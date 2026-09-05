'use client';
import * as React from 'react';
import { usePopoverRootContext } from '../root/PopoverRootContext';
import type { ObstudioComponentProps } from '../../internals/types';
import { useObstudioId } from '../../internals/useObstudioId';
import { useRenderElement } from '../../internals/useRenderElement';

/**
 * A paragraph with additional information about the popover.
 * Renders a `<p>` element.
 *
 * Documentation: [Obstudio Popover](https://obstudio.co/react/components/popover)
 */
export const PopoverDescription = React.forwardRef(function PopoverDescription(
  componentProps: PopoverDescription.Props,
  forwardedRef: React.ForwardedRef<HTMLParagraphElement>,
) {
  const { render, className, style, ...elementProps } = componentProps;

  const store = usePopoverRootContext();

  const id = useObstudioId(elementProps.id);

  store.useSyncedValueWithCleanup('descriptionElementId', id);

  const element = useRenderElement('p', componentProps, {
    ref: forwardedRef,
    props: [{ id }, elementProps],
  });

  return element;
});

export interface PopoverDescriptionState {}

export interface PopoverDescriptionProps extends ObstudioComponentProps<
  'p',
  PopoverDescriptionState
> {}

export namespace PopoverDescription {
  export type State = PopoverDescriptionState;
  export type Props = PopoverDescriptionProps;
}

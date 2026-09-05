'use client';
import * as React from 'react';
import { FloatingPortalLite } from '../../utils/FloatingPortalLite';
import { type ObstudioComponentProps } from '../../internals/types';

/**
 * A portal element that moves the viewport to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Toast](https://obstudio.co/react/components/toast)
 */
export const ToastPortal = React.forwardRef(function ToastPortal(
  props: ToastPortal.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  return <FloatingPortalLite ref={forwardedRef} {...props} />;
});

export interface ToastPortalState {}

export interface ToastPortalProps extends ObstudioComponentProps<'div', ToastPortalState> {
  /**
   * A parent element to render the portal element into.
   */
  container?:
    HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined;
}

export namespace ToastPortal {
  export type State = ToastPortalState;
  export type Props = ToastPortalProps;
}

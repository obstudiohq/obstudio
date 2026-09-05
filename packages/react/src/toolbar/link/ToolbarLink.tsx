'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import type { ToolbarRoot } from '../root/ToolbarRoot';
import { useToolbarRootContext } from '../root/ToolbarRootContext';
import { CompositeItem } from '../../internals/composite/item/CompositeItem';

const TOOLBAR_LINK_METADATA = {
  // Links cannot be disabled, but they still occupy a focusable composite item slot.
  disabled: false,
  focusableWhenDisabled: true,
};

/**
 * A link component.
 * Renders an `<a>` element.
 *
 * Documentation: [Obstudio Toolbar](https://obstudio.co/react/components/toolbar)
 */
export const ToolbarLink = React.forwardRef(function ToolbarLink(
  componentProps: ToolbarLink.Props,
  forwardedRef: React.ForwardedRef<HTMLAnchorElement>,
) {
  const { className, render, style, ...elementProps } = componentProps;

  const { orientation } = useToolbarRootContext();

  const state: ToolbarLinkState = {
    orientation,
  };

  return (
    <CompositeItem
      tag="a"
      render={render}
      className={className}
      style={style}
      metadata={TOOLBAR_LINK_METADATA}
      state={state}
      refs={[forwardedRef]}
      props={[elementProps]}
    />
  );
});

export interface ToolbarLinkState {
  /**
   * The component orientation.
   */
  orientation: ToolbarRoot.Orientation;
}

export interface ToolbarLinkProps extends ObstudioComponentProps<
  'a',
  ToolbarLinkState,
  React.ComponentPropsWithRef<'a'>
> {}

export namespace ToolbarLink {
  export type State = ToolbarLinkState;
  export type Props = ToolbarLinkProps;
}

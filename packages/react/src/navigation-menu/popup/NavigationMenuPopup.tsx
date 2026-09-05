'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import { useRenderElement } from '../../internals/useRenderElement';
import { useNavigationMenuRootContext } from '../root/NavigationMenuRootContext';
import type { TransitionStatus } from '../../internals/useTransitionStatus';
import { useObstudioId } from '../../internals/useObstudioId';
import { useNavigationMenuPositionerContext } from '../positioner/NavigationMenuPositionerContext';
import { useDirection } from '../../internals/direction-context/DirectionContext';
import { popupTransitionStateMapping } from '../../utils/popupStateMapping';
import { Align, Side } from '../../internals/useAnchorPositioning';
import { getDisabledMountTransitionStyles } from '../../internals/getDisabledMountTransitionStyles';

/**
 * A container for the navigation menu contents.
 * Renders a `<nav>` element.
 *
 * Documentation: [Obstudio Navigation Menu](https://obstudio.co/react/components/navigation-menu)
 */
export const NavigationMenuPopup = React.forwardRef(function NavigationMenuPopup(
  componentProps: NavigationMenuPopup.Props,
  forwardedRef: React.ForwardedRef<HTMLElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const { open, transitionStatus, setPopupElement } = useNavigationMenuRootContext();
  const positioning = useNavigationMenuPositionerContext();
  const direction = useDirection();

  const id = useObstudioId(idProp);

  const state: NavigationMenuPopupState = {
    open,
    transitionStatus,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
  };

  // Ensure popup size transitions correctly when anchored to `bottom` (side=top) or `right` (side=left).
  let isPhysicalLeft = positioning.side === 'left';
  if (direction === 'rtl') {
    isPhysicalLeft = isPhysicalLeft || positioning.side === 'inline-end';
  } else {
    isPhysicalLeft = isPhysicalLeft || positioning.side === 'inline-start';
  }
  const isOriginSide = positioning.side === 'top' || isPhysicalLeft;

  const element = useRenderElement('nav', componentProps, {
    state,
    ref: [forwardedRef, setPopupElement],
    props: [
      {
        id,
        tabIndex: -1,
        style: isOriginSide
          ? {
              position: 'absolute',
              [positioning.side === 'top' ? 'bottom' : 'top']: '0',
              [isPhysicalLeft ? 'right' : 'left']: '0',
            }
          : {},
      },
      getDisabledMountTransitionStyles(transitionStatus),
      elementProps,
    ],
    stateAttributesMapping: popupTransitionStateMapping,
  });

  return element;
});

export interface NavigationMenuPopupState {
  /**
   * If `true`, the popup is open.
   */
  open: boolean;
  /**
   * The transition status of the popup.
   */
  transitionStatus: TransitionStatus;
  /**
   * The side of the anchor the popup is positioned on.
   */
  side: Side;
  /**
   * The alignment of the popup relative to the anchor.
   */
  align: Align;
  /**
   * Whether the anchor element is hidden.
   */
  anchorHidden: boolean;
}

export interface NavigationMenuPopupProps extends ObstudioComponentProps<
  'nav',
  NavigationMenuPopupState
> {}

export namespace NavigationMenuPopup {
  export type State = NavigationMenuPopupState;
  export type Props = NavigationMenuPopupProps;
}

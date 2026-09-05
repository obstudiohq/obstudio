'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import { useRenderElement } from '../../internals/useRenderElement';
import {
  NavigationMenuItemContext,
  NavigationMenuItemContextValue,
} from './NavigationMenuItemContext';
import { useObstudioId } from '../../internals/useObstudioId';

/**
 * An individual navigation menu item.
 * Renders a `<li>` element.
 *
 * Documentation: [Obstudio Navigation Menu](https://obstudio.co/react/components/navigation-menu)
 */
export const NavigationMenuItem = React.forwardRef(function NavigationMenuItem(
  componentProps: NavigationMenuItem.Props,
  forwardedRef: React.ForwardedRef<HTMLLIElement>,
) {
  const { render, className, style, value: valueProp, ...elementProps } = componentProps;

  const fallbackValue = useObstudioId();
  const value = valueProp ?? fallbackValue;

  const element = useRenderElement('li', componentProps, {
    ref: forwardedRef,
    props: elementProps,
  });

  const contextValue: NavigationMenuItemContextValue = React.useMemo(() => ({ value }), [value]);

  return (
    <NavigationMenuItemContext.Provider value={contextValue}>
      {element}
    </NavigationMenuItemContext.Provider>
  );
});

export interface NavigationMenuItemState {}

export interface NavigationMenuItemProps extends ObstudioComponentProps<
  'li',
  NavigationMenuItemState
> {
  /**
   * A unique value that identifies this navigation menu item.
   * If no value is provided, a unique ID will be generated automatically.
   * Use when controlling the navigation menu programmatically.
   */
  value?: any;
}

export namespace NavigationMenuItem {
  export type State = NavigationMenuItemState;
  export type Props = NavigationMenuItemProps;
}

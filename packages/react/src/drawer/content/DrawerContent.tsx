'use client';
import * as React from 'react';
import { useDialogRootContext } from '../../dialog/root/DialogRootContext';
import type { ObstudioComponentProps } from '../../internals/types';
import { useRenderElement } from '../../internals/useRenderElement';
import { DRAWER_CONTENT_ATTRIBUTE } from './drawerContentAttribute';

/**
 * A container for the drawer contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Drawer](https://obstudio.co/react/components/drawer)
 */
export const DrawerContent = React.forwardRef(function DrawerContent(
  componentProps: DrawerContent.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, ...elementProps } = componentProps;

  useDialogRootContext();

  return useRenderElement('div', componentProps, {
    ref: forwardedRef,
    props: [{ [DRAWER_CONTENT_ATTRIBUTE as string]: '' }, elementProps],
  });
});

export interface DrawerContentProps extends ObstudioComponentProps<'div', DrawerContentState> {}

export interface DrawerContentState {}

export namespace DrawerContent {
  export type Props = DrawerContentProps;
  export type State = DrawerContentState;
}

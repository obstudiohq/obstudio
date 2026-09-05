'use client';
import type * as React from 'react';
import { DialogTitle } from '../../dialog/title/DialogTitle';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * A heading that labels the drawer.
 * Renders an `<h2>` element.
 *
 * Documentation: [Obstudio Drawer](https://obstudio.co/react/components/drawer)
 */
export const DrawerTitle = DialogTitle as DrawerTitle;

export interface DrawerTitleProps extends ObstudioComponentProps<'h2', DrawerTitleState> {}

export interface DrawerTitleState {}

export interface DrawerTitle {
  (componentProps: DrawerTitleProps): React.JSX.Element;
}

export namespace DrawerTitle {
  export type Props = DrawerTitleProps;
  export type State = DrawerTitleState;
}

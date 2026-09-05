'use client';
import type * as React from 'react';
import { DialogClose } from '../../dialog/close/DialogClose';
import type { ObstudioComponentProps, NativeButtonProps } from '../../internals/types';

/**
 * A button that closes the drawer.
 * Renders a `<button>` element.
 *
 * Documentation: [Obstudio Drawer](https://obstudio.co/react/components/drawer)
 */
export const DrawerClose = DialogClose as DrawerClose;

export interface DrawerCloseProps
  extends NativeButtonProps, ObstudioComponentProps<'button', DrawerCloseState> {}

export interface DrawerCloseState {
  /**
   * Whether the button is currently disabled.
   */
  disabled: boolean;
}

export interface DrawerClose {
  (componentProps: DrawerCloseProps): React.JSX.Element;
}

export namespace DrawerClose {
  export type Props = DrawerCloseProps;
  export type State = DrawerCloseState;
}

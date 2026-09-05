'use client';
import type * as React from 'react';
import { DialogDescription } from '../../dialog/description/DialogDescription';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * A paragraph with additional information about the drawer.
 * Renders a `<p>` element.
 *
 * Documentation: [Obstudio Drawer](https://obstudio.co/react/components/drawer)
 */
export const DrawerDescription = DialogDescription as DrawerDescription;

export interface DrawerDescriptionProps extends ObstudioComponentProps<
  'p',
  DrawerDescriptionState
> {}

export interface DrawerDescriptionState {}

export interface DrawerDescription {
  (componentProps: DrawerDescriptionProps): React.JSX.Element;
}

export namespace DrawerDescription {
  export type Props = DrawerDescriptionProps;
  export type State = DrawerDescriptionState;
}

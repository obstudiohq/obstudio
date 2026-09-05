'use client';
import * as React from 'react';
import { useDialogRootContext } from '../root/DialogRootContext';
import { useRenderElement } from '../../internals/useRenderElement';
import { useObstudioId } from '../../internals/useObstudioId';
import { type ObstudioComponentProps } from '../../internals/types';

/**
 * A heading that labels the dialog.
 * Renders an `<h2>` element.
 *
 * Documentation: [Obstudio Dialog](https://obstudio.co/react/components/dialog)
 */
export const DialogTitle = React.forwardRef(function DialogTitle(
  componentProps: DialogTitle.Props,
  forwardedRef: React.ForwardedRef<HTMLHeadingElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const store = useDialogRootContext();

  const id = useObstudioId(idProp);

  store.useSyncedValueWithCleanup('titleElementId', id);

  return useRenderElement('h2', componentProps, {
    ref: forwardedRef,
    props: [{ id }, elementProps],
  });
});

export interface DialogTitleProps extends ObstudioComponentProps<'h2', DialogTitleState> {}

export interface DialogTitleState {}

export namespace DialogTitle {
  export type Props = DialogTitleProps;
  export type State = DialogTitleState;
}

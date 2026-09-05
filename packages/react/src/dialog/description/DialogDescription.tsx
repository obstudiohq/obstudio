'use client';
import * as React from 'react';
import { useDialogRootContext } from '../root/DialogRootContext';
import { useRenderElement } from '../../internals/useRenderElement';
import { useObstudioId } from '../../internals/useObstudioId';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * A paragraph with additional information about the dialog.
 * Renders a `<p>` element.
 *
 * Documentation: [Obstudio Dialog](https://obstudio.co/react/components/dialog)
 */
export const DialogDescription = React.forwardRef(function DialogDescription(
  componentProps: DialogDescription.Props,
  forwardedRef: React.ForwardedRef<HTMLParagraphElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const store = useDialogRootContext();

  const id = useObstudioId(idProp);

  store.useSyncedValueWithCleanup('descriptionElementId', id);

  return useRenderElement('p', componentProps, {
    ref: forwardedRef,
    props: [{ id }, elementProps],
  });
});

export interface DialogDescriptionProps extends ObstudioComponentProps<
  'p',
  DialogDescriptionState
> {}

export interface DialogDescriptionState {}

export namespace DialogDescription {
  export type Props = DialogDescriptionProps;
  export type State = DialogDescriptionState;
}

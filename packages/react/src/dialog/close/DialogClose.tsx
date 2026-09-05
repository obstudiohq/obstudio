'use client';
import * as React from 'react';
import { useDialogRootContext } from '../root/DialogRootContext';
import { useRenderElement } from '../../internals/useRenderElement';
import type { ObstudioComponentProps, NativeButtonProps } from '../../internals/types';
import { useButton } from '../../internals/use-button';
import { createChangeEventDetails } from '../../internals/createObstudioEventDetails';
import { REASONS } from '../../internals/reasons';

/**
 * A button that closes the dialog.
 * Renders a `<button>` element.
 *
 * Documentation: [Obstudio Dialog](https://obstudio.co/react/components/dialog)
 */
export const DialogClose = React.forwardRef(function DialogClose(
  componentProps: DialogClose.Props,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  const {
    render,
    className,
    style,
    disabled = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;

  const store = useDialogRootContext();
  const open = store.useState('open');

  const { getButtonProps, buttonRef } = useButton({
    disabled,
    native: nativeButton,
  });

  const state: DialogCloseState = { disabled };

  function handleClick(event: React.MouseEvent) {
    if (open) {
      store.setOpen(false, createChangeEventDetails(REASONS.closePress, event.nativeEvent));
    }
  }

  return useRenderElement('button', componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [{ onClick: handleClick }, elementProps, getButtonProps],
  });
});

export interface DialogCloseProps
  extends NativeButtonProps, ObstudioComponentProps<'button', DialogCloseState> {}

export interface DialogCloseState {
  /**
   * Whether the button is currently disabled.
   */
  disabled: boolean;
}

export namespace DialogClose {
  export type Props = DialogCloseProps;
  export type State = DialogCloseState;
}

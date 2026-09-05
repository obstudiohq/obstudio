'use client';
import * as React from 'react';
import type { ObstudioComponentProps, NativeButtonProps } from '../../internals/types';
import { useNumberFieldStepperButton } from '../root/useNumberFieldStepperButton';
import type { NumberFieldRootState } from '../root/NumberFieldRoot';

/**
 * A stepper button that increases the field value when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Obstudio Number Field](https://obstudio.co/react/components/number-field)
 */
export const NumberFieldIncrement = React.forwardRef(function NumberFieldIncrement(
  componentProps: NumberFieldIncrement.Props,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  return useNumberFieldStepperButton(componentProps, forwardedRef, true);
});

export interface NumberFieldIncrementState extends NumberFieldRootState {}

export interface NumberFieldIncrementProps
  extends NativeButtonProps, ObstudioComponentProps<'button', NumberFieldIncrementState> {}

export namespace NumberFieldIncrement {
  export type State = NumberFieldIncrementState;
  export type Props = NumberFieldIncrementProps;
}

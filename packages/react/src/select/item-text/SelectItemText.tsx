'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import { useSelectRootContext } from '../root/SelectRootContext';
import { useSelectItemContext } from '../item/SelectItemContext';
import { useRenderElement } from '../../internals/useRenderElement';

/**
 * A text label of the select item.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Select](https://obstudio.co/react/components/select)
 */
export const SelectItemText = React.memo(
  React.forwardRef(function SelectItemText(
    componentProps: SelectItemText.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
    const { index, textRef, selectedByFocus } = useSelectItemContext();
    const store = useSelectRootContext();

    const { render, className, style, ...elementProps } = componentProps;

    const localRef = React.useCallback(
      (node: HTMLElement | null) => {
        if (!node) {
          return;
        }

        if (index === 0) {
          store.context.firstItemTextRef.current = node;
        }
        if (selectedByFocus) {
          store.context.selectedItemTextRef.current = node;
        }
      },
      [store, index, selectedByFocus],
    );

    const element = useRenderElement('div', componentProps, {
      ref: [localRef, forwardedRef, textRef],
      props: elementProps,
    });

    return element;
  }),
);

export interface SelectItemTextState {}

export interface SelectItemTextProps extends ObstudioComponentProps<'div', SelectItemTextState> {}

export namespace SelectItemText {
  export type State = SelectItemTextState;
  export type Props = SelectItemTextProps;
}

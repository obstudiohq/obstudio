'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import { ObstudioComponentProps } from '../../internals/types';
import { useObstudioId } from '../../internals/useObstudioId';
import { useComboboxGroupContext } from '../group/ComboboxGroupContext';
import { useRenderElement } from '../../internals/useRenderElement';

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Combobox](https://obstudio.co/react/components/combobox)
 */
export const ComboboxGroupLabel = React.forwardRef(function ComboboxGroupLabel(
  componentProps: ComboboxGroupLabel.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const { setLabelId } = useComboboxGroupContext();

  const id = useObstudioId(idProp);

  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => (currentId === id ? undefined : currentId));
    };
  }, [id, setLabelId]);

  const element = useRenderElement('div', componentProps, {
    ref: forwardedRef,
    props: [{ id, 'aria-hidden': true }, elementProps],
  });

  return element;
});

export interface ComboboxGroupLabelState {}

export interface ComboboxGroupLabelProps extends ObstudioComponentProps<
  'div',
  ComboboxGroupLabelState
> {}

export namespace ComboboxGroupLabel {
  export type State = ComboboxGroupLabelState;
  export type Props = ComboboxGroupLabelProps;
}

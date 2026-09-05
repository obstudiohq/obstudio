'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import type { ObstudioComponentProps } from '../../internals/types';
import { useObstudioId } from '../../internals/useObstudioId';
import { useSelectGroupContext } from '../group/SelectGroupContext';
import { useRenderElement } from '../../internals/useRenderElement';

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Select](https://obstudio.co/react/components/select)
 */
export const SelectGroupLabel = React.forwardRef(function SelectGroupLabel(
  componentProps: SelectGroupLabel.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const { setLabelId } = useSelectGroupContext();

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

export interface SelectGroupLabelState {}

export interface SelectGroupLabelProps extends ObstudioComponentProps<
  'div',
  SelectGroupLabelState
> {}

export namespace SelectGroupLabel {
  export type State = SelectGroupLabelState;
  export type Props = SelectGroupLabelProps;
}

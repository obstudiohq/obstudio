'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@obstudio/utils/useIsoLayoutEffect';
import type { ObstudioComponentProps } from '../../internals/types';
import { useRenderElement } from '../../internals/useRenderElement';
import { useObstudioId } from '../../internals/useObstudioId';
import { useMenuGroupRootContext } from '../group/MenuGroupContext';

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Menu](https://obstudio.co/react/components/menu)
 */
export const MenuGroupLabel = React.forwardRef(function MenuGroupLabel(
  componentProps: MenuGroupLabel.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const id = useObstudioId(idProp);

  const setLabelId = useMenuGroupRootContext();

  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId((currentId) => (currentId === id ? undefined : currentId));
    };
  }, [setLabelId, id]);

  return useRenderElement('div', componentProps, {
    ref: forwardedRef,
    props: {
      id,
      'aria-hidden': true,
      ...elementProps,
    },
  });
});

export interface MenuGroupLabelProps extends ObstudioComponentProps<'div', MenuGroupLabelState> {}

export interface MenuGroupLabelState {}

export namespace MenuGroupLabel {
  export type Props = MenuGroupLabelProps;
  export type State = MenuGroupLabelState;
}

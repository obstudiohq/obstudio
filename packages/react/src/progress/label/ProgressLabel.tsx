'use client';
import * as React from 'react';
import { useRenderElement } from '../../internals/useRenderElement';
import { useRegisteredLabelId } from '../../utils/useRegisteredLabelId';
import { useProgressRootContext } from '../root/ProgressRootContext';
import { progressStateAttributesMapping } from '../root/stateAttributesMapping';
import type { ProgressRootState } from '../root/ProgressRoot';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * An accessible label for the progress bar.
 * Renders a `<span>` element.
 *
 * Documentation: [Obstudio Progress](https://obstudio.co/react/components/progress)
 */
export const ProgressLabel = React.forwardRef(function ProgressLabel(
  componentProps: ProgressLabel.Props,
  forwardedRef: React.ForwardedRef<HTMLSpanElement>,
) {
  const { render, className, style, id: idProp, ...elementProps } = componentProps;

  const { setLabelId, state } = useProgressRootContext();

  const id = useRegisteredLabelId(idProp, setLabelId);

  const element = useRenderElement('span', componentProps, {
    state,
    ref: forwardedRef,
    props: [
      {
        id,
        role: 'presentation',
      },
      elementProps,
    ],
    stateAttributesMapping: progressStateAttributesMapping,
  });

  return element;
});

export interface ProgressLabelState extends ProgressRootState {}

export interface ProgressLabelProps extends ObstudioComponentProps<'span', ProgressLabelState> {}

export namespace ProgressLabel {
  export type State = ProgressLabelState;
  export type Props = ProgressLabelProps;
}

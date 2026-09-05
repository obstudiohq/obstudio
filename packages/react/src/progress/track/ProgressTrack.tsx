'use client';
import * as React from 'react';
import { useRenderElement } from '../../internals/useRenderElement';
import { useProgressRootContext } from '../root/ProgressRootContext';
import { progressStateAttributesMapping } from '../root/stateAttributesMapping';
import type { ProgressRootState } from '../root/ProgressRoot';
import type { ObstudioComponentProps } from '../../internals/types';

/**
 * Contains the progress bar indicator.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Progress](https://obstudio.co/react/components/progress)
 */
export const ProgressTrack = React.forwardRef(function ProgressTrack(
  componentProps: ProgressTrack.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, ...elementProps } = componentProps;

  const { state } = useProgressRootContext();

  const element = useRenderElement('div', componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: progressStateAttributesMapping,
  });

  return element;
});

export interface ProgressTrackState extends ProgressRootState {}

export interface ProgressTrackProps extends ObstudioComponentProps<'div', ProgressTrackState> {}

export namespace ProgressTrack {
  export type State = ProgressTrackState;
  export type Props = ProgressTrackProps;
}

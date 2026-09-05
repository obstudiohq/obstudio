'use client';
import * as React from 'react';
import type { ObstudioComponentProps } from '../../internals/types';
import { useScrollAreaRootContext } from '../root/ScrollAreaRootContext';
import { useScrollAreaScrollbarContext } from '../scrollbar/ScrollAreaScrollbarContext';
import { useRenderElement } from '../../internals/useRenderElement';

/**
 * The draggable part of the scrollbar that indicates the current scroll position.
 * Renders a `<div>` element.
 *
 * Documentation: [Obstudio Scroll Area](https://obstudio.co/react/components/scroll-area)
 */
export const ScrollAreaThumb = React.forwardRef(function ScrollAreaThumb(
  componentProps: ScrollAreaThumb.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render, className, style, ...elementProps } = componentProps;

  const {
    thumbYRef,
    thumbXRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    scrollingX,
    scrollingY,
    hasMeasuredScrollbar,
  } = useScrollAreaRootContext();

  const orientation = useScrollAreaScrollbarContext();
  const vertical = orientation === 'vertical';

  const state: ScrollAreaThumbState = {
    scrolling: vertical ? scrollingY : scrollingX,
    orientation,
  };

  const element = useRenderElement('div', componentProps, {
    ref: [forwardedRef, vertical ? thumbYRef : thumbXRef],
    state,
    props: [
      {
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onPointerCancel: handlePointerUp,
        style: {
          visibility: hasMeasuredScrollbar ? undefined : 'hidden',
          ...(vertical
            ? { height: 'var(--scroll-area-thumb-height)' }
            : { width: 'var(--scroll-area-thumb-width)' }),
        },
      },
      elementProps,
    ],
  });

  return element;
});

export interface ScrollAreaThumbState {
  /**
   * Whether the scroll area is being scrolled.
   */
  scrolling: boolean;
  /**
   * The component orientation.
   */
  orientation: 'horizontal' | 'vertical';
}

export interface ScrollAreaThumbProps extends ObstudioComponentProps<'div', ScrollAreaThumbState> {}

export namespace ScrollAreaThumb {
  export type State = ScrollAreaThumbState;
  export type Props = ScrollAreaThumbProps;
}

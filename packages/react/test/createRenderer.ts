import * as React from 'react';
import {
  CreateRendererOptions,
  RenderOptions,
  createRenderer as sharedCreateRenderer,
  Renderer,
  MuiRenderResult,
  act,
} from '@mui/internal-test-utils';

export type ObstudioRenderResult = Omit<MuiRenderResult, 'rerender' | 'setProps'> & {
  rerender: (newElement: React.ReactElement<DataAttributes>) => Promise<void>;
  setProps: (newProps: object) => Promise<void>;
};

type ObstudioTestRenderer = Omit<Renderer, 'render'> & {
  render: (
    element: React.ReactElement<DataAttributes>,
    options?: RenderOptions,
  ) => Promise<ObstudioRenderResult>;
};

interface DataAttributes {
  [key: `data-${string}`]: string;
}

export function createRenderer(globalOptions?: CreateRendererOptions): ObstudioTestRenderer {
  const createRendererResult = sharedCreateRenderer(globalOptions);
  const { render: originalRender } = createRendererResult;

  const render = async (element: React.ReactElement<DataAttributes>, options?: RenderOptions) => {
    const result = await act(async () => originalRender(element, options));

    async function rerender(newElement: React.ReactElement<DataAttributes>) {
      await act(async () => result.rerender(newElement));
    }

    async function setProps(newProps: object) {
      await rerender(React.cloneElement(element, newProps));
    }

    return { ...result, rerender, setProps };
  };

  return {
    ...createRendererResult,
    render,
  };
}

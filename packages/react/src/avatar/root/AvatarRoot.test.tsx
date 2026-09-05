import { describe } from 'vitest';
import { Avatar } from '@obstudio/react/avatar';
import { describeConformance, createRenderer } from '#test-utils';

describe('<Avatar.Root />', () => {
  const { render } = createRenderer();

  describeConformance(<Avatar.Root />, () => ({
    render,
    refInstanceof: window.HTMLSpanElement,
  }));
});

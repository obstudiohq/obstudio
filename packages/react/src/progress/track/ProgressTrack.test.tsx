import { describe } from 'vitest';
import { Progress } from '@obstudio/react/progress';
import { createRenderer, describeConformance } from '#test-utils';

describe('<Progress.Track />', () => {
  const { render } = createRenderer();

  describeConformance(<Progress.Track />, () => ({
    render: (node) => {
      return render(<Progress.Root value={40}>{node}</Progress.Root>);
    },
    refInstanceof: window.HTMLDivElement,
  }));
});

import { describe } from 'vitest';
import { Input } from '@obstudio/react/input';
import { createRenderer } from '@mui/internal-test-utils';
import { describeConformance } from '../../test/describeConformance';

describe('<Input />', () => {
  const { render } = createRenderer();

  describeConformance(<Input />, () => ({
    refInstanceof: window.HTMLInputElement,
    render,
  }));
});

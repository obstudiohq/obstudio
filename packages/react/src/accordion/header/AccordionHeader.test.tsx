import { expect, vi, describe, it } from 'vitest';
import { Accordion } from '@obstudio/react/accordion';
import { describeConformance, createRenderer } from '#test-utils';

describe('<Accordion.Header />', () => {
  const { render } = createRenderer();

  it('throws when rendered outside an Accordion.Item', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    try {
      await expect(render(<Accordion.Header />)).rejects.toThrow(
        'Obstudio: AccordionItemContext is missing. Accordion parts must be placed within <Accordion.Item>.',
      );
    } finally {
      errorSpy.mockRestore();
    }
  });

  describeConformance(<Accordion.Header />, () => ({
    render: (node) =>
      render(
        <Accordion.Root>
          <Accordion.Item>{node}</Accordion.Item>
        </Accordion.Root>,
      ),
    refInstanceof: window.HTMLHeadingElement,
  }));
});

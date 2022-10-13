import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { useCaretPosition } from '../src';

import { DemoInput } from './DemoInput';

const meta: Meta = {
  title: 'Hook Demo',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
};

export default meta;

export const HookDemo: Story = () => {
  const { start, end, ref, updateCaret } = useCaretPosition();

  const [text, setText] = React.useState('hello world');

  return (
    <div>
      <h1>useCaretPosition</h1>

      <p>
        When using the hook to track the caret position, the caret will not get
        booted to the end of the input on each keystroke 🎉
      </p>

      <p>Type anywhere in the middle of the input to simulate this behavior.</p>

      <DemoInput
        ref={ref}
        value={text}
        onChange={value => {
          setText(value);

          // uses the hook to manage position
          updateCaret();
        }}
      />

      <div>
        start position: <strong>{start}</strong>, end position:{' '}
        <strong>{end}</strong>
      </div>
    </div>
  );
};

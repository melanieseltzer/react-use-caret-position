import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { DemoInput } from './DemoInput';

const meta: Meta = {
  title: 'The Problem It Solves',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
};

export default meta;

export const TheProblemItSolves: Story = () => {
  const [text, setText] = React.useState('hello world');

  return (
    <div>
      <h1>The problem it solves</h1>

      <p>
        This input has a side effect in its <code>onChange</code> handler.
      </p>

      <p>
        React loses caret position after each keystroke and jumps the caret to
        the end of the input, making for a terrible typing experience 👎
      </p>

      <p>Type anywhere in the middle of the input to simulate this behavior.</p>

      <DemoInput
        value={text}
        onChange={(value: string) => {
          setText(value);
        }}
      />
    </div>
  );
};

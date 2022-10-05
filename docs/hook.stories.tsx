import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { useCaretPosition } from '../src';

const meta: Meta = {
  title: 'useCaretPosition',
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
      <p>
        This input has a side effect in its <code>onChange</code> handler. React
        loses caret position after each keystroke and jumps the caret to the end
        of the input, making for a terrible typing experience. Type anywhere in
        the middle of the input to simulate this behavior.
      </p>

      <DemoInput
        value={text}
        onChange={(value: string) => {
          setText(value);
        }}
      />
    </div>
  );
};

export const HookDemo: Story = () => {
  const { start, end, ref, updateCaret } = useCaretPosition();

  const [text, setText] = React.useState('hello world');

  return (
    <div>
      <p>
        Using the <code>useCaretPosition</code> hook to track the caret
        position, the caret will not get booted to the end of the input on each
        keystroke. Type anywhere in the middle of the input to simulate this
        behavior.
      </p>

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

type DemoInputProps = {
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const DemoInput = React.forwardRef<HTMLInputElement, DemoInputProps>(
  ({ onChange, ...props }, ref) => (
    <div style={{ maxWidth: 300 }}>
      <input
        ref={ref}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          // Some sort of side effect
          const inputToUpperCase = e.currentTarget.value.toUpperCase();

          onChange(inputToUpperCase);
        }}
        {...props}
      />
    </div>
  )
);

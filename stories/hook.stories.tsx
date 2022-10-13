import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Meta } from '@storybook/react';

import { useCaretPosition } from '../src';

import { DemoInput } from './DemoInput';

export default {
  title: 'useCaretPosition',
} as Meta;

export const TheProblemItSolves: StoryFn = () => {
  const [text, setText] = React.useState('hello world');

  return (
    <div>
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

export const Demo: StoryFn = () => {
  const { start, end, ref, updateCaret } = useCaretPosition();

  const [text, setText] = React.useState('hello world');

  return (
    <div>
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

      <div style={{ marginTop: '1rem' }}>
        start position: <strong>{start}</strong>, end position:{' '}
        <strong>{end}</strong>
      </div>
    </div>
  );
};

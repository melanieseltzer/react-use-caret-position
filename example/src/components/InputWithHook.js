import React, { useEffect, useState, useRef } from 'react';
import useCaretPosition from 'react-use-caret-position';
import Input from './Input';

const highlight = {
  background: '#ffcccc',
  padding: '2px',
  fontWeight: '400'
};

const InputWithRef = () => {
  // Some sort of input state
  const [text, setText] = useState('hello world');

  // Must create a ref
  const inputRef = useRef();

  // Pass the ref into the hook
  const caret = useCaretPosition(inputRef);
  const { start, end, updateCaret, setCaretPosition } = caret;

  useEffect(() => {
    // Set the caret position on mount + update
    setCaretPosition();
  });

  const handleChange = e => {
    // Some sort of side effect in the onChange handler
    // which normally makes the input lose its position
    const inputToUpperCase = e.target.value.toUpperCase();
    setText(inputToUpperCase);

    // `updateCaret` will update the selectionStart and selectionEnd
    // values of the input
    updateCaret();
  };

  return (
    <div
      style={{
        maxWidth: '700px',
        background: '#eee',
        padding: '0 1rem',
        marginBottom: '1rem'
      }}
    >
      <h2 style={{ fontWeight: '400' }}>Input with useCaretPosition</h2>
      <p>
        start: {start}, end: {end}
      </p>
      <Input
        label="with"
        ref={inputRef}
        value={text}
        onChange={e => handleChange(e)}
      />
      <p style={{ lineHeight: '24px' }}>
        <mark style={highlight}>useCaretPosition</mark> cleverly keeps track of
        the input <mark style={highlight}>selectionStart</mark> and{' '}
        <mark style={highlight}>selectionEnd</mark>, so we no longer get booted
        to the end of the input... nice!{' '}
        <span role="img" aria-label="sunglasses emoji">
          😎
        </span>
        <span role="img" aria-label="thumbs up emoji">
          👍
        </span>
      </p>
    </div>
  );
};

export default InputWithRef;

import React, { useEffect, useState, useRef } from 'react';
import useCaretPosition from 'react-use-caret-position';

const Input = () => {
  // Some sort of input state
  const [text, setText] = useState('hello');

  // Must create a ref
  const inputRef = useRef();

  // Pass the ref into the hook
  const { start, end, updateCaret, setCaretPosition } = useCaretPosition(
    inputRef
  );

  useEffect(() => {
    console.log(`selectionStart: ${start}`);
    console.log(`selectionEnd: ${end}`);
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
    <input
      type="text"
      ref={inputRef}
      value={text}
      onChange={e => handleChange(e)}
      style={{ fontSize: '2rem' }}
    />
  );
};

const App = () => <Input />;

export default App;

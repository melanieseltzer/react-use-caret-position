import React, { useState } from 'react';
import Input from '../components/Input';

const InputWithoutHook = () => {
  // Some sort of input state
  const [text, setText] = useState('hello world');

  const handleChange = e => {
    // Some sort of side effect in the onChange handler
    const inputToUpperCase = e.target.value.toUpperCase();
    setText(inputToUpperCase);
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
      <h2 style={{ fontWeight: '400' }}>Input without useCaretPosition</h2>
      <Input label="without" value={text} onChange={e => handleChange(e)} />
      <p style={{ lineHeight: '22px' }}>
        Since there is a side effect in the onChange handler, React loses
        position of the caret and it jumps to the end of the input after each
        change{' '}
        <span role="img" aria-label="weary emoji">
          😩
        </span>
        <span role="img" aria-label="thumbs down emoji">
          👎
        </span>
      </p>

      <p style={{ lineHeight: '22px' }}>
        Try typing somewhere in the middle of the input to simulate this
        behavior.
      </p>
    </div>
  );
};

export default InputWithoutHook;

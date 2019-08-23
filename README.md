<h1 align="center">
  🎣
  <br>
  react-use-caret-position
</h1>

![CircleCI (all branches)](https://img.shields.io/circleci/project/github/melanieseltzer/react-use-caret-position.svg) [![npm (scoped)](https://img.shields.io/npm/v/react-use-caret-position.svg)](https://www.npmjs.com/package/react-use-caret-position) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Motivation

<img width="300" src="screencap.gif?raw=true" alt="screencap">

When working on a project, I came across an interesting case where the input was losing its caret position after each change. I realized it was happening if there was some sort of side effect in the `onChange` handler. In my case, I was dispatching a Redux action on change and nothing else, but the side effect could be anything, really.

`react-use-caret-position` attempts to fix that by keeping track of the caret position and setting it on render.

## Install

With npm...

```bash
npm install react-use-caret-position
```

With yarn...

```bash
yarn add react-use-caret-position
```

## Usage

<!-- prettier-ignore -->
```js
const caret = useCaretPosition(inputRef);
const { start, end, updateCaret } = caret;
```

Like so...

<!-- prettier-ignore -->
```js
import React, { useState } from 'react';
import { useCaretPosition } from 'react-use-caret-position';

const Input = () => {
  // Some sort of input state
  const [text, setText] = useState('hello world');

  // Track the caret position with the hook
  const { ref: inputRef, updateCaret } = useCaretPosition();

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
      ref={inputRef} 
      value={value} 
      onChange={handleChange} 
    />
  );
};

export default Input;
```

## API

### Parameters

Pass `useCaretPosition` a ref of an input or textarea to track.

### Return Object

| Key           | Description                                               |
| :------------ | :-------------------------------------------------------- |
| `inputRef`    | `React.RefObject` that should be assigned to your input   |
| `start`       | `number` containing the current state of `selectionStart` |
| `end`         | `number` containing the current state of `selectionEnd`   |
| `updateCaret` | `function` which updates both caret states                |

## Thanks ❤️

- [create-react-library](https://github.com/transitive-bullshit/create-react-library/)

## License

MIT © [melanieseltzer](https://github.com/melanieseltzer)

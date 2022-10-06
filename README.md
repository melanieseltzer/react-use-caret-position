<h1 align="center">
  🎣
  <br />
  react-use-caret-position
</h1>

[![npm (scoped)](https://img.shields.io/npm/v/react-use-caret-position.svg)](https://www.npmjs.com/package/react-use-caret-position) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Live demo: https://react-use-caret-position.netlify.app

## Motivation

If there is some side effect/async code in an input's `onChange` event handler (e.g. dispatching a Redux action without doing anything else, format text in some way like uppercase, etc), the caret will annoyingly be booted to the end of the input after each keystroke.

`react-use-caret-position` fixes this undesirable behavior by keeping track of the caret position and setting it on render.

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
import React, { useState } from 'react';
import { useCaretPosition } from 'react-use-caret-position';

const Input = () => {
  const [text, setText] = useState('hello world');

  const { ref, updateCaret } = useCaretPosition();

  const handleChange = e => {
    // Some side effect in the `onChange` handler (could be anything)
    const inputToUpperCase = e.target.value.toUpperCase();

    setText(inputToUpperCase);

    // Track the caret position with the hook
    updateCaret();
  };

  return (
    <input 
      ref={ref}
      value={value} 
      onChange={handleChange} 
    />
  );
};

export default Input;
```

## API

<!-- prettier-ignore -->
```js
const { ref, start, end, updateCaret } = useCaretPosition();
```

### Return Object

| Key           | Type              | Description                                  |
| :------------ | :---------------- | :------------------------------------------- |
| `ref`         | `React.RefObject` | Ref that should be assigned to your input    |
| `start`       | `number`          | Current start position of the text selection |
| `end`         | `number`          | Current end position of the text selection   |
| `updateCaret` | `() => void`      | Function to set the caret position           |

## License

MIT © [melanieseltzer](https://github.com/melanieseltzer)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://aaronross.tech"><img src="https://avatars1.githubusercontent.com/u/18172185?v=4" width="100px;" alt="Aaron Ross"/><br /><sub><b>Aaron Ross</b></sub></a><br /><a href="https://github.com/melanieseltzer/react-use-caret-position/commits?author=superhawk610" title="Code">💻</a> <a href="https://github.com/melanieseltzer/react-use-caret-position/commits?author=superhawk610" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

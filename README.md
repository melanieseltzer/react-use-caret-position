# react-library-boilerplate

![CircleCI (all branches)](https://img.shields.io/circleci/project/github/USERNAME/REPONAME.svg) [![npm (scoped)](https://img.shields.io/npm/v/PACKAGE-NAME-HERE.svg)](https://www.npmjs.com/package/PACKAGE-NAME-HERE) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Created from [create-react-library](https://www.npmjs.com/package/create-react-library) output but modified to satisfy my particular dev style 🤔 This is just a boilerplate to get up and running quickly with react library development. Just clone and copy the code (this is not a CLI like CRL).

- Typescript with Eslint support
- My personal Eslint and Prettier config
- Husky/lint-staged on every commit
- Opinionated component folder pattern
- CircleCI instead of Travis

## Install

```bash
npm install --save ...
```

## Usage

```tsx
import React, { Component } from 'react';
import { HelloWorld } from '...';

export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}
```

## Thanks ❤️

- [create-react-library](https://github.com/transitive-bullshit/create-react-library/)

## License

MIT © [melanieseltzer](https://github.com/melanieseltzer)

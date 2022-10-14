# react-use-caret-position

## 1.1.0

### Minor Changes

- [#73](https://github.com/melanieseltzer/react-use-caret-position/pull/73) [`cb32a6b`](https://github.com/melanieseltzer/react-use-caret-position/commit/cb32a6bbf5f2f9037e7787c96c23cec5a80218da) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Clean up package.json:

  - Remove `jsnext:main` as it's deprecated and replaced by `module` field
  - Add an `exports` map
  - Mark package as a module
  - Point to TypeScript types
  - Expose UMD and modern bundle

### Patch Changes

- [#77](https://github.com/melanieseltzer/react-use-caret-position/pull/77) [`f4579e0`](https://github.com/melanieseltzer/react-use-caret-position/commit/f4579e04954118670492fbb06ace41ee7e1d6761) Thanks [@melanieseltzer](https://github.com/melanieseltzer)! - Removed conditionals checking existence of the ref object itself. The returned ref object from `useEffect` always exists, so the checks were unnecessary.

  ```diff
  - if (node && node.current)
  + if (node.current)
  ```

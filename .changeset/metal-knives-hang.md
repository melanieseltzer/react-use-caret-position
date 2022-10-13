---
'react-use-caret-position': patch
---

Clean up package.json after switching bundler to [Microbundle](https://github.com/developit/microbundle):

- Remove `jsnext:main` as it's deprecated and replaced by `module` field
- Add an `exports` map
- Mark package as a module
- Point to TypeScript types
- Expose UMD and modern bundle

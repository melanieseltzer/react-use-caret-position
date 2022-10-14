---
'react-use-caret-position': patch
---

Removed conditionals checking existence of the ref object itself. The returned ref object from `useEffect` always exists, so the checks were unnecessary.

```diff
- if (node && node.current)
+ if (node.current)
```

import { useState, useRef, useEffect } from 'react';

export function useCaretPosition() {
  const node = useRef<any>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const updateCaret = () => {
    // Get the updated caret postions from the ref passed in
    if (node && node.current) {
      const { selectionStart } = node.current;
      const { selectionEnd } = node.current;

      // Update the state
      setStart(selectionStart);
      setEnd(selectionEnd);
    }
  };

  useEffect(() => {
    // Set the caret position by setting the selection range with the
    // most current start and end values
    if (node && node.current) {
      node.current.setSelectionRange(start, end);
    }
  });

  return { start, end, ref: node, updateCaret };
}

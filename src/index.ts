import { useState, RefObject } from 'react';

function useCaretPosition(node: RefObject<HTMLFormElement>) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

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

  const setCaretPosition = () => {
    // Set the caret position by setting the selection range with the
    // most current start and end values
    if (node && node.current && start && end) {
      node.current.setSelectionRange(start, end);
    }
  };

  return { start, end, updateCaret, setCaretPosition };
}

export default useCaretPosition;

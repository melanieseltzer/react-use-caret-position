import { useState } from 'react';

function useCaretPosition(node: any) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const updateCaret = () => {
    // Get the updated caret postions from the ref passed in
    const { selectionStart } = node.current;
    const { selectionEnd } = node.current;

    // Update the state
    setStart(selectionStart);
    setEnd(selectionEnd);
  };

  const setCaretPosition = () => {
    // Set the caret position by setting the selection range with the
    // most current start and end values
    node.current.setSelectionRange(start, end);
  };

  return { start, end, updateCaret, setCaretPosition };
}

export default useCaretPosition;

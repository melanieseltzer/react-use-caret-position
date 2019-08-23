import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import useCaretPosition from '.';

describe('useCaretPosition', () => {
  it('should initialize positions', () => {
    const inputRef = createRef<HTMLInputElement>();
    const { result } = renderHook(() => useCaretPosition(inputRef));
    expect(result.current.start).toBe(0);
    expect(result.current.end).toBe(0);
  });

  it('should update start and end from selectionStart and selectionEnd after calling updateCaret', () => {
    const node = React.createRef<HTMLInputElement>();
    const { result } = renderHook(() => useCaretPosition(node));
    mount(<input ref={node} />);

    if (node && node.current) {
      node.current.selectionStart = 3;
      node.current.selectionEnd = 3;
    }

    act(() => {
      result.current.updateCaret();
    });

    expect(result.current.start).toBe(3);
    expect(result.current.end).toBe(3);
  });
});

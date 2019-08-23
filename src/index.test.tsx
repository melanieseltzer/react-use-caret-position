import React from 'react';
import { mount } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCaretPosition } from '.';

describe('useCaretPosition', () => {
  it('should initialize positions', () => {
    const { result } = renderHook(() => useCaretPosition());
    expect(result.current.start).toBe(0);
    expect(result.current.end).toBe(0);
  });

  it('should update start and end from selectionStart and selectionEnd after calling updateCaret', () => {
    const { result } = renderHook(() => useCaretPosition());
    const { ref } = result.current;
    mount(<input ref={ref} />);

    act(() => {
      ref.current.setSelectionRange = jest.fn();
      ref.current.selectionStart = 3;
      ref.current.selectionEnd = 3;
      result.current.updateCaret();
    });

    expect(result.current.start).toBe(3);
    expect(result.current.end).toBe(3);
  });
});

import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { mount } from 'enzyme';

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

    void act(() => {
      // @ts-ignore disabling this temporarily
      ref.current = {
        setSelectionRange: jest.fn(),
        selectionStart: 3,
        selectionEnd: 3,
      } as any;

      result.current.updateCaret();
    });

    expect(result.current.start).toBe(3);
    expect(result.current.end).toBe(3);
  });
});

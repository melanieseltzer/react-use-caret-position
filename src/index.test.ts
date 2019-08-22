import { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useCaretPosition from '.';

describe('useCaretPosition', () => {
  it('should initialize positions to null', () => {
    const someRef = createRef<HTMLFormElement>();
    const { result } = renderHook(() => useCaretPosition(someRef));
    expect(result.current.start).toBe(null);
    expect(result.current.end).toBe(null);
  });
});

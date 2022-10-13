import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';

import { useCaretPosition } from '../src';

describe('useCaretPosition', () => {
  it('should initialize start and end positions', () => {
    const { result } = renderHook(() => useCaretPosition());
    expect(result.current.start).toBe(0);
    expect(result.current.end).toBe(0);
  });

  it('should update caret position when calling updateCaret', () => {
    const { result } = renderHook(() => useCaretPosition());
    const { ref } = result.current;

    render(<input ref={ref} aria-label="test-input" />);

    const input = screen.getByLabelText('test-input');

    fireEvent.change(input, {
      target: { value: 'Hello world!' },
    });

    act(() => {
      result.current.updateCaret();
    });

    expect(result.current.start).toBe(12);
    expect(result.current.end).toBe(12);
  });
});

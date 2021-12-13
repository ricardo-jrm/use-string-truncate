import { renderHook } from '@testing-library/react-hooks';
import { useStringTruncate } from '.';

describe('test useStringTruncate hook', () => {
  it('should truncate string', () => {
    const { result } = renderHook(() =>
      useStringTruncate('Lorem ipsum dolor sit amet', 20),
    );
    expect(result.current).toBe('Lorem ipsum dolor...');
  });
  it('should truncate string and keep last word', () => {
    const { result } = renderHook(() =>
      useStringTruncate('Lorem ipsum dolor sit amet', 20, true),
    );
    expect(result.current).toBe('Lorem ipsum ... amet');
  });
});

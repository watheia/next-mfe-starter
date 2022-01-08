import { act, renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from './use-local-storage';

describe('useLocalStorage', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() =>
      useLocalStorage<number>('watheia.ui.hooks.use-local-storage.spec', 42)
    );

    expect(result.current[0]).toBe(42);

    act(() => {
      result.current[1]((x) => x / 2);
    });

    expect(result.current[0]).toBe(21);
  });
});

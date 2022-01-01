import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './use-local-storage';

it('should increment counter', () => {
  const { result } = renderHook(() =>
    useLocalStorage('watheia.base-ui/hooks/use-local-storage', 'Hello, World!')
  );
  expect(result.current[0]).toBe('Hello, World!');
});

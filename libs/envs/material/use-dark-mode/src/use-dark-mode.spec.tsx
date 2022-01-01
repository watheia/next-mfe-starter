import { renderHook, act } from '@testing-library/react-hooks';
import { useDarkMode } from './use-dark-mode';

it('should increment counter', () => {
  const { result } = renderHook(() => useDarkMode());
  expect(result.current).toHaveLength(2);
});

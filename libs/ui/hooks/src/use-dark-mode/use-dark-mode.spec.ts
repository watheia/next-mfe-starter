import { act, renderHook } from '@testing-library/react-hooks';
import { useDarkMode } from './use-dark-mode';
import { expect } from 'chai';

describe('useDarkMode', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDarkMode());
    expect(result.current).to.have.lengthOf(2);

    act(() => {
      const [_, setValue] = result.current;
      setValue(true);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(result.current[0]).to.be.true;
  });
});

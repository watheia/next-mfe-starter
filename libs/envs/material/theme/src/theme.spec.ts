import { withTheme } from '.';
import { expect } from 'chai';
describe('material/theme', () => {
  it('should return a fully constructed theme for light color modes', () => {
    const theme = withTheme('light');
    expect(theme).to.have.property('palette');
    expect(theme.palette.mode).to.equal('light');
  });
  it('should return a fully constructed theme for dark color modes', () => {
    const theme = withTheme('dark');
    expect(theme).to.have.property('palette');
    expect(theme.palette.mode).to.equal('dark');
  });
});

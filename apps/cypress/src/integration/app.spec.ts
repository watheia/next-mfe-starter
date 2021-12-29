import { getCopyright, getTitle } from '../support/app.po';

describe('gatekeeper', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('should display title', () => {
    getTitle().contains('Watheia Gatekeeper');
  });

  it('should display copyright', () => {
    getCopyright().contains('Watheia Labs, LLC');
  });
});

import getUrl from './get-url';
const ENVIRONMENT = process.env['HOST'] ?? 'black-galliform-akqtwjts.ws-us25.gitpod.io';
describe('@watheia/mfe.util', () => {
  describe('getUrl', () => {
    it('MUST always return an absolute URL', () => {
      expect(getUrl()).toEqual(`https://4200-${ENVIRONMENT}.gitpod.io`);
      // Home
      expect(getUrl(`https://4210-${ENVIRONMENT}/home`)).toEqual(
        `https://4210-${ENVIRONMENT}.gitpod.io/home`
      );

      // Blog
      expect(getUrl(`https://4210-${ENVIRONMENT}.gitpod.io/blog`)).toEqual(
        `https://4210-${ENVIRONMENT}.gitpod.io/blog`
      );

      // Catalog
      expect(getUrl(`https://4220-${ENVIRONMENT}.gitpod.io/catalog`)).toEqual(
        `https://4210-${ENVIRONMENT}.gitpod.io/catalog`
      );
    });
    it('SHOULD join optional path segments', () => {
      expect(getUrl('blog')).toEqual(`http://localhost:4200/blog`);
      expect(getUrl('blog', '/posts/2021')).toEqual(
        'http://localhost:4200/blog/posts/2021'
      );
    });
  });
});

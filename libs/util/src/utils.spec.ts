import getUrl from './get-url';

describe('@watheia/mfe.util', () => {
  describe('getUrl', () => {
    it('MUST always return an absolute URL', () => {
      expect(getUrl()).toEqual('http://localhost:4200/');
    });
    it('SHOULD join optional path segments', () => {
      expect(getUrl('blog')).toEqual('http://localhost:4200/blog');
      expect(getUrl('blog', '/posts/2021')).toEqual(
        'http://localhost:4200/blog/posts/2021'
      );
    });
  });
});

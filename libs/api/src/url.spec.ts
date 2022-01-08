import url from './url';

describe('@watheia/mfe.api', () => {
  describe('url', () => {
    it('MUST always return an absolute URL', () => {
      expect(url().href).toEqual('http://localhost:4200/');
    });
    it('SHOULD join optional path segments', () => {
      expect(url('blog').href).toEqual('http://localhost:4200/blog');
      expect(url('blog', '/posts/2021').href).toEqual(
        'http://localhost:4200/blog/posts/2021'
      );
    });
  });
});

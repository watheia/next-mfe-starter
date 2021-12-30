import { render } from '@testing-library/react';
import { fixtures } from '@watheia/mfe.model';
import Blog from './blog';

const { categories, mainFeaturedPost, featuredPosts, posts, sidebar } = fixtures;

describe('Blog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Blog
        categories={categories}
        mainFeaturedPost={mainFeaturedPost}
        featuredPosts={featuredPosts}
        firehose={posts}
        sidebar={sidebar}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});

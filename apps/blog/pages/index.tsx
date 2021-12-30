import { fixtures as data } from '@watheia/mfe.model';
import { Blog } from '@watheia/ui-views';

export function BlogPage(props: any) {
  return (
    <Blog
      categories={data.categories}
      mainFeaturedPost={data.mainFeaturedPost}
      featuredPosts={data.featuredPosts}
      firehose={data.posts}
      sidebar={data.sidebar}
    />
  );
}

export default BlogPage;

import { fixtures as data } from '@waweb/model';
import { Blog } from '@waweb/views';

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

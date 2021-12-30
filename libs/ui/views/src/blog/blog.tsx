import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Post, Resource } from '@watheia/mfe.model';
import * as React from 'react';
import FeaturedPost from './components/FeaturedPost';
import Header from './components/Header';
import Main from './components/Main';
import MainFeaturedPost from './components/MainFeaturedPost';
import Sidebar from './components/Sidebar';

export interface Aside {
  title: string;
  description: string;
  archives: Resource[];
  social: Resource[];
}

export interface BlogProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  categories: Resource[];
  mainFeaturedPost: Post;
  featuredPosts?: Post[];
  firehose?: string[];
  sidebar: Aside;
}

export default function Blog(props: BlogProps) {
  const { sidebar } = props;
  return (
    <Container maxWidth="lg">
      <Header title="Blog" categories={props.categories} />
      <main>
        <MainFeaturedPost post={props.mainFeaturedPost} />
        {props.featuredPosts && (
          <Grid container spacing={4}>
            {props.featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        )}
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main title="From the firehose" posts={props.firehose ?? []} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives ?? []}
            social={sidebar.social ?? []}
          />
        </Grid>
      </main>
    </Container>
  );
}

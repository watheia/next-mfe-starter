import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Post } from '../types/Post';
import { Resource } from '../types/Resource';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

export const primaryNav: Resource[] = [
  { label: 'Home', url: '/home' },
  { label: 'Blog', url: '/blog' },
  { label: 'Catalog', url: '/catalog' },
];

export const categories: Resource[] = [
  { label: 'Technology', url: '/technology' },
  { label: 'Design', url: '/design' },
  { label: 'Culture', url: '/culture' },
  { label: 'Business', url: '/business' },
  { label: 'Politics', url: '/politics' },
  { label: 'Opinion', url: '/opinion' },
  { label: 'Science', url: '/science' },
  { label: 'Health', url: '/health' },
  { label: 'Style', url: '/style' },
  { label: 'Travel', url: '/travel' },
];

export const mainFeaturedPost: Post = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageLabel: 'main image description',
  date: 'Dec 20',
};

export const featuredPosts: Post[] = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

export const posts = [post1, post2, post3];

export const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { label: 'March 2020', url: '#' },
    { label: 'February 2020', url: '#' },
    { label: 'January 2020', url: '#' },
    { label: 'November 1999', url: '#' },
    { label: 'October 1999', url: '#' },
    { label: 'September 1999', url: '#' },
    { label: 'August 1999', url: '#' },
    { label: 'July 1999', url: '#' },
    { label: 'June 1999', url: '#' },
    { label: 'May 1999', url: '#' },
    { label: 'April 1999', url: '#' },
  ],
  social: [
    { label: 'GitHub', icon: GitHubIcon, url: '#' },
    { label: 'Twitter', icon: TwitterIcon, url: '#' },
    { label: 'Facebook', icon: FacebookIcon, url: '#' },
  ],
};

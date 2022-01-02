import { styled } from '@mui/system';
import { HtmlHTMLAttributes } from 'react';
import Commands from './components/commands';
import { Header } from '@watheia/ui-molecules';
import Hero from './components/hero';
import LearningMaterials from './components/learning-materials';
import OtherLinks from './components/other-links';

const Page = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

export type WelcomeProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  subTitle?: string;
};

export function Welcome({ subTitle = 'Hello there,', title, ...props }: WelcomeProps) {
  return (
    <Page {...props}>
      <div className="wrapper">
        <div className="container">
          <Header title={title} subTitle={subTitle} />
          <Hero />

          <div id="middle-content">
            <LearningMaterials />
            <OtherLinks />
          </div>

          <Commands />
        </div>
      </div>
    </Page>
  );
}

export default Welcome;

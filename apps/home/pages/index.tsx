import styled from '@emotion/styled';
import Layout from '@waweb/layout';
import { Welcome } from '@waweb/views';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return <Welcome title="Welcome Home" subTitle="Please enjoy your stay." />;
}

export default Index;

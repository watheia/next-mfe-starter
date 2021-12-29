import { Auth } from '@watheia/ui-views';
import { useAuth } from '@waweb/auth';
import React from 'react';

export function Index() {
  const auth = useAuth();
  return <Auth ctx={auth} />;
}

export default Index;

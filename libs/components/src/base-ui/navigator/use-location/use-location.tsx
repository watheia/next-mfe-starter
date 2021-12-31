import { Location, useRouter } from '@watheia/base-ui.navigator.router-context';

export function useLocation(): Location | undefined {
  const router = useRouter();
  const actualUseLocation = router.useLocation;

  if (!actualUseLocation) return window?.location;

  return actualUseLocation();
}

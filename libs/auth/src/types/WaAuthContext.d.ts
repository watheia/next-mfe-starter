import { Session } from '@supabase/gotrue-js';
import { WaSignInRequest } from './WaSignInRequest';
import { WaSignInResponse } from './WaSignInResponse';
import { WaSignOutResponse } from './WaSignOutResponse';
import { WaSignUpRequest } from './WaSignUpRequest';
import { WaSignUpResponse } from './WaSignUpResponse';

export interface WaAuthContext {
  session: Session | null;
  userLoaded: boolean;
  signIn: (options: WaSignInRequest) => WaSignInResponse;
  signUp: (options: WaSignUpRequest) => WaSignUpResponse;
  signOut: () => WaSignOutResponse;
}

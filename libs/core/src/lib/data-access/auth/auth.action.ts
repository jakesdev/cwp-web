import { createAction, props } from '@ngrx/store';
import { UserProfileModel } from '../../model/response-model';

export const authAction = {
  // checkAuthenticationWithAuth0Success: createAction(
  //   '[Auth] Check Authentication With Auth0 Success',
  //   props<{ auth0Profile: User }>()
  // ),

  loginUser: createAction('[Auth] Login User',

    props<{ email: string; password: string; }>()
  ),

  loginUserSuccess: createAction(
    '[Auth] Login User Success',
    props<{ userProfile: UserProfileModel; token: string; isAuthenticated: boolean; }>()
  ),

  loginUserFailure: createAction(
    '[Auth] Login User Error',
    props<{ error: any; }>()
  ),

  logOutUser: createAction('[Auth] Log Out User'),

  getUserProfile: createAction('[Auth] Get User Profile'),
  getUserProfileSuccess: createAction(
    '[Auth] Get User Profile Success',
    props<{ userProfile: UserProfileModel; }>()
  ),
  getUserProfileError: createAction(
    '[Auth] Get User Profile Error',
    props<{ error: any; }>()
  ),

  signUpUser: createAction('[Auth] Sign Up User',
    props<{ email: string; password: string; }>()
  ),

  signUpUserSuccess: createAction(
    '[Auth] Sign Up User Success',
    props<{ userProfile: UserProfileModel; token: string; isAuthenticated: boolean; }>()
  ),

  signUpUserFailure: createAction(
    '[Auth] Sign Up User Error',
    props<{ error: any; }>()
  ),

  setEmail: createAction('[Forgot Password] Set Email', props<{ email: string; }>()),
  resetForgotPassword: createAction('[Forgot Password] Reset State'),
  submitForgotPassword: createAction('[Forgot Password] Submit'),
  submitForgotPasswordSuccess: createAction('[Forgot Password] Submit Success', props<{ message: string; }>()),
  submitForgotPasswordFailure: createAction('[Forgot Password] Submit Failure', props<{ error: string; }>())

  // updateUserProfile: createAction(
  //   '[Auth] Update User Profile',
  //   props<{ userProfile: UserProfileModel }>()
  // ),
  // updateUserProfileSuccess: createAction(
  //   '[Auth] Update User Profile Success',
  //   props<{ userProfile: UserProfileModel }>()
  // ),
  // updateUserProfileError: createAction(
  //   '[Auth] Update User Profile Error',
  //   props<{ error: any }>()
  // ),

  // updateUserRole: createAction(
  //   '[Auth] Update User Role',
  //   props<{ userRole: UserRole }>()
  // ),
};

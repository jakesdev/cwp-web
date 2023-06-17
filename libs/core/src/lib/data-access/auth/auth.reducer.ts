import { createReducer, on } from '@ngrx/store';
import { UserProfileModel } from '../../model/response-model';

import { authAction } from './auth.action';

export const AUTH_STORE_FEATURE_KEY = 'auth';

export interface AuthState {
  isAuthenticated: boolean;
  userProfile: UserProfileModel | null;
  token: string | null;

  errorMessage?: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userProfile: null,
  token: null,
};

export interface ForgotPasswordState {
  email: string;
  loading: boolean;
  error: string | null;
}

const initialForgotPasswordState: ForgotPasswordState = {
  email: '',
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,

  on(authAction.getUserProfile, (state): AuthState => {
    return {
      ...state,
    };
  }),
  on(authAction.getUserProfileSuccess, (state, { userProfile }): AuthState => {
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));


    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),

  on(authAction.loginUser, (state): AuthState => {
    return {
      ...state,
    };
  }),

  on(authAction.loginUserSuccess, (state, { userProfile, token, isAuthenticated }): AuthState => {
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));

    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),

  on(authAction.loginUserFailure, (state): AuthState => {
    return {
      ...state,
      errorMessage: 'Incorrect email and/or password.'
    };
  }),

  on(authAction.logOutUser, (state): AuthState => {
    sessionStorage.removeItem('userProfile');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isAuthenticated');

    return {
      ...state,
      isAuthenticated: false,
      userProfile: null,
    };
  }),

  on(authAction.signUpUser, (state): AuthState => {
    return {
      ...state,
    };
  }),

  on(authAction.signUpUserSuccess, (state, { userProfile, token, isAuthenticated }): AuthState => {
    // Save userProfile to session storage
    sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));

    return {
      ...state,
      isAuthenticated: true,
      userProfile,
    };
  }),

  on(authAction.signUpUserFailure, (state): AuthState => {
    return {
      ...state,
    };
  }),
);

export const forgotPasswordReducer = createReducer(
  initialForgotPasswordState,
  on(authAction.setEmail, (state, { email }) => ({ ...state, email })),
  on(authAction.resetForgotPassword, () => initialForgotPasswordState),
  on(authAction.submitForgotPassword, (state) => ({ ...state, loading: true, error: null })),
  on(authAction.submitForgotPasswordSuccess, (state) => ({ ...state, loading: false })),
  on(authAction.submitForgotPasswordFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

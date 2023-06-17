import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '.';

export const selectAuthState = createFeatureSelector<AuthState>('auth');


export const selectUserProfile = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.userProfile;
  }
);

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.token;
  }
);

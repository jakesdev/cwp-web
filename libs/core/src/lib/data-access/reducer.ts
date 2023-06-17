import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { env } from '../environments/endpoint';

import { AppState } from './app-state';
import { authReducer } from './auth';
import { storageSyncReducer } from './meta-reducers';
import { logger } from './meta-reducers/logger';


export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

const storageSync = typeof window !== 'undefined' ? [storageSyncReducer] : [];

export const metaReducers: MetaReducer<AppState>[] =
  env.production && !env.debug ? [] : [logger];

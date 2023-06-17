import { storageSync } from '@larscom/ngrx-store-storagesync';
import { ActionReducer } from '@ngrx/store';
import { AUTH_STORE_FEATURE_KEY } from '../auth';

export function storageSyncReducer<T>(reducer: ActionReducer<T>) {
  const metaReducer = storageSync({
    features: [
      {
        stateKey: AUTH_STORE_FEATURE_KEY
      }

      //  TODO
      // Save data from store to local storage is good,
      // but it cause an error regarding loading state

      // { stateKey: SKILL_SURVEY_STORE_FEATURE_KEY },
    ],

    storage: window.sessionStorage,
  });

  // return metaReducer(reducer);
}

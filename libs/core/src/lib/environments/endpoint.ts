import { environment } from './environment';

export const API_URL = environment.apiURL
  ? `${environment.apiURL}`
  : `${window.location.origin}`;

export const currentEnvironment = environment.production;
export const env = environment;

export { environment };

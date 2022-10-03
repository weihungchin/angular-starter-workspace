import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { SettingsState } from './settings/settings.models';
import { settingsReducer } from './settings/settings.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export interface AppState {
  auth: AuthState;
}

export const selectSettingsState =
  createFeatureSelector<SettingsState>('settings');

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
}

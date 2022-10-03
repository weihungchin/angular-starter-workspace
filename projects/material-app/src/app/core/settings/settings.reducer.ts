import { Action, createAction, createReducer, on } from '@ngrx/store';
import { actionSettingsChangeTheme } from './settings.actions';
import { SettingsState } from './settings.models';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'default-theme',
};

const reducer = createReducer(
  initialState,
  on(actionSettingsChangeTheme, (state, action) => ({ ...state, ...action }))
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}


export const initialCounterState = 0;

export const increment = createAction('[Counter Component] Increment');

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state) => state + 1),
);
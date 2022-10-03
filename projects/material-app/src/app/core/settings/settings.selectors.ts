import { createSelector } from '@ngrx/store';

import { SettingsState } from './settings.models';
import { selectSettingsState } from '../core.state';

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);



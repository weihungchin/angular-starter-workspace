import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

import { selectSettingsState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';

import { actionSettingsChangeTheme } from './settings.actions';
import { State } from './settings.models';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('app-init-effect-trigger');

@Injectable()
export class SettingsEffects {
  hour = 0;

  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeTheme),
        withLatestFrom(this.store.pipe(select(selectSettingsState))),
        tap(([_action, settings]) =>
          this.localStorageService.setItem(SETTINGS_KEY, settings)
        )
      ),
    { dispatch: false }
  );

  updateTheme = createEffect(
    () =>
      merge(
        INIT,
        this.actions$.pipe(
          ofType(actionSettingsChangeTheme),
          tap((_action) => {
            console.log('updateTheme')
            const classList =
              this.overlayContainer.getContainerElement().classList;
            const toRemove = Array.from(classList).filter((item: string) =>
              item.includes('-theme')
            );
            if (toRemove.length) {
              classList.remove(...toRemove);
            }
          })
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    private localStorageService: LocalStorageService
  ) {}
}

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AuthEffects } from './auth/auth.effects';
import { AppState, reducers } from './core.state';
import { GlobalLayoutComponent } from './layout/global-layout/global-layout.component';
import { SettingsEffects } from './settings/settings.effects';
import { selectTheme } from './settings/settings.selectors';

export { AppState, selectTheme };

@NgModule({
  declarations: [GlobalLayoutComponent],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    // third party
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,

    // ngrx
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, SettingsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [GlobalLayoutComponent],
})
export class CoreModule {}

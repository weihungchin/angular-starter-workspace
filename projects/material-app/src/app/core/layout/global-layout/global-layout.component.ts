import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { select, Store } from '@ngrx/store';
import { first, map, Observable } from 'rxjs';
import { actionSettingsChangeTheme } from '../../settings/settings.actions';
import { State } from '../../settings/settings.models';
import { selectTheme } from '../../settings/settings.selectors';

@Component({
  selector: 'app-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss'],
})
export class GlobalLayoutComponent implements OnInit {
  color: ThemePalette = 'accent';
  checked: boolean = false;
  theme$: Observable<string> | undefined;
  toggleChecked$: Observable<boolean> | undefined;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.theme$ = this.store.pipe(select(selectTheme));
    this.toggleChecked$ = this.theme$.pipe(
      first(),
      map(theme => theme === 'dark-theme')
    );
  }

  onToggleTheme(event: MatSlideToggleChange): void {
    const theme = event.checked ? 'dark-theme' : 'default-theme';
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }
}

import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectTheme } from './core/core.module';
import { AppState } from './core/core.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'material-app';
  theme$: Observable<string> | undefined;

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.pipe(
      select(selectTheme),
      tap(val => console.log(val))
    );
  }
}

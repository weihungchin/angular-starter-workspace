import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.scss'],
})
export class GlobalLayoutComponent implements OnInit {
  color: ThemePalette = 'accent';
  constructor() {}

  ngOnInit(): void {}
}

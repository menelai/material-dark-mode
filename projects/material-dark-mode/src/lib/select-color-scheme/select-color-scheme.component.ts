import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {TranslatePipe} from '@ngx-translate/core';

import {darkModeClass, lightModeClass, storageKey} from '../constants';

@Component({
  selector: 'ngc-select-color-scheme',
  imports: [
    MatMenuItem,
    TranslatePipe,
    MatMenu,
    MatIcon,
  ],
  templateUrl: './select-color-scheme.component.html',
  styleUrl: './select-color-scheme.component.scss',
})
export class SelectColorSchemeComponent {
  @ViewChild(MatMenu, {static: true}) menu: MatMenu;

  @ViewChild('button', {static: false}) button: TemplateRef<any>;

  readonly darkModeClass = darkModeClass;

  readonly lightModeClass = lightModeClass;

  mode = localStorage[storageKey];

  setTheme(theme: string): void {
    document.body.classList.remove(this.mode);
    this.mode = theme;
    localStorage[storageKey] = theme;
    document.body.classList.add(theme);
  }
}

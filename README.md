# Material table

## Installation

```
npm i @kovalenko/material-dark-mode
```

## Usage

```typescript

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  imports: [
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    NgTemplateOutlet,
    SelectColorSchemeComponent,
  ],
})
export class SelectorComponent {}
```

`selector.component.html`
```angular181html
<mat-menu #menu="matMenu" yPosition="below">
  <button
    mat-menu-item
    [matMenuTriggerFor]="color.menu"
  >
    <ng-container *ngTemplateOutlet="color.button"/>
  </button>
  <ngc-select-color-scheme #color/>
</mat-menu>
```

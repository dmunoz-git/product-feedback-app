# Ui-Components

This folder contains all the Ui components that are used in the application. Defined in the
Figma design file. All components are prefiexed with the component name `<ui-**>`.

## Buttons

Import the module `UiButtonModule` from the `shared/ui-components/button/ui-button.module` file.

```html
<button ui-button color="primary"></button>
<button ui-button color="secondary"></button>
<button ui-button color="info"></button>
<button ui-button color="light"></button>
<button ui-button color="dark"></button>
<button ui-button color="error"></button>
```

## Badge

Import the module `UiBadgeModule` from the `shared/ui-components/badge/ui-badge.module` file.

```html
<img src="" alt="" ui-badge value="0" />
```

## Chips

Import the module `UiChipModule` from the `shared/ui-components/chip/ui-chip.module` file.

```html
<ui-chip>Chip</ui-chip>
```

## Counter

Import the module `UiCounterModule` from the `shared/ui-components/counter/ui-counter.module` file.

```html
<ui-counter [(ngModel)]="field"></ui-counter> <ui-counter [FormControl]="field"></ui-counter>
```

The component implements ControlValueAccessor interface. So it can be used as a form control or as a part of a template form.

## Dropdown Menu

Import the module `UiDropdownModule` from the `shared/ui-components/dropdown/ui-dropdown.module` file.

```html
<button ui-button [uiDropdownTriggerFor]="menu">Menu</button>
<ui-dropdown #menu>
    <button ui-dropdown-item>Item 1</button>
    <button ui-dropdown-item>Item 2</button>
    <button ui-dropdown-item>Item 3</button>
</ui-dropdown>
```

## Divider

Import the module `UiDividerModule` from the `shared/ui-components/divider/ui-divider.module` file.

```html
<ui-divider></ui-divider>
```

## Icons

Import the module `UiIconModule` from the `shared/ui-components/icon/ui-icon.module` file.

```html
<ui-icon name="home"></ui-icon> <ui-icon type="desktop" name="home"></ui-icon>
```

Icon list:

-   `arrow-down`
-   `arrow-left`
-   `arrow-up`
-   `check`
-   `comments`
-   `edit-feedback`
-   `new-feedback`
-   `plus`

Mobile type icons:

-   `close`
-   `hamburguer`

## Input

Import the module `UiInputModule` from the `shared/ui-components/input/ui-input.module` file.

```html
<input uiInput [ngModel]="value" />
```

## Selector

Import the module `UiSelectorModule` from the `shared/ui-components/selector/ui-selector.module` file.

```html
<ui-select label="Name" [(ngModel)]="field">
    <ui-select-option value="option1">Option 1</ui-select-option>
    <ui-select-option value="option2">Option 2</ui-select-option>
    <ui-select-option value="option3">Option 3</ui-select-option>
</ui-select>
```

## Toast

Import the module `UiToastModule` from the `shared/ui-components/toast/ui-toast.module` file.

```ts
constructor(private toast: UiToastService) {}

open() {
  this.toast.open(UiToastComponent, {
	message: 'This is a toast message',
	duration: 3000,
  });
}

```

In template:

```html
<button ui-button color="primary" (click)="open()">Open toast</button>
```

## Toolbar

Import the module `UiToolbarModule` from the `shared/ui-components/toolbar/ui-toolbar.module` file.

```html
<ui-toolbar></ui-toolbar>
```

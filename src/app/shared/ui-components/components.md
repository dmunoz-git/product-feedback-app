# UI-Components

This folder contains all the UI components that are used in the application. Defined in the
Figma design file. All components are prefiexed with the component name `<ui-**>`.

## Buttons

Import the module `UIButtonModule` from the `shared/ui-components/button/ui-button.module` file.

It can be used as component in the application;

```html
<ui-button color="primary"></ui-button>
<ui-button color="secondary"></ui-button>
<ui-button color="info"></ui-button>
<ui-button color="light"></ui-button>
<ui-button color="dark"></ui-button>
<ui-button color="error"></ui-button>
```

Or as a directive in the application:

```html
<button ui-button color="primary"></button>
<button ui-button color="secondary"></button>
<button ui-button color="info"></button>
<button ui-button color="light"></button>
<button ui-button color="dark"></button>
<button ui-button color="error"></button>
```

## Badge

Import the module `UIBadgeModule` from the `shared/ui-components/badge/ui-badge.module` file.

```html
<img src="" alt="" ui-badge value="0" />
```

## Chips

Import the module `UIChipModule` from the `shared/ui-components/chip/ui-chip.module` file.

```html
<ui-chip>Chip</ui-chip>
```

## Counter

Import the module `UICounterModule` from the `shared/ui-components/counter/ui-counter.module` file.

```html
<ui-counter [(ngModel)]="field"></ui-counter> <ui-counter [FormControl]="field"></ui-counter>
```

The component implements ControlValueAccessor interface. So it can be used as a form control or as a part of a template form.

## Dropdown

Import the module `UIDropdownModule` from the `shared/ui-components/dropdown/ui-dropdown.module` file.

## Form

Import the module `UIFormModule` from the `shared/ui-components/form/ui-form.module` file.

## Toast

Import the module `UIToastModule` from the `shared/ui-components/toast/ui-toast.module` file.

```ts
constructor(private toast: UIToastService) {}

open() {
  this.toast.open(UIToastComponent, {
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

Import the module `UIToolbarModule` from the `shared/ui-components/toolbar/ui-toolbar.module` file.

```html
<ui-toolbar></ui-toolbar>
```

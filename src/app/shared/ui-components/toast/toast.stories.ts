import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiButtonModule } from '../button/ui-button.module';
import { UiToastComponent } from './ui-toast.component';
import { UiToastModule } from './ui-toast.module';
import { UiToastService } from './ui-toast.service';

@Component({
    selector: 'app-dummy-ui-button',
    template: `<button ui-button color="secondary" (click)="openToast()">Login</button>`,
})
class DummyToastComponent {
    constructor(private toast: UiToastService) {}

    openToast() {
        this.toast.open(UiToastComponent, {
            message: 'This is a toast message',
            duration: 3000,
        });
    }
}

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Toast',
    // The component related to the Stories
    component: DummyToastComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [CommonModule, UiToastModule, UiButtonModule],
        }),
    ],
};
const Template: Story<DummyToastComponent> = (args: DummyToastComponent) => ({
    props: args,

    template: `<app-dummy-ui-button></app-dummy-ui-button>`,
});

export const Basic = Template.bind({});
Basic.args = {};

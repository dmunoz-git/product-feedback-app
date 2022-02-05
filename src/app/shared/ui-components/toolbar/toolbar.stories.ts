import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiButtonModule } from '../button/ui-button.module';
import { UiToolbarComponent } from './ui-toolbar.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Toolbar',
    // The component related to the Stories
    component: UiToolbarComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiToolbarComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiToolbarComponent> = (args: UiToolbarComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiToolbarComponent],
        imports: [CommonModule],
    },
    template: `<ui-toolbar>Toolbar</ui-toolbar>`,
});

export const Basic = Template.bind({});
Basic.args = {};

const TemplateWithLogo: Story<UiToolbarComponent> = (args: UiToolbarComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiToolbarComponent],
        imports: [CommonModule, UiButtonModule],
    },
    template: `<ui-toolbar justify="between"><img src="/assets/images/suggestions/icon-suggestions.svg" alt="Logo image"/>
	<button ui-button color="dark">Login</button></ui-toolbar>`,
});

export const WithLogo = TemplateWithLogo.bind({});
WithLogo.args = {
    justify: 'between',
};

const TemplateTransparent: Story<UiToolbarComponent> = (args: UiToolbarComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiToolbarComponent],
        imports: [CommonModule, UiButtonModule],
    },
    template: `<ui-toolbar background="transparent"><button ui-button color="light">Login</button></ui-toolbar>`,
});

export const Transparent = TemplateTransparent.bind({});
Transparent.args = {
    background: 'transparent',
};
// Other stories could be added here as well, all you have to do is export them along!

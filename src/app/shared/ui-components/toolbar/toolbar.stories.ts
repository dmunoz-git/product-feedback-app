import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UIToolbarComponent } from './ui-toolbar.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Toolbar',
    // The component related to the Stories
    component: UIToolbarComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UIToolbarComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UIToolbarComponent> = (args: UIToolbarComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UIToolbarComponent],
        imports: [CommonModule],
    },
    template: `<ui-toolbar>Toolbar</ui-toolbar>`,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiIconComponent } from './ui-icon.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Icon',
    // The component related to the Stories
    component: UiIconComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiIconComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiIconComponent> = (args: UiIconComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiIconComponent],
        imports: [CommonModule],
    },
    template: `<ui-icon name="comments"></ui-icon> `,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiButtonDirective } from './ui-button.directive';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Button',
    // The component related to the Stories
    component: UiButtonDirective,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiButtonDirective],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiButtonDirective> = (args: UiButtonDirective) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiButtonDirective],
        imports: [CommonModule],
    },
    template: `<button ui-button [color]="color" [size]="size">Button</button>`,
});

export const Basic = Template.bind({});
Basic.args = {
    color: 'primary',
    size: 'default',
};

// Other stories could be added here as well, all you have to do is export them along!

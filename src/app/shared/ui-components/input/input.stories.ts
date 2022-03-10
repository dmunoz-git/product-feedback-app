import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiInputDirective } from './ui-input.directive';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Input',
    // The component related to the Stories
    component: UiInputDirective,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiInputDirective],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiInputDirective> = (args: UiInputDirective) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiInputDirective],
        imports: [CommonModule],
    },
    template: `<input uiInput [ngModel]="value" placeholder="This is sparta!"/>`,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

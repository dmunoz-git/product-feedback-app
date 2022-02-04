import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UICounterComponent } from './ui-counter.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Counter',
    // The component related to the Stories
    component: UICounterComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UICounterComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UICounterComponent> = (args: UICounterComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UICounterComponent],
        imports: [CommonModule],
    },
    template: `<ui-counter></ui-counter>`,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

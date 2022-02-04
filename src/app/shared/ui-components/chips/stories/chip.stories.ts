import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UIChipComponent } from '../chip/ui-chip.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Chips/Chip',
    // The component related to the Stories
    component: UIChipComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UIChipComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UIChipComponent> = (args: UIChipComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UIChipComponent],
        imports: [CommonModule],
    },
    template: `<ui-chip>Chip</ui-chip>`,
});

export const Chip = Template.bind({});
Chip.args = {};

// Other stories could be added here as well, all you have to do is export them along!

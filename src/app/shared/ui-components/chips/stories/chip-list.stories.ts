import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiChipListComponent } from '../chip-list/ui-chip-list.component';
import { UiChipComponent } from '../chip/ui-chip.component';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Chip List',
    // The component related to the Stories
    component: UiChipListComponent,

    subcomponents: { UiChipComponent },

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiChipListComponent],
            imports: [CommonModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiChipListComponent> = (args: UiChipListComponent) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiChipListComponent],
        imports: [CommonModule],
    },
    template: `<ui-chip-list><ui-chip>Two</ui-chip><ui-chip>Three</ui-chip><ui-chip>Four</ui-chip><ui-chip>Five</ui-chip></ui-chip-list>`,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

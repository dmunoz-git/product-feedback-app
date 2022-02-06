import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiSelectPanelComponent } from './select-panel/ui-select-panel.component';
import { UiSelectModule } from './ui-select.module';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Select',
    // The component related to the Stories
    component: UiSelectPanelComponent,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            imports: [UiSelectModule],
        }),
    ],
};
// This creates a Story for the component
const Template: Story<UiSelectPanelComponent> = (args: UiSelectPanelComponent) => ({
    props: args,
    moduleMetadata: {
        imports: [UiSelectModule],
    },
    template: `
	<ui-select label="Name" placeholder="Select the option">
		<ui-select-option value="option1">Option 1</ui-select-option>
		<ui-select-option value="option2">Option 2</ui-select-option>
		<ui-select-option value="option3">Option 3</ui-select-option>
	</ui-select>
`,
});

export const Basic = Template.bind({});
Basic.args = {};

// Other stories could be added here as well, all you have to do is export them along!

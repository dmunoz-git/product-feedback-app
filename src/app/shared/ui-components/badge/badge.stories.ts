import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { UiIconModule } from '../icon/ui-icon.module';
import { UiBadgeDirective } from './ui-badge.directive';

// This exports the Stories group for this component
export default {
    // The title defines the name and where in the structure of
    // Storybook's menu this is going to be placed.
    // Here we add it to a "Components" section under "Link"
    title: 'Components/Badge',
    // The component related to the Stories
    component: UiBadgeDirective,

    decorators: [
        // The necessary modules for the component to work on Storybook
        moduleMetadata({
            declarations: [UiBadgeDirective],
            imports: [CommonModule, UiIconModule],
        }),
    ],
};
const Template: Story<UiBadgeDirective> = (args: UiBadgeDirective) => ({
    props: args,
    moduleMetadata: {
        declarations: [UiBadgeDirective],
        imports: [CommonModule],
    },
    template: `<ui-icon name="comments" ui-badge value="3"></ui-icon>`,
});

export const Basic = Template.bind({});
Basic.args = {};

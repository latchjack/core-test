import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRocket } from '@fortawesome/free-solid-svg-icons';

import Checkbox from './checkbox';

export default {
	title: 'Example/Checkbox',
	component: Checkbox,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		variant: { control: 'color' },
		disabled: { control: false },
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
	checked: false,
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	variant: 'secondary',
// 	label: 'Button',
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
// 	variant: 'tertiary',
// 	label: 'Button',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
// 	variant: 'primary',
// 	label: 'Submit',
// 	disabled: true,
// };

// export const Loading = Template.bind({});
// Loading.args = {
// 	variant: 'primary',
// 	label: 'Button',
// 	loading: true,
// };

// export const IconLeft = Template.bind({});
// IconLeft.args = {
// 	variant: 'primary',
// 	label: 'Button',
// 	icon: <FontAwesomeIcon icon={faRocket} />,
// 	iconPosition: 'left',
// };

// export const IconRight = Template.bind({});
// IconRight.args = {
// 	variant: 'primary',
// 	label: 'Button',
// 	icon: <FontAwesomeIcon icon={faRocket} />,
// 	iconPosition: 'right',
// };

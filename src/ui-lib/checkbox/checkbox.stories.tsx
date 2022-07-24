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

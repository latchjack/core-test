import React from 'react';
import './checkbox.scss';

type CheckboxProps = {
	checked: boolean;
	defaultChecked: boolean;
	name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	defaultChecked,
	name,
}) => {
	return (
		<input
			type="checkbox"
			checked={checked}
			defaultChecked={defaultChecked}
			name={name}
		/>
	);
};

export default Checkbox;

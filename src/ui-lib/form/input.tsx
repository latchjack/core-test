import React, { FC, FormEventHandler, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	onChange: FormEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ name, onChange, ...restProps }) => {
	return (
		<input
			className="input"
			type="text"
			name={name}
			onChange={onChange}
			{...restProps}
		/>
	);
};

export default Input;

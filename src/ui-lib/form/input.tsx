import React, { FC, FormEventHandler, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	dataTestId: string;
	onChange: FormEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
	name,
	onChange,
	dataTestId,
	...restProps
}) => {
	return (
		<input
			className="input"
			type="text"
			name={name}
			onChange={onChange}
			data-testid={`${dataTestId}-input`}
			{...restProps}
		/>
	);
};

export default Input;

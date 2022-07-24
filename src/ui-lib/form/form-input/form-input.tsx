import React, { FC, FormEventHandler, useState } from 'react';
import Field from '../field/field';
import Input from '../input';

interface FormInputProps {
	hasCount: boolean;
	maxCount: number;
	onChange: FormEventHandler<HTMLInputElement>;
}

const FormInput: FC<FormInputProps> = ({ hasCount, maxCount, onChange }) => {
	const [count, setCount] = useState(0);
	return (
		<Field error={''} hasCount={hasCount} count={count} maxCount={maxCount}>
			<Input name={''} onChange={onChange} />
		</Field>
	);
};

export default FormInput;

import React, { FC, FormEventHandler, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Field from '../field/field';
import Input from '../input';

interface FormInputProps {
	name: string;
	label: string;
	id: string;
	hasCount: boolean;
	maxCount: number;
	onChange: FormEventHandler<HTMLInputElement>;
	isRequired: boolean;
	dataTestId: string;
}

const FormInput: FC<FormInputProps> = ({
	name,
	label,
	id,
	hasCount,
	maxCount,
	onChange,
	isRequired,
	dataTestId,
}) => {
	const {
		register,
		formState: { errors },
		watch,
	} = useFormContext<any>();
	const field = watch(name, '');
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(field.length);
	}, [field]);

	return (
		<Field
			label={label}
			id={id}
			error={errors?.[name]?.message}
			hasCount={hasCount}
			count={count}
			maxCount={maxCount}
			isRequired={isRequired}
			dataTestId={`${dataTestId}-field`}
			{...register(name)}
		>
			<Input
				name={name}
				onChange={onChange}
				dataTestId={`${dataTestId}-form`}
			/>
		</Field>
	);
};

export default FormInput;

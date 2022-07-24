import React, { FC, ReactNode } from 'react';

interface FieldProps {
	children: ReactNode;
	id: string;
	error: undefined | ReactNode | string;
	hasCount: boolean;
	count: number;
	label: string;
	maxCount: number;
	isRequired: boolean;
	dataTestId: string;
}

const Field: FC<FieldProps> = ({
	children,
	id,
	error,
	hasCount,
	count,
	label,
	maxCount,
	isRequired,
	dataTestId,
}) => {
	return (
		<div className="form-field-container">
			{hasCount && (
				<p
					data-testid={`${dataTestId}-field-count`}
					className="form-field-count"
				>{`${count / maxCount}`}</p>
			)}
			<div className="form-field-label-container">
				<label
					htmlFor={id}
					className="form-field-label"
					data-testid={`${dataTestId}-form-label`}
				>
					{label}
					{isRequired && 'Asterisk'}
				</label>
				{hasCount &&
					'character-counter charCount={count} maxLength={maxCount}'}
			</div>
			<div className="form-field">{children}</div>
			{error && (
				<p
					className="form-field-error"
					data-testid={`${dataTestId}-form-error`}
				>
					{error}
				</p>
			)}
		</div>
	);
};

export default Field;
export type { FieldProps };

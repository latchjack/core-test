import React, { FC, ReactNode } from 'react';

interface FieldProps {
	children: ReactNode;
	error: string;
	hasCount: boolean;
	count: number;
	maxCount: number;
}

const Field: FC<FieldProps> = ({
	children,
	error,
	hasCount,
	count,
	maxCount,
}) => {
	return (
		<div className="form-field-container">
			{hasCount && (
				<p className="form-field-count">{`${count / maxCount}`}</p>
			)}
			<div className="form-field">{children}</div>
			{error && <p className="form-field-error">{error}</p>}
		</div>
	);
};

export default Field;

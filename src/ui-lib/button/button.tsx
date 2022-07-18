import React from 'react';
import './button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
	label: string;
	variant: 'primary' | 'secondary' | 'tertiary';
	disabled?: boolean;
	loading?: boolean;
	iconPosition?: 'left' | 'right' | undefined;
	loadingIcon: any;
	icon?: any;
}

const Button = ({
	label,
	variant = 'primary',
	disabled = false,
	loading = false,
	loadingIcon = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />,
	icon,
	iconPosition,
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			disabled={disabled}
			className={'core-button ' + variant}
			{...props}
		>
			<span className="icon-left">{iconPosition === 'left' && icon}</span>
			<span className="loading">{loading && loadingIcon}</span>
			<span className="btn-label">{!loading && label}</span>
			<span className="icon-right">
				{iconPosition === 'right' && icon}
			</span>
		</button>
	);
};

export default Button;

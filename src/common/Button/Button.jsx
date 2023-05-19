import styles from './Button.module.scss';

export const Button = ({
	primary,
	secondary,
	small,
	superSmall,
	disabled,
	onClick,
	children,
	type,
}) => {
	const combined = [styles.button];
	if (primary) {
		combined.push(styles.primary);
	}
	if (secondary) {
		combined.push(styles.secondary);
	}
	if (small) {
		combined.push(styles.small);
	}
	if (superSmall) {
		combined.push(styles.superSmall);
	}
	return (
		<button
			disabled={disabled}
			className={combined.join(' ')}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

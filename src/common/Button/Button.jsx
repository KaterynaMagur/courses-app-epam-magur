import styles from './Button.module.scss';

export const Button = ({ primary, secondary, onClick, children }) => {
	const combined = [styles.button];
	if (primary) {
		combined.push(styles.primary);
	}
	if (secondary) {
		combined.push(styles.secondary);
	}
	return (
		<button className={combined.join(' ')} onClick={onClick}>
			{children}
		</button>
	);
};

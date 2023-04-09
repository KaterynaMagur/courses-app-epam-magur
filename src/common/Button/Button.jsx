import styles from './Button.module.scss';

export const Button = ({ primary, onClick, children }) => {
	const combined = [styles.button];
	if (primary) {
		combined.push(styles.primary);
	}
	return (
		<button className={combined.join(' ')} onClick={onClick}>
			{children}
		</button>
	);
};

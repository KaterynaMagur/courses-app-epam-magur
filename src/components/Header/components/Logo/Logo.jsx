import logo from '../../../../assets/main-logo.svg';
import styles from './Logo.module.scss';
export const Logo = ({ primary, secondary }) => {
	const combined = [styles.logo];
	if (primary) {
		combined.push(styles.primary);
	}
	if (secondary) {
		combined.push(styles.secondary);
	}
	return <img src={logo} alt='logo' className={combined.join(' ')} />;
};

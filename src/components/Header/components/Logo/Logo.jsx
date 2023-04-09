import logo from '../../../../assets/main-logo.svg';
import styles from './Logo.module.scss';
export const Logo = ({ primary }) => {
	const combined = [styles.logo];
	if (primary) {
		combined.push(styles.primary);
	}
	return <img src={logo} alt='logo' className={combined.join(' ')} />;
};

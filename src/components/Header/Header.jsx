import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store';
import { logoutUser } from '../../store/user/thunk';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const user = useSelector(selectUser);

	const logout = () => {
		if (user.isAuth) {
			dispatch(logoutUser()).then(() => {
				navigate('/login');
			});
		} else {
			navigate('/login');
		}
	};

	const showLogout =
		location.pathname !== '/login' && location.pathname !== '/registration';

	return (
		<div className={styles.header}>
			<Logo primary />
			{showLogout ? (
				<div className={styles.rightPart}>
					<div className={styles.nick}>{user.name}</div>
					<Button primary onClick={logout}>
						Logout
					</Button>
				</div>
			) : null}
		</div>
	);
};

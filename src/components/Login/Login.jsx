import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import styles from './Login.module.scss';

export const Login = () => {
	return (
		<div className={styles.card}>
			<h2 className={styles.title}>Login</h2>
			<Input labelText='Email' placeholderText='Enter email'></Input>
			<Input labelText='Password' placeholderText='Enter password'></Input>
			<div className={styles.button}>
				<Button primary>Login</Button>
			</div>
			<div>
				If you not have an account you can<a>Registration</a>
			</div>
		</div>
	);
};

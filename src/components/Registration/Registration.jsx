import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import styles from './Registration.module.scss';

export const Registration = () => {
	return (
		<div className={styles.card}>
			<h2 className={styles.center}>Registration</h2>
			<Input labelText='Name' placeholderText='Enter name'></Input>
			<Input labelText='Email' placeholderText='Enter email'></Input>
			<Input labelText='Password' placeholderText='Enter password'></Input>
			<div className={styles.center}>
				<Button primary>Registration</Button>
			</div>
			<div className={styles.center}>
				If you have an account you can <a>Login</a>
			</div>
		</div>
	);
};

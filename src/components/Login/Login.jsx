import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

export const Login = () => {
	return (
		<div>
			<h2>Login</h2>
			<Input labelText='Email' placeholderText='Enter email'></Input>
			<Input labelText='Password' placeholderText='Enter password'></Input>
			<Button primary>Login</Button>
			<div>
				If you not have an account you can<a>Registration</a>
			</div>
		</div>
	);
};

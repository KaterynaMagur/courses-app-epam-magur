import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

export const Registration = () => {
	return (
		<div>
			<h2>Registration</h2>
			<Input labelText='Name' placeholderText='Enter name'></Input>
			<Input labelText='Email' placeholderText='Enter email'></Input>
			<Input labelText='Password' placeholderText='Enter password'></Input>
			<Button primary>Registration</Button>
			<div>
				If you an account you can <a>Login</a>
			</div>
		</div>
	);
};

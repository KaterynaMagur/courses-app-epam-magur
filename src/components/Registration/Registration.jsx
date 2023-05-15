import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import styles from './Registration.module.scss';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const initialState = {
	name: '',
	email: '',
	password: '',
};

export const Registration = () => {
	const [form, setForm] = useState(initialState);
	const navigate = useNavigate();

	const handleInputChange = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, password } = form;
		axios
			.post('/register', {
				name,
				email,
				password,
			})
			.then((res) => {
				navigate('/login');
			})
			.catch((err) => {
				const errors = err?.response?.data?.errors?.join(', ');
				alert(errors || 'Something went wrong');
			});
	};

	return (
		<div>
			<form
				name='registration'
				className={styles.card}
				method='POST'
				onSubmit={handleSubmit}
			>
				<h2 className={styles.center}>Registration</h2>
				<Input
					type='text'
					labelText='Name'
					name='name'
					placeholderText='Enter name'
					value={form.name}
					onChange={handleInputChange}
				></Input>
				<Input
					type='email'
					name='email'
					value={form.email}
					onChange={handleInputChange}
					labelText='Email'
					placeholderText='Enter email'
				></Input>
				<Input
					type='password'
					name='password'
					value={form.password}
					onChange={handleInputChange}
					labelText='Password'
					placeholderText='Enter password'
				></Input>
				<div className={styles.center}>
					<Button primary type='submit'>
						Registration
					</Button>
				</div>
				<div className={styles.center}>
					If you have an account you can <a>Login</a>
				</div>
			</form>
		</div>
	);
};

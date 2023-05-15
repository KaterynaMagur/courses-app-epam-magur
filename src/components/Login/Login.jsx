import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import styles from './Login.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialState = {
	name: '',
	email: '',
	password: '',
};

export const Login = () => {
	const [form, setForm] = useState(initialState);
	const navigate = useNavigate();

	const handleInputChange = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { name, email, password } = form;
		axios
			.post('/login', {
				name,
				email,
				password,
			})
			.then((res) => {
				localStorage.setItem('token', JSON.stringify(res.data.result));
				navigate('/courses');
			})
			.catch((err) => {
				const errors = err?.response?.data?.errors?.join(', ');
				alert(errors || 'Something went wrong');
			});
	};

	return (
		<div>
			<form
				name='login'
				method='POST'
				className={styles.card}
				onSubmit={handleSubmit}
			>
				<h2 className={styles.title}>Login</h2>
				<Input
					type='email'
					name='email'
					value={form.email}
					labelText='Email'
					placeholderText='Enter email'
					onChange={handleInputChange}
				></Input>
				<Input
					type='password'
					name='password'
					value={form.password}
					onChange={handleInputChange}
					labelText='Password'
					placeholderText='Enter password'
				></Input>
				<div className={styles.button}>
					<Button type='submit' primary>
						Login
					</Button>
				</div>
				<div>
					If you not have an account you can <a>Registration</a>
				</div>
			</form>
		</div>
	);
};

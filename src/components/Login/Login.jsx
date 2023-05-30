import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import styles from './Login.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/user/thunk';
import { selectUser } from '../../store';

const initialState = {
	name: '',
	email: '',
	password: '',
};

export const Login = () => {
	const [form, setForm] = useState(initialState);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentUser = useSelector(selectUser);

	useEffect(() => {
		if (currentUser.isAuth) {
			navigate('/courses');
		}
	}, [currentUser, navigate]);

	const handleInputChange = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password } = form;
		dispatch(loginUser(email, password));
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
					If you not have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</div>
			</form>
		</div>
	);
};

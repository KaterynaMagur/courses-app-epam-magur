import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const DefaultPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate('/courses');
		} else {
			navigate('/login');
		}
	}, [navigate]);
};

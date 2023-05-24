import { useSelector } from 'react-redux';
import { selectUser } from '../../store';
import { Navigate } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ children }) => {
	const user = useSelector(selectUser);

	if (user.role !== 'admin') {
		return <Navigate to='courses' replace />;
	}

	return children;
};

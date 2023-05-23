import { createReducer } from '@reduxjs/toolkit';
import { setUser, logUserOut } from './actionCreators';
import { ADMIN } from '../../constants';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setUser, (state, action) => {
			return { ...state, ...action.payload, isAuth: true };
		})
		.addCase(logUserOut, (state, action) => {
			localStorage.clear();
			return { ...initialState };
		});
});

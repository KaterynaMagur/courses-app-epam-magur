import { createReducer } from '@reduxjs/toolkit/src';
import { LOG_OUT_USER, SET_USER } from './actionTypes';
import { setUser, logUserOut } from './actionCreators';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setUser, (state, action) => {
			return { ...state, ...action.payload, isAuth: true };
		})
		.addCase(logUserOut, (state, action) => {
			return { ...initialState };
		});
});

import { api } from '../../servisces';
import { logUserOut, setUser } from './actionCreators';

export const loginUser = (email, password) => async (dispatch) => {
	try {
		const res = await api.user.login(email, password);
		localStorage.setItem('token', res.data.result);
		dispatch(loadUser());
	} catch (err) {
		const errors = err?.response?.data?.errors?.join(', ');
		alert(errors || 'Something went wrong');
	}
};

export const logoutUser = () => async (dispatch) => {
	try {
		await api.user.logout();
		localStorage.clear();
		dispatch(logUserOut());
		return Promise.resolve();
	} catch (e) {
		return Promise.reject();
	}
};

export const loadUser = () => async (dispatch) => {
	try {
		const res = await api.user.me();
		const userData = {
			...res.data.result,
			token: localStorage.getItem('token') || '',
		};
		dispatch(setUser(userData));
	} catch (e) {
		localStorage.clear();
		dispatch(logUserOut());
	}
};

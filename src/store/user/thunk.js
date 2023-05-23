import { api } from '../../servisces';
import { setUser } from './actionCreators';

export const loginUser = (email, password) => async (dispatch) => {
	try {
		const res = await api.user.login(email, password);
		localStorage.setItem('token', JSON.stringify(res.data.result));
		const userData = {
			...res.data.user,
			token: res.data.result,
		};
		localStorage.setItem('userData', JSON.stringify(userData));

		dispatch(setUser(userData));
	} catch (err) {
		const errors = err?.response?.data?.errors?.join(', ');
		alert(errors || 'Something went wrong');
	}
};

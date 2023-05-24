import { addAuthor, setAuthors } from './actionCreators';
import { api } from '../../servisces';

export const getAuthorThunk = () => async (dispatch) => {
	try {
		await api.authors.getAllAuthors();
		dispatch(setAuthors());
	} catch (e) {}
};

export const addAuthorThunk = (name) => async (dispatch) => {
	try {
		const res = await api.authors.addAuthor(name);
		dispatch(addAuthor(res.data.result));
	} catch (e) {}
};

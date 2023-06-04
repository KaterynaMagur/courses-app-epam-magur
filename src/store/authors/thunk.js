import { addAuthor, setAuthors } from './actionCreators';
import { api } from '../../servisces';

export const getAuthorsThunk = () => async (dispatch) => {
	try {
		const res = await api.authors.getAllAuthors();
		dispatch(setAuthors(res.data.result));
	} catch (e) {}
};

export const addAuthorThunk = (name) => async (dispatch) => {
	try {
		const res = await api.authors.addAuthor(name);
		dispatch(addAuthor(res.data.result));
	} catch (e) {}
};

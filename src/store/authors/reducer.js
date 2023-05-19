import { createReducer } from '@reduxjs/toolkit';
import { addAuthor, setAuthors } from './actionCreators';

const InitialState = [];
export const authorsReducer = createReducer(InitialState, (builder) => {
	builder
		.addCase(setAuthors, (state, action) => {
			return action.payload;
		})
		.addCase(addAuthor, (state, action) => {
			return [action.payload, ...state];
		});
});

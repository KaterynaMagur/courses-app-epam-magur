import { ADD_AUTHOR, SET_AUTHORS } from './actionTypes';

import { createAction } from '@reduxjs/toolkit';

export const setAuthors = createAction(SET_AUTHORS);

export const addAuthor = createAction(ADD_AUTHOR);

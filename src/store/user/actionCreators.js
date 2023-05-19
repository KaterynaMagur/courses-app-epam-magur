import { LOG_OUT_USER, SET_USER } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction(SET_USER);

export const logUserOut = createAction(LOG_OUT_USER);

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ADMIN, mockedAuthorsList, mockedCoursesList } from '../constants';

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: ADMIN,
	},
	courses: mockedCoursesList,
	authors: mockedAuthorsList,
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const renderTestHelper = (
	component,
	state = mockedState,
	initialPath = ''
) => {
	mockedStore.getState = () => ({
		...mockedState,
		...state,
	});

	return render(
		<Provider store={mockedStore}>
			<MemoryRouter initialEntries={[initialPath]}>{component}</MemoryRouter>
		</Provider>
	);
};

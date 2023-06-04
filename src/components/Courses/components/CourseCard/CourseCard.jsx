import { Button } from '../../../../common/Button/Button';
import { useMemo } from 'react';
import styles from './CourseCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthors, selectUser } from '../../../../store';
import { ADMIN, MINUTES_ONE_HOUR } from '../../../../constants';
import { deleteCourseThunk } from '../../../../store/courses/thunk';
import { transformDate } from '../../../../helpers/dateGeneratop';
import { padTo2Digits } from '../../../../helpers/pipeDuration';

const AdminButtons = ({ course }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleDeleteCourse = () => {
		dispatch(deleteCourseThunk(course.id));
	};

	const handleUpdateCourse = () => {
		navigate(`/courses/update/${course.id}`);
	};

	return (
		<div className={styles.adminButtonsWrapper}>
			<div className={styles.button}>
				<Button secondary superSmall onClick={handleUpdateCourse}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						version='1.1'
						viewBox='0 0 528.899 528.899'
					>
						<g>
							<path d='M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z' />
						</g>
					</svg>
				</Button>
			</div>
			<div className={styles.button}>
				<Button secondary superSmall onClick={handleDeleteCourse}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 105.16 122.88'>
						<path d='M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z' />
					</svg>
				</Button>
			</div>
		</div>
	);
};

export const CourseCard = ({ course }) => {
	const authorsList = useSelector(selectAuthors);

	const user = useSelector(selectUser);

	const authors = useMemo(() => {
		return authorsList
			.filter((author) => course.authors.includes(author.id))
			.map((author) => author.name)
			.join(', ');
	}, [course, authorsList]);

	const navigate = useNavigate();

	const showCourse = () => {
		navigate(course.id);
	};

	return (
		<div data-testid='course-card'>
			<div className={styles.card}>
				<div>
					<h2 className={styles.h2}>{course.title}</h2>
					<div className={styles.description}>{course.description}</div>
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.threeDots}>
						<span className='typography--bold'>Authors: </span>
						{authors}
					</div>
					<div>
						<span className='typography--bold'>Duration: </span>
						{padTo2Digits(
							Math.floor(course.duration / MINUTES_ONE_HOUR)
						)} : {padTo2Digits(course.duration % MINUTES_ONE_HOUR) + ' hours'}
					</div>
					<div>
						<span className='typography--bold'>Created: </span>
						{transformDate(course.creationDate)}
					</div>
					<div className={styles.buttonsWrapper}>
						<div className={styles.button}>
							<Button secondary small onClick={showCourse}>
								Show course
							</Button>
						</div>
						{user.role === ADMIN ? <AdminButtons course={course} /> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import styles from './CourseForm.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { Authors } from './components/Authors/Authors';
import { CourseAuthors } from './components/CourseAuthors/CourseAuthors';
import { AddAuthor } from './components/AddAuthor/AddAuthor';
import { Duration } from './components/Duration/Duration';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDate } from '../../helpers/dateGeneratop';
import { createCourse, updateCourseThunk } from '../../store/courses/thunk';
import { selectCourses } from '../../store';

export const CourseForm = () => {
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [minutes, setMinutes] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { courseId } = useParams();

	const courses = useSelector(selectCourses);

	const clearState = useCallback(() => {
		setTitle('');
		setDescription('');
		setMinutes(0);
		setSelectedAuthors([]);
	}, []);

	useEffect(() => {
		if (courseId) {
			// Update course
			const course = courses.find((course) => course.id === courseId);
			if (course) {
				setTitle(course.title);
				setDescription(course.description);
				setMinutes(course.duration);
				setSelectedAuthors(course.authors);
			}
		} else {
			clearState();
		}
	}, [courses, courseId, clearState]);
	const addAuthor = (id) => {
		setSelectedAuthors([...selectedAuthors, id]);
	};

	const deleteAuthor = (id) => {
		setSelectedAuthors(selectedAuthors.filter((author) => author !== id));
	};

	const handleInputTitleChange = ({ target: { value } }) => {
		setTitle(value);
	};

	const handleInputDescriptionChange = ({ target: { value } }) => {
		setDescription(value);
	};

	const handleSaveCourse = () => {
		if (!minutes || !title || !description || !selectedAuthors.length) {
			return alert('Please, fill in all fields');
		}
		const courseData = {
			title,
			description,
			creationDate: getCurrentDate(),
			authors: selectedAuthors,
			duration: minutes,
		};
		let action = createCourse;
		if (courseId) {
			action = updateCourseThunk;
			courseData.id = courseId;
		}
		dispatch(action(courseData));
		clearState();
		navigate('/courses');
	};

	return (
		<div data-testid='course-form-container' className={styles.main}>
			<div className={styles.inputLine}>
				<Input
					labelText='Title'
					placeholderText='Enter title...'
					value={title}
					onChange={handleInputTitleChange}
				/>
				<Button primary onClick={handleSaveCourse}>
					{courseId ? 'Update course' : 'Create course'}
				</Button>
			</div>
			<TextArea
				labelText='Description'
				placeholderText='Enter description'
				value={description}
				onChange={handleInputDescriptionChange}
			/>
			<div className={styles.row}>
				<div className={styles.column}>
					<AddAuthor />
					<Duration onMinutesChange={setMinutes} minutes={minutes} />
				</div>
				<div className={styles.column}>
					<Authors addAuthor={addAuthor} selectedAuthors={selectedAuthors} />
					<CourseAuthors
						selectedAuthors={selectedAuthors}
						deleteAuthor={deleteAuthor}
					/>
				</div>
			</div>
		</div>
	);
};

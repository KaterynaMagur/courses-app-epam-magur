import { Button } from '../../common/Button/Button';

export const CourseInfo = () => {
	return (
		<div>
			<Button primary> &larr; Back to courses</Button>
			<h2>Course Name</h2>
			<div>Course info</div>
			<div>
				<div>ID: </div>
				<div>Duration: </div>
				<div>Created: </div>
				<div>Authors: </div>
			</div>
		</div>
	);
};

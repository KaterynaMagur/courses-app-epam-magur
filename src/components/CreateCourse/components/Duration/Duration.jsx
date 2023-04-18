import styles from '../../CreateCourse.module.scss';

import { Input } from '../../../../common/Input/Input';

import { padTo2Digits } from '../../../../helpers/pipeDuration';

export const Duration = ({ onMinutesChange, minutes }) => {
	const handleInputChange = ({ target: { value } }) => {
		onMinutesChange(Number(value));
	};

	return (
		<div className={styles.durationDiv}>
			<h3 className={styles.h3}>Duration</h3>
			<Input
				min='0'
				type='number'
				labelText='Duration'
				placeholderText='Enter duration in minutes'
				value={minutes}
				onChange={handleInputChange}
			/>
			<div className={styles.durationCounter}>
				Duration:{' '}
				<span className='typography--bold typography--extra-large'>
					{padTo2Digits(Math.floor(minutes / 60))} :{' '}
					{padTo2Digits(minutes % 60)}
				</span>{' '}
				hours
			</div>
		</div>
	);
};

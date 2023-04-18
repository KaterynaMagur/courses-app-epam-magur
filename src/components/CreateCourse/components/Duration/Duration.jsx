import styles from '../../CreateCourse.module.scss';

import { Input } from '../../../../common/Input/Input';

import { padTo2Digits } from '../../../../helpers/pipeDuration';

const MINUTES_ONE_HOUR = 60;

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
					{padTo2Digits(Math.floor(minutes / MINUTES_ONE_HOUR))} :{' '}
					{padTo2Digits(minutes % MINUTES_ONE_HOUR)}
				</span>{' '}
				hours
			</div>
		</div>
	);
};

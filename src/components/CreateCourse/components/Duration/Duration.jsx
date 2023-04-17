import styles from '../../CreateCourse.module.scss';
import { Input } from '../../../../common/Input/Input';
import { useState } from 'react';

export const Duration = () => {
	const [min, setMinutes] = useState(0);
	const handleInputChange = ({ target: { value } }) => {
		setMinutes(value);
	};
	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}

	return (
		<div className={styles.durationDiv}>
			<h3 className={styles.h3}>Duration</h3>
			<Input
				min='0'
				type='number'
				labelText='Duration'
				placeholderText='Enter duration in minutes'
				onChange={handleInputChange}
			/>
			<div className={styles.durationCounter}>
				Duration:{' '}
				<span className='typography--bold typography--extra-large'>
					{padTo2Digits(Math.floor(min / 60))} : {padTo2Digits(min % 60)}
				</span>{' '}
				hours
			</div>
		</div>
	);
};

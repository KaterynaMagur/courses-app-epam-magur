import styles from './Input.module.scss';
import { useMemo } from 'react';

const getId = (name = 'no-name') => {
	const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
	return `${name}_${id}`;
};

export const Input = ({
	min,
	type,
	name,
	labelText,
	placeholderText,
	onChange,
	value,
}) => {
	const id = useMemo(() => getId(name), [name]);
	return (
		<div className={styles.inputDiv}>
			<label htmlFor={id}>{labelText}</label>
			<input
				value={value}
				min={min}
				type={type}
				id={id}
				name={name}
				className={styles.input}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

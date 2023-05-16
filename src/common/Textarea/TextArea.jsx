import styles from './TextArea.module.scss';
import { useMemo } from 'react';

const getId = (name = 'no-name') => {
	const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
	return `${name}_${id}`;
};

export const TextArea = ({
	name,
	labelText,
	placeholderText,
	onChange,
	value,
}) => {
	const id = useMemo(() => getId(name), [name]);
	return (
		<div className={styles.divTextArea}>
			<label htmlFor={id}>{labelText}</label>
			<textarea
				id={id}
				value={value}
				name={name}
				className={styles.textArea}
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

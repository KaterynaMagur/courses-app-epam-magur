import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { TextArea } from '../../common/Textarea/TextArea';
import { mockedAuthorsList } from '../../constants';
import styles from './CreateCourse.module.scss';

export const CreateCourse = () => {
	return (
		<div className={styles.main}>
			<div className={styles.inputLine}>
				<Input labelText='Title' placeholderText='Enter title...' />
				<Button primary>Create course</Button>
			</div>
			<TextArea labelText='Description' placeholderText='Enter description' />
			<div className={styles.row}>
				<div className={styles.column}>
					<div className={styles.addAuthorDiv}>
						<h3 className={styles.h3}>Add author</h3>
						<Input
							labelText='Author name'
							placeholderText='Enter Author name'
						/>
						<div className={styles.buttonDiv}>
							<Button secondary>Create author</Button>
						</div>
					</div>
					<div className={styles.durationDiv}>
						<h3 className={styles.h3}>Duration</h3>
						<Input
							labelText='Duration'
							placeholderText='Enter duration in minutes'
						/>
						<div className={styles.durationCounter}>
							Duration:{' '}
							<span className='typography--bold typography--extra-large'>
								00:00
							</span>{' '}
							hours
						</div>
					</div>
				</div>
				<div className={styles.column}>
					<div>
						<h3 className={styles.h3}>Authors</h3>
						<div>
							{mockedAuthorsList.map((authors) => (
								<div className={styles.addAuthorLines}>
									<p>{authors.name}</p>
									<div className={styles.buttonDiv}>
										<Button secondary>Add author</Button>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<h3 className={styles.h3}>Course Authors</h3>
						<div>Author list is empty</div>
					</div>
				</div>
			</div>
		</div>
	);
};

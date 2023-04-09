import { PrimaryButton } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

export const Header = () => {
	return (
		<>
			<Logo />
			<PrimaryButton
				buttonText='Logout'
				width='100px'
				height='30px'
				backgroundColor='white'
				border='2px solid violet'
			/>
		</>
	);
};

export const PrimaryButton = ({
	width,
	height,
	backgroundColor,
	color,
	border,
	borderColor,
	fontSize,
	buttonText,
	onClickProp,
}) => {
	return (
		<button
			style={{
				width,
				height,
				backgroundColor,
				color,
				border,
				borderColor,
				fontSize,
			}}
			onClick={onClickProp}
		>
			{buttonText}
		</button>
	);
};

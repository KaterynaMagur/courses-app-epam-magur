export const getCurrentDate = () => {
	return new Date().toLocaleDateString('en-US');
};

export const transformDate = (date, divider = '.') => {
	return date.replace(/\//g, divider);
};

export const numberToDay = (n: number) => {
	switch (n) {
		case 1:
			return 'l';
		case 2:
			return 'm';
		case 3:
			return 'x';
		case 4:
			return 'j';
		case 5:
			return 'v';
		case 6:
			return 's';
		case 7:
			return 'd';
	}
	return 'd';
};

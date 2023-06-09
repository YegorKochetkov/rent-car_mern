export const formatNumber = (
	locales: string | string[],
	options: Intl.NumberFormatOptions,
	numberToFormat: number,
) => {
	return new Intl.NumberFormat(locales, options).format(numberToFormat);
};

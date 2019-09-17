export default ( value, unit ) => {
	let css = '';

	if ( 'undefined' !== typeof value ) {
		css += value + unit;
	}

	return css;
}


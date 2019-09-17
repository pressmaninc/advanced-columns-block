export default ( selectors, id, isResponsive = false, responsiveType = '' ) => {
	let breakpoint = ( 'mobile' === responsiveType ) ? '767' : '',
		gen_styling_css = '',
		res_styling_css = '';

	for ( let i in selectors ) {
		const sel = selectors[i];
		let css = '';

		for ( let j in sel ) {
			let checkString = true;

			if ( 'string' === typeof sel[j] && !sel[j].length ) {
				checkString = false;
			}

			if ( 'undefined' !== typeof sel[j] && checkString ) {
				css += `${j}: ${sel[j]};`;
			}
		}

		if ( !!css.length ) {
			gen_styling_css += `${id}${i}{${css}}`;
		}
	}

	if ( isResponsive && 'undefined' !== typeof gen_styling_css && !!gen_styling_css.length ) {
		res_styling_css += `@media only screen and (max-width: ${breakpoint}px) {${gen_styling_css}}`;
	}

	return (isResponsive) ? res_styling_css : gen_styling_css;
}


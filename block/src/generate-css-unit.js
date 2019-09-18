export default ( value, unit ) => {
	return ( 'undefined' !== typeof value ) ? value + unit : '';
}

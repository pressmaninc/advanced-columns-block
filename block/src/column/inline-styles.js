/**
 * Returns Dynamic Generated CSS
 */

import GenerateCssUnit from '../generate-css-unit';

export default props => {
	const
		{
			backgroundColor,
			backgroundOpacity,
			backgroundType,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			backgroundImageColor,
			borderRadius,
			overlayType,
			gradientOverlayColor1,
			gradientOverlayColor2,
			gradientOverlayType,
			gradientOverlayLocation1,
			gradientOverlayLocation2,
			gradientOverlayAngle,
		} = props.attributes,
		style = {};

	switch ( backgroundType ) {
		case 'image':
			style['opacity'] = ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '';
			style['background-color'] = backgroundImageColor;


			if ( 'color' === overlayType ) {
				style['opacity'] = ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '';
			} else {
				style['background-color'] = 'transparent';
				style['background-image'] = ( 'linear' === gradientOverlayType ) ?
					`linear-gradient(${gradientOverlayAngle}deg, ${gradientOverlayColor2} ${gradientOverlayLocation1}%, ${gradientOverlayColor1} ${gradientOverlayLocation2}%)` :
					style['background-image'] = `radial-gradient( at center center, ${gradientOverlayColor2} ${gradientOverlayLocation1}%, ${gradientOverlayColor1} ${gradientOverlayLocation2}%)`;
			}
			break;

		case  'gradient' :
			style['background-color'] = 'transparent';
			style['opacity'] = ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '';

			style['background-image'] = ( 'linear' === gradientType ) ?
				`linear-gradient(${gradientAngle}deg, ${gradientColor2} ${gradientLocation1}%, ${gradientColor1} ${gradientLocation2}%)` :
				`radial-gradient( at center center, ${gradientColor2} ${gradientLocation1}%, ${gradientColor1} ${gradientLocation2}%)`;
			break;

		case 'color' :
			style['opacity'] = ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '';
			style['background-color'] = backgroundColor;
			break;

		default:
			break;
	}

	style['border-radius'] = GenerateCssUnit( borderRadius, 'px' );

	return style;
}


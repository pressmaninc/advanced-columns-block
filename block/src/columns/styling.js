/**
 * Returns Dynamic Generated CSS
 */

import InlineStyles from './inline-styles'
import GenerateCss from '../generate-css';
import GenerateCssUnit from '../generate-css-unit';

export default props => {
	const
		{
			backgroundType,
			backgroundVideoColor,
			backgroundImageColor,
			backgroundOpacity,
			backgroundColor,
			backgroundVideoOpacity,
			borderRadius,
			contentWidth,
			width,
			widthType,
			columnGap,
			topColor,
			topHeight,
			topHeightMobile,
			topWidth,
			bottomColor,
			bottomHeight,
			bottomHeightMobile,
			bottomWidth,
			gradientColor1,
			gradientColor2,
			gradientLocation1,
			gradientLocation2,
			gradientType,
			gradientAngle,
			gradientPosition,
			topPaddingMobile,
			bottomPaddingMobile,
			leftPaddingMobile,
			rightPaddingMobile,
			topMarginMobile,
			bottomMarginMobile,
			topDividerOpacity,
			bottomDividerOpacity,
			mobileMarginType,
			mobilePaddingType,
		} = props.attributes;

	let max_width = '100%';

	if ( 'custom' === contentWidth && '' !== width ) {
		max_width = GenerateCssUnit( width, widthType );
	}

	const selectors = {
		'.acb-columns__wrap': InlineStyles( props ),
		' .acb-columns__video-wrap': {
			opacity: ( 'undefined' !== typeof backgroundVideoOpacity ) ? ( 100 - backgroundVideoOpacity ) / 100 : 0.5
		},
		' > .acb-columns__inner-wrap': {
			'max-width': max_width
		},
		' .acb-column__inner-wrap': {
			padding: GenerateCssUnit( columnGap, 'px' )
		},
		' .acb-columns__shape-top svg': {
			width: `calc( ${topWidth}% + 1.3px )`,
			height: GenerateCssUnit( topHeight, 'px' )
		},
		' .acb-columns__shape-top .acb-columns__shape-fill': {
			fill: topColor,
			opacity: ( 'undefined' !== typeof topDividerOpacity ) ? ( topDividerOpacity ) / 100 : ''
		},
		' .acb-columns__shape-bottom svg': {
			width: `calc( ${bottomWidth}% + 1.3px )`,
			height: GenerateCssUnit( bottomHeight, 'px' )
		},
		' .acb-columns__shape-bottom .acb-columns__shape-fill': {
			fill: bottomColor,
			opacity: ( 'undefined' !== typeof bottomDividerOpacity ) ? ( bottomDividerOpacity ) / 100 : ''
		},
	};

	selectors[' > .acb-columns__overlay'] = {};

	switch ( backgroundType ) {
		case 'video':
			selectors[' > .acb-columns__overlay'] = {
				opacity: 1,
				'background-color': backgroundVideoColor
			};
			break;

		case 'image':
			selectors[' > .acb-columns__overlay'] = {
				opacity: ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '',
				'background-color': backgroundImageColor
			};
			break;

		case 'color':
			selectors[' > .acb-columns__overlay'] = {
				opacity: ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '',
				'background-color': backgroundColor
			};
			break;

		case 'gradient':
			selectors[' > .acb-columns__overlay']['background-color'] = 'transparent';
			selectors[' > .acb-columns__overlay']['opacity'] = ( 'undefined' !== typeof backgroundOpacity ) ? backgroundOpacity / 100 : '';

			if ( 'linear' === gradientType ) {
				selectors[' > .acb-columns__overlay']['background-image'] = `linear-gradient(${gradientAngle}deg, ${gradientColor1} ${gradientLocation1}%, ${gradientColor2} ${gradientLocation2}%)`;
			} else {
				selectors[' > .acb-columns__overlay']['background-image'] = `radial-gradient( at ${gradientPosition}, ${gradientColor1} ${gradientLocation1}%, ${gradientColor2} ${gradientLocation2}%)`;
			}
			break;

		default:
			break;
	}

	selectors[' > .acb-columns__overlay']['border-radius'] = GenerateCssUnit( borderRadius, 'px' );

	const mobile_selectors = {
		'.acb-columns__wrap': {
			'padding-top': GenerateCssUnit( topPaddingMobile, mobilePaddingType ),
			'padding-bottom': GenerateCssUnit( bottomPaddingMobile, mobilePaddingType ),
			'padding-left': GenerateCssUnit( leftPaddingMobile, mobilePaddingType ),
			'padding-right': GenerateCssUnit( rightPaddingMobile, mobilePaddingType ),
			'margin-top': GenerateCssUnit( topMarginMobile, mobileMarginType ),
			'margin-bottom': GenerateCssUnit( bottomMarginMobile, mobileMarginType ),
		},
		' .acb-columns__shape-top svg': {
			height: GenerateCssUnit( topHeightMobile, 'px' )
		},
		' .acb-columns__shape-bottom svg': {
			height: GenerateCssUnit( bottomHeightMobile, 'px' )
		},
	};

	return GenerateCss( selectors, `#acb-columns-${props.clientId}` ) +
	       GenerateCss( mobile_selectors, `#acb-columns-${props.clientId}`, true, 'mobile' );
};

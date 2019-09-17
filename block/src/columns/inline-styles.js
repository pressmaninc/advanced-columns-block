/**
 * Returns Dynamic Generated CSS
 */
import GenerateCssUnit from '../generate-css-unit';

export default props => {
	const {
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		topMargin,
		bottomMargin,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundRepeat,
		backgroundType,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		desktopMarginType,
		desktopPaddingType,
	} = props.attributes;

	const style = {
		'padding-top': GenerateCssUnit( topPadding, desktopPaddingType ),
		'padding-bottom': GenerateCssUnit( bottomPadding, desktopPaddingType ),
		'padding-left': GenerateCssUnit( leftPadding, desktopPaddingType ),
		'padding-right': GenerateCssUnit( rightPadding, desktopPaddingType ),
		'margin-top': GenerateCssUnit( topMargin, desktopMarginType ),
		'margin-bottom': GenerateCssUnit( bottomMargin, desktopMarginType ),
		'border-radius': GenerateCssUnit( borderRadius, desktopMarginType ),
	};

	if ( 'none' !== borderStyle ) {
		style['border-style'] = borderStyle;
		style['border-width'] = GenerateCssUnit( borderWidth, 'px' );
		style['border-color'] = borderColor;
	}

	if ( 'image' === backgroundType ) {
		style['background-image'] = ( backgroundImage ) ? `url(${backgroundImage.url})` : null;
		style['background-position'] = backgroundPosition.replace( '-', ' ' );
		style['background-attachment'] = backgroundAttachment;
		style['background-repeat'] = backgroundRepeat;
		style['background-size'] = backgroundSize;
	}

	return style;
};

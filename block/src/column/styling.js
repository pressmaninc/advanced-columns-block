/**
 * Returns Dynamic Generated CSS
 */

import InlineStyles from './inline-styles'
import GenerateCss from '../generate-css';
import GenerateCssUnit from '../generate-css-unit';

export default props => {
	const {
		colWidth,
		colWidthMobile,

		topPadding,
		bottomPadding,
		leftPadding,
		rightPadding,
		topMargin,
		bottomMargin,
		leftMargin,
		rightMargin,

		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,

		backgroundType,
		backgroundImage,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		mobileMarginType,
		desktopMarginType,
		mobilePaddingType,
		desktopPaddingType,
	} = props.attributes;

	const
		position = backgroundPosition.replace( '-', ' ' ),
		style = {
			'padding-top': GenerateCssUnit( topPadding, desktopPaddingType ),
			'padding-bottom': GenerateCssUnit( bottomPadding, desktopPaddingType ),
			'padding-left': GenerateCssUnit( leftPadding, desktopPaddingType ),
			'padding-right': GenerateCssUnit( rightPadding, desktopPaddingType ),
			'margin-top': GenerateCssUnit( topMargin, desktopMarginType ),
			'margin-bottom': GenerateCssUnit( bottomMargin, desktopMarginType ),
			'margin-left': GenerateCssUnit( leftMargin, desktopMarginType ),
			'margin-right': GenerateCssUnit( rightMargin, desktopMarginType ),
			'border-radius': GenerateCssUnit( borderRadius, desktopMarginType ),
		};

	if ( 'none' !== borderStyle ) {
		style['border-style'] = borderStyle;
		style['border-width'] = GenerateCssUnit( borderWidth, 'px' );
		style['border-color'] = borderColor;
	}

	if ( 'image' === backgroundType ) {
		style['background-image'] = ( backgroundImage ) ? `url(${backgroundImage.url})` : null;
		style['background-position'] = position;
		style['background-attachment'] = backgroundAttachment;
		style['background-repeat'] = backgroundRepeat;
		style['background-size'] = backgroundSize;

	}

	const
		selectors = {
			[((props.isSave) ? ' .acb-column__overlay' : '::before')]: InlineStyles( props ),
			'': style
		},
		mobile_selectors = {
			'': {
				'padding-top': GenerateCssUnit( topPaddingMobile, mobilePaddingType ),
				'padding-bottom': GenerateCssUnit( bottomPaddingMobile, mobilePaddingType ),
				'padding-left': GenerateCssUnit( leftPaddingMobile, mobilePaddingType ),
				'padding-right': GenerateCssUnit( rightPaddingMobile, mobilePaddingType ),
				'margin-top': GenerateCssUnit( topMarginMobile, mobileMarginType ),
				'margin-bottom': GenerateCssUnit( bottomMarginMobile, mobileMarginType ),
				'margin-left': GenerateCssUnit( leftMarginMobile, mobileMarginType ),
				'margin-right': GenerateCssUnit( rightMarginMobile, mobileMarginType ),
			}
		};

	if ( '' !== colWidth && 0 !== colWidth ) {
		selectors[((props.isSave)? `#acb-column-${props.attributes.block_id}`: '.editor-block-list__block')] = {width: `${colWidth}%`};
	}

	if ( '' !== colWidthMobile && 0 !== colWidthMobile ) {
		mobile_selectors[((props.isSave)? `#acb-column-${props.attributes.block_id}`: '.editor-block-list__block')] = {width: `${colWidthMobile}%`};
	}

	const id = (props.isSave) ? `#acb-column-${props.attributes.block_id}` :`#wpwrap .edit-post-visual-editor #block-${props.clientId}`;

	return GenerateCss( selectors, id ) +
	       GenerateCss( mobile_selectors, id, true, 'mobile' );
}

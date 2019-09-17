/**
 * 余白
 */
import {PanelBody} from "@wordpress/components";
import {__} from "@wordpress/i18n";

import Padding from './padding';
import Margin from './margin';

export default ( {
	setAttributes,
	mobilePaddingType,
	topPaddingMobile,
	bottomPaddingMobile,
	leftPaddingMobile,
	rightPaddingMobile,
	desktopPaddingType,
	topPadding,
	bottomPadding,
	leftPadding,
	rightPadding,
	mobileMarginType,
	topMarginMobile,
	bottomMarginMobile,
	leftMarginMobile,
	rightMarginMobile,
	desktopMarginType,
	topMargin,
	bottomMargin,
	leftMargin,
	rightMargin,
} ) => {
	return (
		<PanelBody title={__( 'Spacing', 'advanced-columns-block' )} initialOpen={false}>
			{/* 内側余白 */}
			<Padding
				setAttributes={setAttributes}
				mobilePaddingType={mobilePaddingType}
				topPaddingMobile={topPaddingMobile}
				bottomPaddingMobile={bottomPaddingMobile}
				leftPaddingMobile={leftPaddingMobile}
				rightPaddingMobile={rightPaddingMobile}
				desktopPaddingType={desktopPaddingType}
				topPadding={topPadding}
				bottomPadding={bottomPadding}
				leftPadding={leftPadding}
				rightPadding={rightPadding}
			/>
			<hr className='acb-editor__separator'/>
			{/* 外側余白 */}
			<Margin
				setAttributes={setAttributes}
				mobileMarginType={mobileMarginType}
				topMarginMobile={topMarginMobile}
				bottomMarginMobile={bottomMarginMobile}
				leftMarginMobile={leftMarginMobile}
				rightMarginMobile={rightMarginMobile}
				desktopMarginType={desktopMarginType}
				topMargin={topMargin}
				bottomMargin={bottomMargin}
				leftMargin={leftMargin}
				rightMargin={rightMargin}
			/>
		</PanelBody>
	);
}
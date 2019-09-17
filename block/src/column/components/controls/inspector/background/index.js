import {
	ColorPalette,
} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {
	PanelBody,
	RangeControl,
	SelectControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import Color from './color';
import Image from './image';
import Gradient from './gradient';

export default ( {
	setAttributes,
	backgroundType,
	backgroundColor,
	onSelectImage,
	onRemoveImage,
	backgroundImage,
	backgroundPosition,
	backgroundAttachment,
	backgroundRepeat,
	backgroundSize,
	backgroundImageColor,
	gradientColor1,
	gradientLocation1,
	gradientColor2,
	gradientLocation2,
	gradientType,
	gradientAngle,
	backgroundOpacity,
	overlayType,
	gradientOverlayColor1,
	gradientOverlayColor2,
	gradientOverlayType,
	gradientOverlayLocation1,
	gradientOverlayLocation2,
	gradientOverlayAngle,
} ) => {
	let options = ( <Fragment/> );

	if ( 'color' === backgroundType || ( 'image' === backgroundType && backgroundImage ) || 'gradient' === backgroundType ) {
		options = (
			<RangeControl
				label={__( 'Opacity', 'advanced-columns-block' )}
				value={backgroundOpacity}
				onChange={value => setAttributes( {backgroundOpacity: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
				min={0}
				max={100}
				allowReset
				initialPosition={100}
			/>
		);
	}

	return (
		<PanelBody title={__( 'Background', 'advanced-columns-block' )} initialOpen={false}>
			<SelectControl
				label={__( 'Background Type', 'advanced-columns-block' )}
				value={backgroundType}
				onChange={value => setAttributes( {backgroundType: value} )}
				options={[
					{value: 'none', label: __( 'None', 'advanced-columns-block' )},
					{value: 'color', label: __( 'Color', 'advanced-columns-block' )},
					{value: 'gradient', label: __( 'Gradient', 'advanced-columns-block' )},
					{value: 'image', label: __( 'Image', 'advanced-columns-block' )},
				]}
			/>
			{/* 背景色 */}
			<Color setAttributes={setAttributes} backgroundColor={backgroundColor} isShow={'color' === backgroundType}/>
			{/* 背景画像 */}
			<Image
				setAttributes={setAttributes}
				onSelectImage={onSelectImage}
				onRemoveImage={onRemoveImage}
				backgroundImage={backgroundImage}
				backgroundPosition={backgroundPosition}
				backgroundAttachment={backgroundAttachment}
				backgroundRepeat={backgroundRepeat}
				backgroundSize={backgroundSize}
				overlayType={overlayType}
				backgroundImageColor={backgroundImageColor}
				gradientOverlayColor1={gradientOverlayColor1}
				gradientOverlayColor2={gradientOverlayColor2}
				gradientOverlayType={gradientOverlayType}
				gradientOverlayLocation1={gradientOverlayLocation1}
				gradientOverlayLocation2={gradientOverlayLocation2}
				gradientOverlayAngle={gradientOverlayAngle}
				isShow={'image' === backgroundType}
			/>
			{/* 背景グラデーション */}
			<Gradient
				setAttributes={setAttributes}
				gradientColor1={gradientColor1}
				gradientLocation1={gradientLocation1}
				gradientColor2={gradientColor2}
				gradientLocation2={gradientLocation2}
				gradientType={gradientType}
				gradientAngle={gradientAngle}
				isShow={'gradient' === backgroundType}
			/>
			{options}
		</PanelBody>
	);
}

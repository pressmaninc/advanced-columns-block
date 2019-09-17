import {ColorPalette} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {PanelBody, RangeControl, SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import Color from './color';
import Image from './image';
import Gradient from './gradient';
import Video from './video';

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
	backgroundVideoColor,
	gradientColor1,
	gradientLocation1,
	gradientColor2,
	gradientLocation2,
	gradientType,
	gradientAngle,
	gradientPosition,
	onSelectVideo,
	onRemoveVideo,
	backgroundVideo,
	backgroundOpacity,
	backgroundVideoOpacity,
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
	} else if ( 'video' === backgroundType && backgroundVideo ) {
		options = (
			<Fragment>
				<p className='acb-setting-label'>
					{__( 'Video Overlay Color', 'advanced-columns-block' )}
					<span className='components-base-control__label'>
						<span className='component-color-indicator' style={{backgroundColor: backgroundVideoColor}}/>
					</span>
				</p>
				<ColorPalette
					value={backgroundVideoColor}
					onChange={colorValue => setAttributes( {backgroundVideoColor: colorValue} )}
					allowReset
				/>
				<RangeControl
					label={__( 'Opacity', 'advanced-columns-block' )}
					value={backgroundVideoOpacity}
					onChange={value => setAttributes( {backgroundVideoOpacity: ( ( 'undefined' !== typeof value ) ? value : 50 )} )}
					min={0}
					max={100}
					allowReset
					initialPosition={50}
				/>
			</Fragment>
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
					{value: 'video', label: __( 'Video', 'advanced-columns-block' )}
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
				backgroundImageColor={backgroundImageColor}
				isShow={'image' === backgroundType}
			/>
			{/* 背景グラデーション */}
			<Gradient
				setAttributes={setAttributes}
				backgroundVideoColor={backgroundVideoColor}
				gradientColor1={gradientColor1}
				gradientLocation1={gradientLocation1}
				gradientColor2={gradientColor2}
				gradientLocation2={gradientLocation2}
				gradientType={gradientType}
				gradientAngle={gradientAngle}
				gradientPosition={gradientPosition}
				isShow={'gradient' === backgroundType}
			/>
			{/* 背景動画 */}
			<Video onSelectVideo={onSelectVideo} onRemoveVideo={onRemoveVideo} backgroundVideo={backgroundVideo} isShow={'video' === backgroundType}/>
			{/* 透過設定 */}
			{options}
		</PanelBody>
	);
}

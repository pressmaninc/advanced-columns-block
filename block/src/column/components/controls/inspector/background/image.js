/**
 * 背景画像
 */
import {ColorPalette, MediaUpload, PanelColorSettings} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {BaseControl, Button, SelectControl, RangeControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	onSelectImage,
	onRemoveImage,
	backgroundImage,
	backgroundPosition,
	backgroundAttachment,
	backgroundRepeat,
	backgroundSize,
	overlayType,
	backgroundImageColor,
	gradientOverlayColor1,
	gradientOverlayColor2,
	gradientOverlayType,
	gradientOverlayLocation1,
	gradientOverlayLocation2,
	gradientOverlayAngle,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	let
		selectBtnTxt = ( __( 'Select Background Image', 'advanced-columns-block' ) ),
		removeBtn = ( <Fragment/> ),
		options = ( <Fragment/> ),
		overlay = ( <Fragment/> );

	if ( backgroundImage ) {
		selectBtnTxt = __( 'Replace Image', 'advanced-columns-block' );
		removeBtn = (
			<Button className='acb-rm-btn' onClick={onRemoveImage} isLink isDestructive>
				{__( 'Remove Image', 'advanced-columns-block' )}
			</Button>
		);

		if ( 'gradient' === overlayType ) {
			overlay = (
				<Fragment>
					<PanelColorSettings
						title={__( 'Color Settings', 'advanced-columns-block' )}
						colorSettings={[
							{
								value: gradientOverlayColor1,
								onChange: value => setAttributes( {gradientOverlayColor1: value} ),
								label: __( 'Color 1', 'advanced-columns-block' ),
							},
							{
								value: gradientOverlayColor2,
								onChange: value => setAttributes( {gradientOverlayColor2: value} ),
								label: __( 'Color 2', 'advanced-columns-block' ),
							}
						]}
					/>
					<SelectControl
						label={__( 'Type', 'advanced-columns-block' )}
						value={gradientOverlayType}
						onChange={value => setAttributes( {gradientOverlayType: value} )}
						options={[
							{value: 'linear', label: __( 'Linear', 'advanced-columns-block' )},
							{value: 'radial', label: __( 'Radial', 'advanced-columns-block' )},
						]}
					/>
					<RangeControl
						label={__( 'Location 1', 'advanced-columns-block' )}
						value={gradientOverlayLocation1}
						onChange={value => setAttributes( {gradientOverlayLocation1: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
						min={0}
						max={100}
						initialPosition={0}
						allowReset
					/>
					<RangeControl
						label={__( 'Location 2', 'advanced-columns-block' )}
						value={gradientOverlayLocation2}
						onChange={value => setAttributes( {gradientOverlayLocation2: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
						min={0}
						max={100}
						initialPosition={100}
						allowReset
					/>
					<RangeControl
						label={__( 'Angle', 'advanced-columns-block' )}
						value={gradientOverlayAngle}
						onChange={value => setAttributes( {gradientOverlayAngle: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
						min={0}
						max={360}
						initialPosition={0}
						allowReset
					/>
				</Fragment>
			);
		} else {
			overlay = (
				<Fragment>
					<p className='acb-setting-label'>
						{__( 'Image Overlay Color', 'advanced-columns-block' )}
						<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: backgroundImageColor}}/>
				</span>
					</p>
					<ColorPalette
						value={backgroundImageColor}
						onChange={colorValue => setAttributes( {backgroundImageColor: colorValue} )}
						allowReset
					/>
				</Fragment>
			);
		}

		options = (
			<Fragment>
				<SelectControl
					label={__( 'Image Position', 'advanced-columns-block' )}
					value={backgroundPosition}
					onChange={value => setAttributes( {backgroundPosition: value} )}
					options={[
						{value: 'top-left', label: __( 'Top Left', 'advanced-columns-block' )},
						{value: 'top-center', label: __( 'Top Center', 'advanced-columns-block' )},
						{value: 'top-right', label: __( 'Top Right', 'advanced-columns-block' )},
						{value: 'center-left', label: __( 'Center Left', 'advanced-columns-block' )},
						{value: 'center-center', label: __( 'Center Center', 'advanced-columns-block' )},
						{value: 'center-right', label: __( 'Center Right', 'advanced-columns-block' )},
						{value: 'bottom-left', label: __( 'Bottom Left', 'advanced-columns-block' )},
						{value: 'bottom-center', label: __( 'Bottom Center', 'advanced-columns-block' )},
						{value: 'bottom-right', label: __( 'Bottom Right', 'advanced-columns-block' )},
					]}
				/>
				<SelectControl
					label={__( 'Attachment', 'advanced-columns-block' )}
					value={backgroundAttachment}
					onChange={value => setAttributes( {backgroundAttachment: value} )}
					options={[
						{value: 'fixed', label: __( 'Fixed', 'advanced-columns-block' )},
						{value: 'scroll', label: __( 'Scroll', 'advanced-columns-block' )}
					]}
				/>
				<SelectControl
					label={__( 'Repeat', 'advanced-columns-block' )}
					value={backgroundRepeat}
					onChange={value => setAttributes( {backgroundRepeat: value} )}
					options={[
						{value: 'no-repeat', label: __( 'No Repeat', 'advanced-columns-block' )},
						{value: 'repeat', label: __( 'Repeat', 'advanced-columns-block' )},
						{value: 'repeat-x', label: __( 'Repeat-x', 'advanced-columns-block' )},
						{value: 'repeat-y', label: __( 'Repeat-y', 'advanced-columns-block' )}
					]}
				/>
				<SelectControl
					label={__( 'Size', 'advanced-columns-block' )}
					value={backgroundSize}
					onChange={( value ) => setAttributes( {backgroundSize: value} )}
					options={[
						{value: 'auto', label: __( 'Auto', 'advanced-columns-block' )},
						{value: 'cover', label: __( 'Cover', 'advanced-columns-block' )},
						{value: 'contain', label: __( 'Contain', 'advanced-columns-block' )}
					]}
				/>
				<SelectControl
					label={__( 'Image Overlay Type', 'advanced-columns-block' )}
					value={overlayType}
					onChange={value => setAttributes( {overlayType: value} )}
					options={[
						{value: 'color', label: __( 'Color', 'advanced-columns-block' )},
						{value: 'gradient', label: __( 'Gradient', 'advanced-columns-block' )},
					]}
				/>
				{overlay}
			</Fragment>
		);
	}

	return (
		<Fragment>
			<BaseControl
				className='editor-bg-image-control'
				label={__( 'Background Image', 'advanced-columns-block' )}>
				<MediaUpload
					title={__( 'Select Background Image', 'advanced-columns-block' )}
					onSelect={onSelectImage}
					allowedTypes={['image']}
					value={backgroundImage}
					render={( {open} ) => ( <Button isDefault onClick={open}>{selectBtnTxt}</Button> )}
				/>
				{removeBtn}
			</BaseControl>
			{options}
		</Fragment>
	);
}
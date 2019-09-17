/**
 * 背景画像
 */
import {ColorPalette, MediaUpload} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {BaseControl, Button, SelectControl} from '@wordpress/components';
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
	backgroundImageColor,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	let
		selectBtnTxt = ( __( 'Select Background Image', 'advanced-columns-block' ) ),
		removeBtn = ( <Fragment/> ),
		options = ( <Fragment/> );

	if ( backgroundImage ) {
		selectBtnTxt = __( 'Replace Image', 'advanced-columns-block' );
		removeBtn = (
			<Button className='acb-rm-btn' onClick={onRemoveImage} isLink isDestructive>
				{__( 'Remove Image', 'advanced-columns-block' )}
			</Button>
		);
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
				<Fragment>
					<p className='acb-setting-label'>
						{__( 'Image Overlay Color', 'advanced-columns-block' )}
						<span className='components-base-control__label'>
								<span className='component-color-indicator' style={{backgroundColor: backgroundImageColor}}/>
							</span>
					</p>
					<ColorPalette
						value={backgroundImageColor}
						onChange={colorValue => setAttributes( {backgroundImageColor: ( ( 'undefined' !== typeof colorValue ) ? colorValue : 50 )} )}
						allowReset
					/>
				</Fragment>
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
/**
 * 背景グラデーション
 */
import {ColorPalette} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {
	RangeControl,
	SelectControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	backgroundVideoColor,
	gradientColor1,
	gradientLocation1,
	gradientColor2,
	gradientLocation2,
	gradientType,
	gradientAngle,
	gradientPosition,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	let option = (
		<RangeControl
			label={__( 'Angle', 'advanced-columns-block' )}
			value={gradientAngle}
			onChange={value => setAttributes( {gradientAngle: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
			min={0}
			max={360}
			initialPosition={0}
			allowReset
		/>
	);

	if ( 'undefined' !== typeof gradientPosition && 'radial' === gradientType ) {
		option = (
			<SelectControl
				label={__( 'Type', 'advanced-columns-block' )}
				value={gradientPosition}
				onChange={value => setAttributes( {gradientPosition: value} )}
				options={[
					{value: 'center center', label: __( 'Center Center', 'advanced-columns-block' )},
					{value: 'center left', label: __( 'Center Left', 'advanced-columns-block' )},
					{value: 'center right', label: __( 'Center Right', 'advanced-columns-block' )},
					{value: 'top center', label: __( 'Top Center', 'advanced-columns-block' )},
					{value: 'top left', label: __( 'Top Left', 'advanced-columns-block' )},
					{value: 'top right', label: __( 'Top Right', 'advanced-columns-block' )},
					{value: 'bottom center', label: __( 'Bottom Center', 'advanced-columns-block' )},
					{value: 'bottom left', label: __( 'Bottom Left', 'advanced-columns-block' )},
					{value: 'bottom right', label: __( 'Bottom Right', 'advanced-columns-block' )},
				]}
			/>
		);
	}

	return (
		<Fragment>
			<p className='acb-setting-label'>
				{__( 'Color 1', 'advanced-columns-block' )}
				<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: backgroundVideoColor}}/>
				</span>
			</p>
			<ColorPalette
				value={gradientColor1}
				onChange={colorValue => setAttributes( {gradientColor1: colorValue} )}
				allowReset
			/>
			<RangeControl
				label={__( 'Location 1', 'advanced-columns-block' )}
				value={gradientLocation1}
				onChange={value => setAttributes( {gradientLocation1: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
				min={0}
				max={100}
				initialPosition={0}
				allowReset
			/>
			<p className='acb-setting-label'>
				{__( 'Color 2', 'advanced-columns-block' )}
				<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: backgroundVideoColor}}/>
				</span>
			</p>
			<ColorPalette
				value={gradientColor2}
				onChange={colorValue => setAttributes( {gradientColor2: colorValue} )}
				allowReset
			/>
			<RangeControl
				label={__( 'Location 2', 'advanced-columns-block' )}
				value={gradientLocation2}
				onChange={value => setAttributes( {gradientLocation2: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
				min={0}
				max={100}
				initialPosition={100}
				allowReset
			/>
			<SelectControl
				label={__( 'Type', 'advanced-columns-block' )}
				value={gradientType}
				onChange={value => setAttributes( {gradientType: value} )}
				options={[
					{value: 'linear', label: __( 'Linear', 'advanced-columns-block' )},
					{value: 'radial', label: __( 'Radial', 'advanced-columns-block' )},
				]}
			/>
			{option}
		</Fragment>
	);
};


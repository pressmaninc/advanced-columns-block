/**
 * 背景グラデーション
 */
import {ColorPalette, PanelColorSettings} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {
	RangeControl,
	SelectControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	gradientColor1,
	gradientLocation1,
	gradientColor2,
	gradientLocation2,
	gradientType,
	gradientAngle,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	return (
		<Fragment>
			<PanelColorSettings
				title={__( 'Color Settings', 'advanced-columns-block' )}
				colorSettings={[
					{
						value: gradientColor2,
						onChange: value => setAttributes( {gradientColor2: value} ),
						label: __( 'Color 1', 'advanced-columns-block' ),
					},
					{
						value: gradientColor1,
						onChange: value => setAttributes( {gradientColor1: value} ),
						label: __( 'Color 2', 'advanced-columns-block' ),
					},
				]}
			>
			</PanelColorSettings>
			<SelectControl
				label={__( 'Type', 'advanced-columns-block' )}
				value={gradientType}
				onChange={value => setAttributes( {gradientType: value} )}
				options={[
					{value: 'linear', label: __( 'Linear', 'advanced-columns-block' )},
					{value: 'radial', label: __( 'Radial', 'advanced-columns-block' )},
				]}
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
			<RangeControl
				label={__( 'Location 2', 'advanced-columns-block' )}
				value={gradientLocation2}
				onChange={value => setAttributes( {gradientLocation2: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
				min={0}
				max={100}
				initialPosition={100}
				allowReset
			/>
			<RangeControl
				label={__( 'Angle', 'advanced-columns-block' )}
				value={gradientAngle}
				onChange={value => setAttributes( {gradientAngle: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
				min={0}
				max={360}
				initialPosition={0}
				allowReset
			/>
		</Fragment>
	);
};


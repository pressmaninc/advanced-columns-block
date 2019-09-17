import {ColorPalette} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {RangeControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	borderWidth,
	borderRadius,
	borderColor,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	return (
		<Fragment>
			<RangeControl
				label={__( 'Border Width', 'advanced-columns-block' )}
				value={borderWidth}
				onChange={value => setAttributes( {borderWidth: ( ( 'undefined' !== typeof value ) ? value : 1 )} )}
				min={0}
				max={50}
				initialPosition={1}
				allowReset
			/>
			<RangeControl
				label={__( 'Border Radius', 'advanced-columns-block' )}
				value={borderRadius}
				onChange={value => setAttributes( {borderRadius: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
				min={0}
				max={1000}
				initialPosition={0}
				allowReset
			/>
			<p className='acb-setting-label'>
				{__( 'Border Color', 'advanced-columns-block' )}
				<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: borderColor}}/>
				</span>
			</p>
			<ColorPalette
				value={borderColor}
				onChange={colorValue => setAttributes( {borderColor: colorValue} )}
				allowReset
			/>
		</Fragment>
	);
};

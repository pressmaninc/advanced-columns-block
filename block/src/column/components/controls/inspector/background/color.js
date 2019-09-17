/**
 * 背景色
 */
import {ColorPalette} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	backgroundColor,
	isShow,
} ) => {
	if ( !isShow ) {
		return null;
	}

	return (
		<Fragment>
			<p className='acb-setting-label'>
				{__( 'Background Color', 'advanced-columns-block' )}
				<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: backgroundColor}}/>
				</span>
			</p>
			<ColorPalette
				value={backgroundColor}
				onChange={colorValue => setAttributes( {backgroundColor: colorValue} )}
				allowReset
			/>
		</Fragment>
	);
};

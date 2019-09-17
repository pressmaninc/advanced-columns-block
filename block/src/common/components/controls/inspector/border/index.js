/**
 * 枠線
 */
import {__} from '@wordpress/i18n';
import {PanelBody, SelectControl} from '@wordpress/components';

import Options from './options';

export default ( {
	setAttributes,
	borderStyle,
	borderWidth,
	borderRadius,
	borderColor,
} ) => {
	return (
		<PanelBody title={__( 'Border', 'advanced-columns-block' )} initialOpen={false}>
			<SelectControl
				label={__( 'Border Style', 'advanced-columns-block' )}
				value={borderStyle}
				onChange={value => setAttributes( {borderStyle: value} )}
				options={[
					{value: 'none', label: __( 'None', 'advanced-columns-block' )},
					{value: 'solid', label: __( 'Solid', 'advanced-columns-block' )},
					{value: 'dotted', label: __( 'Dotted', 'advanced-columns-block' )},
					{value: 'dashed', label: __( 'Dashed', 'advanced-columns-block' )},
					{value: 'double', label: __( 'Double', 'advanced-columns-block' )},
					{value: 'groove', label: __( 'Groove', 'advanced-columns-block' )},
					{value: 'inset', label: __( 'Inset', 'advanced-columns-block' )},
					{value: 'outset', label: __( 'Outset', 'advanced-columns-block' )},
					{value: 'ridge', label: __( 'Ridge', 'advanced-columns-block' )},
				]}
			/>
			<Options
				setAttributes={setAttributes}
				borderWidth={borderWidth}
				borderRadius={borderRadius}
				borderColor={borderColor}
				isShow={( 'none' !== borderStyle )}
			/>
		</PanelBody>
	);
};

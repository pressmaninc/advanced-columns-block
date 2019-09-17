/**
 * レイアウト
 */
import {
	PanelBody,
	RangeControl,
	SelectControl,
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	columns,
	columnGap,
} ) => {
	return (
		<PanelBody title={__( 'Layout', 'advanced-columns-block' )} initialOpen={false}>
			{/* 列数 */}
			<RangeControl
				label={__( 'Columns', 'advanced-columns-block' )}
				value={columns}
				min={0}
				max={6}
				initialPosition={2}
				onChange={value => setAttributes( {columns: value} )}
			/>
			{/* 列の余白 */}
			<SelectControl
				label={__( 'Column Gap', 'advanced-columns-block' )}
				value={columnGap}
				onChange={value => setAttributes( {columnGap: value} )}
				options={[
					{value: '10', label: __( 'Default (10px)', 'advanced-columns-block' )},
					{value: '0', label: __( 'No Gap (0px)', 'advanced-columns-block' )},
					{value: '5', label: __( 'Narrow (5px)', 'advanced-columns-block' )},
					{value: '15', label: __( 'Extended (15px)', 'advanced-columns-block' )},
					{value: '20', label: __( 'Wide (20px)', 'advanced-columns-block' )},
					{value: '30', label: __( 'Wider (30px)', 'advanced-columns-block' )}
				]}
				help={__( 'Note: The individual Column Gap can be managed from Column Settings.', 'advanced-columns-block' )}
			/>
		</PanelBody>
	);
};
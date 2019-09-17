/**
 * BLOCK: Column
 */
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

import Icons from '../icons';
import Attributes from './attributes';
import ACBColumnEdit from './edit';
import ACBColumnSave from './save';

registerBlockType( 'advanced-columns-block/column', {
	title: __( 'Advanced Column', 'advanced-columns-block' ),
	description: __( 'This block is an immediate child of Advanced Columns.', 'advanced-columns-block' ),
	icon: Icons.column,
	category: 'advanced-columns-block',
	parent: ['advanced-columns-block/columns'],
	supports: {inserter: false},
	attributes: Attributes,
	edit: ACBColumnEdit,
	save: ACBColumnSave,
} );

export default ACBColumnEdit;

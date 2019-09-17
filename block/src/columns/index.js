import {registerBlockType} from '@wordpress/blocks';
import {Dashicon} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import Icons from '../icons';
import Attributes from './attributes';
import ACBColumnsEdit from './edit';
import ACBColumnsSave from './save';

registerBlockType( 'advanced-columns-block/columns', {
	title: __( 'Advanced Columns', 'advanced-columns-block' ),
	description:  __( 'This block gives you advanced options to insert a number of columns within a single row.', 'advanced-columns-block' ),
	icon: Icons.columns,
	category: 'advanced-columns-block',
	keywords: [
		__( 'columns', 'advanced-columns-block' ),
		__( 'rows', 'advanced-columns-block' ),
		__( 'uag', 'advanced-columns-block' ),
	],
	attributes: Attributes,
	edit: ACBColumnsEdit,
	getEditWrapperProps( attributes ) {
		return {'data-align': attributes.align, 'data-valign': attributes.vAlign};
	},
	save: ACBColumnsSave,
} );

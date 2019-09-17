/**
 * 上下中央揃え
 */
import {Button, Toolbar, Tooltip} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import classnames from 'classnames';

import Icons from '../../../../icons';

export default ( {
	setAttributes,
	vAlign,
} ) => {
	return (
		<Toolbar>
			<Tooltip text={__( 'Vertically Middle', 'advanced-columns-block' )}>
				<Button
					className={classnames(
						'components-icon-button',
						'components-toolbar__control',
						{'is-active': ('middle' === vAlign) },
					)}
					onClick={() => setAttributes( {vAlign: 'middle'} )}
				>
					{Icons.middle_align}
				</Button>
			</Tooltip>
		</Toolbar>
	);
}
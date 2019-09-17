/**
 * 上揃え
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
			<Tooltip text={__( 'Vertically Top', 'advanced-columns-block' )}>
				<Button
					className={classnames(
						'components-icon-button',
						'components-toolbar__control',
						{'is-active': ('top' === vAlign)},
					)}
					onClick={() => setAttributes( {vAlign: 'top'} )}
				>
					{Icons.top_align}
				</Button>
			</Tooltip>
		</Toolbar>
	);
}
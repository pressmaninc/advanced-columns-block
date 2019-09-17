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
			<Tooltip text={__( 'Vertically Bottom', 'advanced-columns-block' )}>
				<Button
					className={classnames(
						'components-icon-button',
						'components-toolbar__control',
						{'is-active': ('bottom' === vAlign)},
					)}
					onClick={() => setAttributes( {vAlign: 'bottom'} )}
				>
					{Icons.bottom_align}
				</Button>
			</Tooltip>
		</Toolbar>
	);
}
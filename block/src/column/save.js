import {InnerBlocks} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';

import classnames from 'classnames';

import Styling from './styling';

export default props => {
	const
		{block_id, backgroundType, align, alignMobile, alignTablet} = props.attributes,
		align_class = ( '' === align ) ? '' : `acb-column__align-${align}`,
		align_class_mobile = ( '' === alignMobile ) ? '' : `acb-column__align-mobile-${alignMobile}`;

	return (
		<Fragment>
			<style>{Styling( {...props, isSave: true} )}</style>
			<div
				className={classnames(
					props.className,
					'acb-column__wrap',
					`acb-column__background-${backgroundType}`,
					align_class,
					align_class_mobile
				)}
				id={`acb-column-${block_id}`}
			>
				<div className='acb-column__overlay'/>
				<div className='acb-column__inner-wrap'>
					<InnerBlocks.Content/>
				</div>
			</div>
		</Fragment>
	)
};

import classnames from 'classnames';
import {InnerBlocks} from '@wordpress/editor';

export default ( {attributes, className} ) => {
	const
		{block_id, backgroundType, align, alignMobile, alignTablet} = attributes,
		align_class = ( 'center' === align ) ? '' : `acb-column__align-${align}`,
		align_class_mobile = ( '' === alignMobile ) ? '' : `acb-column__align-mobile-${alignMobile}`,
		align_class_tablet = ( '' === alignTablet ) ? '' : `acb-column__align-tablet-${alignTablet}`;

	return (
		<div
			className={classnames(
				className,
				'acb-column__wrap',
				`acb-column__background-${backgroundType}`,
				align_class,
				align_class_mobile,
				align_class_tablet
			)}
			id={`acb-column-${block_id}`}
		>
			<div className='acb-column__overlay'/>
			<div className='acb-column__inner-wrap'>
				<InnerBlocks.Content/>
			</div>
		</div>
	)
};

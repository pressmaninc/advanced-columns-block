import {InnerBlocks} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';

import classnames from 'classnames';

import Shapes from './shapes';
import Styling from './styling';

export default props => {
	const
		{attributes, className} = props,
		{
			block_id,
			backgroundType,
			backgroundVideo,
			align,
			columns,
			stack,
			vAlign,
			columnGap,
			topType,
			bottomType,
			bottomFlip,
			topFlip,
			reverseMobile,
			topContentAboveShape,
			bottomContentAboveShape
		} = attributes;

	return (
		<Fragment>
			<style>{Styling( {...props, clientId: block_id} )}</style>
			<div
				className={classnames(
					className,
					'acb-columns__wrap',
					`acb-columns__background-${backgroundType}`,
					`acb-columns__stack-${stack}`,
					`acb-columns__valign-${vAlign}`,
					`acb-columns__gap-${columnGap}`,
					`align${align}`,
					( ( reverseMobile ) ? 'acb-columns__reverse-mobile' : '' )
				)}
				id={`acb-columns-${block_id}`}
			>
				<div className='acb-columns__overlay'/>
				{/* 仕切り(上) */}
				{'none' !== topType && (
					<div
						className={classnames(
							'acb-columns__shape',
							'acb-columns__shape-top',
							{'acb-columns__shape-flip': !!topFlip},
							{'acb-columns__shape-above-content': !!topContentAboveShape}
						)}>
						{Shapes[topType]}
					</div>
				)}
				{/* 背景動画 */}
				{'video' === backgroundType && (
					<div className='acb-columns__video-wrap'>
						{backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={backgroundVideo.url} type='video/mp4'/>
							</video>
						)}
					</div>
				)}
				<div className={classnames(
					'acb-columns__inner-wrap',
					`acb-columns__columns-${columns}`
				)}>
					<InnerBlocks.Content/>
				</div>
				{/* 仕切り(下) */}
				{'none' !== bottomType && (
					<div
						className={classnames(
							'acb-columns__shape',
							'acb-columns__shape-bottom',
							{'acb-columns__shape-flip': !!bottomFlip},
							{'acb-columns__shape-above-content': !!bottomContentAboveShape}
						)}
						data-negative='false'>
						{Shapes[bottomType]}
					</div>
				)}
			</div>
		</Fragment>
	)
};

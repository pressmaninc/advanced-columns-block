/**
 * 背景動画
 */
import {MediaUpload} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {
	BaseControl,
	Button
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	onSelectVideo,
	onRemoveVideo,
	backgroundVideo,
	isShow,
} ) => {
	if (!isShow) {
		return null;
	}

	let
		selectBtnTxt = __( 'Select Background Video', 'advanced-columns-block' ),
		removeBtn = ( <Fragment/> );

	if ( backgroundVideo ) {
		selectBtnTxt = __( 'Replace Video', 'advanced-columns-block' );
		removeBtn = (
			<Button onClick={onRemoveVideo} isLink isDestructive>
				{__( 'Remove Video', 'advanced-columns-block' )}
			</Button>
		)
	}

	return (
		<BaseControl
			className='editor-bg-video-control'
			label={__( 'Background Video', 'advanced-columns-block' )}
		>
			<MediaUpload
				title={__( 'Select Background Video', 'advanced-columns-block' )}
				onSelect={onSelectVideo}
				allowedTypes={['video']}
				value={backgroundVideo}
				render={( {open} ) => ( <Button isDefault onClick={open}>{selectBtnTxt}</Button> )}
			/>
			{removeBtn}
		</BaseControl>
	);
};

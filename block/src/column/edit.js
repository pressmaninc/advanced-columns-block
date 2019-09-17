import {ColorPalette, InnerBlocks, InspectorControls, MediaUpload, PanelColorSettings} from '@wordpress/editor';
import {Component, Fragment} from '@wordpress/element';
import {BaseControl, Button, ButtonGroup, Dashicon, PanelBody, RangeControl, SelectControl, TabPanel} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import classnames from 'classnames';

import Icons from '../icons';
import Styling from './styling';

import {SpacingPanel, BorderPanel} from '../common/components/controls/inspector';
import {LayoutPanel, BackgroundPanel} from './components/controls/inspector';

export default class ACBColumnEdit extends Component {

	constructor() {
		super( ...arguments );

		this.onRemoveImage = this.onRemoveImage.bind( this );
		this.onSelectImage = this.onSelectImage.bind( this );
	}

	componentDidMount() {
		// 属性に block_id を割り当てる。
		this.props.setAttributes( {block_id: this.props.clientId} );
		// このブロック用のCSSをStyleタグとして出力。
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', `acb-column-style-${this.props.clientId}` );
		document.head.appendChild( $style );
	}

	/*
	 * 画像削除イベント
	 */
	onRemoveImage() {
		this.props.setAttributes( {backgroundImage: null} );
	}

	/*
	 * 画像選択イベント
	 */
	onSelectImage( media ) {
		const {setAttributes} = this.props;

		if ( !media || !media.url ) {
			setAttributes( {backgroundImage: null} );
			return;
		}

		if ( !media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( {backgroundImage: media} );
	}

	render() {
		const {
			attributes: {
				topPadding,
				bottomPadding,
				leftPadding,
				rightPadding,
				topMargin,
				bottomMargin,
				leftMargin,
				rightMargin,
				topPaddingMobile,
				bottomPaddingMobile,
				leftPaddingMobile,
				rightPaddingMobile,
				topMarginMobile,
				bottomMarginMobile,
				leftMarginMobile,
				rightMarginMobile,
				colWidth,
				colWidthMobile,
				backgroundType,
				backgroundImage,
				backgroundColor,
				backgroundPosition,
				backgroundAttachment,
				backgroundRepeat,
				backgroundSize,
				gradientColor1,
				gradientColor2,
				gradientLocation1,
				gradientLocation2,
				gradientType,
				gradientAngle,
				backgroundOpacity,
				backgroundImageColor,
				borderStyle,
				borderWidth,
				borderRadius,
				borderColor,
				align,
				alignMobile,
				overlayType,
				gradientOverlayColor1,
				gradientOverlayColor2,
				gradientOverlayType,
				gradientOverlayLocation1,
				gradientOverlayLocation2,
				gradientOverlayAngle,
				mobileMarginType,
				desktopMarginType,
				mobilePaddingType,
				desktopPaddingType,
			},
			setAttributes,
			className,
			isSelected
		} = this.props;

		const element = document.getElementById( 'acb-column-style-' + this.props.clientId );

		if ( null !== element && 'undefined' !== typeof element ) {
			element.innerHTML = Styling( this.props );
		}


		const
			active = ( isSelected ) ? 'active' : 'not-active',
			align_class = ( 'center' === align ) ? '' : `acb-column__align-${align}`,
			align_class_mobile = ( '' === alignMobile ) ? '' : `acb-column__align-mobile-${alignMobile}`;

		return (
			<Fragment>
				<InspectorControls>
					{/* レイアウト */}
					<LayoutPanel
						setAttributes={setAttributes}
						colWidthMobile={colWidthMobile}
						colWidth={colWidth}
						alignMobile={alignMobile}
						align={align}
					/>
					{/* 余白 */}
					<SpacingPanel
						setAttributes={setAttributes}
						mobilePaddingType={mobilePaddingType}
						topPaddingMobile={topPaddingMobile}
						bottomPaddingMobile={bottomPaddingMobile}
						leftPaddingMobile={leftPaddingMobile}
						rightPaddingMobile={rightPaddingMobile}
						desktopPaddingType={desktopPaddingType}
						topPadding={topPadding}
						bottomPadding={bottomPadding}
						leftPadding={leftPadding}
						rightPadding={rightPadding}
						mobileMarginType={mobileMarginType}
						topMarginMobile={topMarginMobile}
						bottomMarginMobile={bottomMarginMobile}
						leftMarginMobile={leftMarginMobile}
						rightMarginMobile={rightMarginMobile}
						desktopMarginType={desktopMarginType}
						topMargin={topMargin}
						bottomMargin={bottomMargin}
						leftMargin={leftMargin}
						rightMargin={rightMargin}
					/>
					{/* 背景 */}
					<BackgroundPanel
						setAttributes={setAttributes}
						backgroundType={backgroundType}
						backgroundColor={backgroundColor}
						onSelectImage={this.onSelectImage}
						onRemoveImage={this.onRemoveImage}
						backgroundImage={backgroundImage}
						backgroundPosition={backgroundPosition}
						backgroundAttachment={backgroundAttachment}
						backgroundRepeat={backgroundRepeat}
						backgroundSize={backgroundSize}
						backgroundImageColor={backgroundImageColor}
						gradientColor1={gradientColor1}
						gradientLocation1={gradientLocation1}
						gradientColor2={gradientColor2}
						gradientLocation2={gradientLocation2}
						gradientType={gradientType}
						gradientAngle={gradientAngle}
						backgroundOpacity={backgroundOpacity}
						overlayType={overlayType}
						gradientOverlayColor1={gradientOverlayColor1}
						gradientOverlayColor2={gradientOverlayColor2}
						gradientOverlayType={gradientOverlayType}
						gradientOverlayLocation1={gradientOverlayLocation1}
						gradientOverlayLocation2={gradientOverlayLocation2}
						gradientOverlayAngle={gradientOverlayAngle}
					/>
					{/* 枠線 */}
					<BorderPanel
						setAttributes={setAttributes}
						borderStyle={borderStyle}
						borderWidth={borderWidth}
						borderRadius={borderRadius}
						borderColor={borderColor}
					/>
				</InspectorControls>
				<div
					className={classnames(
						className,
						'acb-column__wrap',
						`acb-column__background-${backgroundType}`,
						`acb-column__edit-${active}`,
						align_class,
						align_class_mobile,
					)}
					id={`acb-column-${this.props.clientId}`}
				>
					<div className='acb-column__overlay'/>
					<div className='acb-column__inner-wrap'>
						<InnerBlocks templateLock={false}/>
					</div>
				</div>
			</Fragment>
		)
	}
}

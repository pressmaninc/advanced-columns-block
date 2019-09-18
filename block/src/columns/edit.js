import {BlockAlignmentToolbar, BlockControls, InnerBlocks, InspectorControls} from '@wordpress/editor';
import {Component, Fragment} from '@wordpress/element';
import {withNotices,} from '@wordpress/components';

import classnames from 'classnames';
import memoize from 'memize';
import times from 'lodash/times';

import Styling from './styling';
import Shapes from './shapes';

import {SpacingPanel, BorderPanel} from '../common/components/controls/inspector';
import {VerticalBottom, VerticalMiddle, VerticalTop} from './components/controls/block';
import {LayoutPanel, ShapeDividersPanel, BackgroundPanel} from './components/controls/inspector';

const
	ALLOWED_BLOCKS = ['advanced-columns-block/column'],
	getColumnsTemplate = memoize( columns => {
		return times( columns, n => ['advanced-columns-block/column', {id: n + 1}] );
	} );

class ACBColumns extends Component {

	constructor() {
		super( ...arguments );

		this.onRemoveVideo = this.onRemoveVideo.bind( this );
		this.onRemoveImage = this.onRemoveImage.bind( this );
		this.onSelectImage = this.onSelectImage.bind( this );
		this.onSelectVideo = this.onSelectVideo.bind( this );
	}

	componentDidMount() {
		// 属性に block_id を割り当てる。
		this.props.setAttributes( {block_id: this.props.clientId} );
		// このブロック用のCSSをStyleタグとして出力。
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', `acb-columns-style-${this.props.clientId}` );
		document.head.appendChild( $style );
	};

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

	/*
	 * 動画削除イベント
	 */
	onRemoveVideo() {
		this.props.setAttributes( {backgroundVideo: null} );
	}

	/*
	 * 動画選択イベント
	 */
	onSelectVideo( media ) {
		const {setAttributes} = this.props;

		if ( !media || !media.url ) {
			setAttributes( {backgroundVideo: null} );
			return;
		}
		if ( !media.type || 'video' !== media.type ) {
			return;
		}

		setAttributes( {backgroundVideo: media} );
	}

	render() {
		const
			{attributes, setAttributes, isSelected, className} = this.props,
			{
				stack,
				align,
				vAlign,
				columnGap,
				topMargin,
				bottomMargin,
				topMarginMobile,
				bottomMarginMobile,
				topPadding,
				bottomPadding,
				leftPadding,
				rightPadding,
				topPaddingMobile,
				bottomPaddingMobile,
				leftPaddingMobile,
				rightPaddingMobile,
				backgroundType,
				backgroundImage,
				backgroundVideo,
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
				gradientPosition,
				backgroundOpacity,
				backgroundVideoColor,
				backgroundVideoOpacity,
				backgroundImageColor,
				borderStyle,
				borderWidth,
				borderRadius,
				borderColor,
				columns,
				bottomType,
				bottomColor,
				bottomHeight,
				bottomHeightMobile,
				bottomWidth,
				topType,
				topColor,
				topHeight,
				topHeightMobile,
				topWidth,
				bottomFlip,
				topFlip,
				reverseMobile,
				topDividerOpacity,
				bottomDividerOpacity,
				topContentAboveShape,
				bottomContentAboveShape,
				mobileMarginType,
				desktopMarginType,
				mobilePaddingType,
				desktopPaddingType,
			} = attributes,
			element = document.getElementById( `acb-columns-style-${this.props.clientId}` ),
			active = ( isSelected ) ? 'active' : 'not-active';

		if ( null !== element && 'undefined' !== typeof element ) {
			element.innerHTML = Styling( this.props );
		}

		const reverse_mobile = ( reverseMobile ) ? 'acb-columns__reverse-mobile' : '';

		return (
			<Fragment>
				{/* ブロックコントロール(ブロック上部のやつ) */}
				<BlockControls>
					<BlockAlignmentToolbar value={align} onChange={value => setAttributes( {align: value} )} controls={['wide', 'full']}/>
					<VerticalTop setAttributes={setAttributes} vAlign={vAlign}/>
					<VerticalMiddle setAttributes={setAttributes} vAlign={vAlign}/>
					<VerticalBottom setAttributes={setAttributes} vAlign={vAlign}/>
				</BlockControls>
				{/* インスペクター(右サイドバーのやつ) */}
				<InspectorControls>
					{/* レイアウト */}
					<LayoutPanel setAttributes={setAttributes} columns={columns} columnGap={columnGap}/>
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
						desktopMarginType={desktopMarginType}
						topMargin={topMargin}
						bottomMargin={bottomMargin}
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
						backgroundVideoColor={backgroundVideoColor}
						gradientColor1={gradientColor1}
						gradientLocation1={gradientLocation1}
						gradientColor2={gradientColor2}
						gradientLocation2={gradientLocation2}
						gradientType={gradientType}
						gradientAngle={gradientAngle}
						gradientPosition={gradientPosition}
						onSelectVideo={this.onSelectVideo}
						onRemoveVideo={this.onRemoveVideo}
						backgroundVideo={backgroundVideo}
						backgroundOpacity={backgroundOpacity}
						backgroundVideoOpacity={backgroundVideoOpacity}
					/>
					{/* 仕切り形状 */}
					<ShapeDividersPanel
						setAttributes={setAttributes}
						topType={topType}
						topColor={topColor}
						topDividerOpacity={topDividerOpacity}
						topWidth={topWidth}
						topHeightMobile={topHeightMobile}
						topHeight={topHeight}
						topFlip={topFlip}
						topContentAboveShape={topContentAboveShape}
						bottomType={bottomType}
						bottomColor={bottomColor}
						bottomDividerOpacity={bottomDividerOpacity}
						bottomWidth={bottomWidth}
						bottomHeightMobile={bottomHeightMobile}
						bottomHeight={bottomHeight}
						bottomFlip={bottomFlip}
						bottomContentAboveShape={bottomContentAboveShape}
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
				{/* エディター内描画処理 */}
				<div
					className={classnames(
						className,
						'acb-columns__wrap',
						`acb-columns__background-${backgroundType}`,
						`acb-columns__edit-${active}`,
						`acb-columns__stack-${stack}`,
						`acb-columns__valign-${vAlign}`,
						`acb-columns__gap-${columnGap}`,
						`align${align}`,
						reverse_mobile
					)}
					id={`acb-columns-${this.props.clientId}`}
				>
					{/* オーバーレイ */}
					<div className='acb-columns__overlay'/>
					{/* 仕切り(上) */}
					{'none' !== topType && (
						<div
							className={classnames(
								'acb-columns__shape',
								'acb-columns__shape-top',
								{'acb-columns__shape-flip': !!topFlip},
								{'acb-columns__shape-above-content': !!topContentAboveShape}
							)}
						>
							{Shapes[topType]}
						</div>
					)}
					{/* 背景動画 */}
					{'video' === backgroundType && (
						<div className='acb-columns__video-wrap'>
							{backgroundVideo && (
								<video loop muted playsInline autoPlay>
									<source src={backgroundVideo.url} type='video/mp4'/>
								</video>
							)}
						</div>
					)}
					<div className={classnames(
						'acb-columns__inner-wrap',
						`acb-columns__columns-${columns}`
					)}>
						<InnerBlocks
							template={getColumnsTemplate( columns )}
							templateLock='all'
							allowedBlocks={ALLOWED_BLOCKS}
						/>
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
		);
	}
}

export default withNotices( ACBColumns );

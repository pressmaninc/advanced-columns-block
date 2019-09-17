import {ColorPalette} from '@wordpress/editor';
import {Fragment} from '@wordpress/element';
import {
	Dashicon,
	RangeControl,
	TabPanel,
	ToggleControl
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

export default ( {
	setAttributes,
	color,
	colorKey,
	opacity,
	opacityKey,
	isShow,
	width,
	widthKey,
	heightMobile,
	heightMobileKey,
	height,
	heightKey,
	flip,
	flipKey,
	contentAboveShape,
	contentAboveShapeKey,
} ) => {
	if ( !isShow ) {
		return null;
	}

	return (
		<Fragment>
			<p className='acb-setting-label'>
				{__( 'Color', 'advanced-columns-block' )}
				<span className='components-base-control__label'>
					<span className='component-color-indicator' style={{backgroundColor: color}}/>
				</span>
			</p>
			{/* 色 */}
			<ColorPalette
				value={color}
				onChange={colorValue => setAttributes( {[colorKey]: colorValue} )}
				allowReset
			/>
			{/* 不透明度 */}
			<RangeControl
				label={__( 'Opacity', 'advanced-columns-block' )}
				value={opacity}
				onChange={value => setAttributes( {[opacityKey]: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
				min={0}
				max={100}
				initialPosition={100}
				allowReset
			/>
			{/* 幅 */}
			<RangeControl
				label={__( 'Width', 'advanced-columns-block' )}
				value={width}
				onChange={value => setAttributes( {[widthKey]: ( ( 'undefined' !== typeof value ) ? value : 100 )} )}
				min={100}
				max={300}
				initialPosition={100}
				allowReset
			/>
			{/* 高さ */}
			<TabPanel
				className='acb-size-type-field-tabs acb-without-size-type'
				activeClass='active-tab'
				tabs={[
					{
						name: 'desktop',
						title: <Dashicon icon='desktop'/>,
						className: 'acb-desktop-tab acb-responsive-tabs',
					},
					{
						name: 'mobile',
						title: <Dashicon icon='smartphone'/>,
						className: 'acb-mobile-tab acb-responsive-tabs',
					},
				]}
			>
				{tab => {
					const
						key = ( 'mobile' === tab.name ) ? heightMobileKey : heightKey,
						val = ( 'mobile' === tab.name ) ? heightMobile : height;

					return (
						<div>
							<RangeControl
								label={__( 'Height', 'advanced-columns-block' )}
								value={val}
								onChange={value => setAttributes( {[key]: ( ( 'undefined' !== typeof value ) ? value : 50 )} )}
								min={0}
								max={500}
								initialPosition={50}
								allowReset
							/>
						</div>
					);
				}}
			</TabPanel>
			{/* 反転 */}
			<ToggleControl
				label={__( 'Flip', 'advanced-columns-block' )}
				checked={flip}
				onChange={() => setAttributes( {[flipKey]: !flip} )}
			/>
			{/* 前面へ移動 */}
			<ToggleControl
				label={__( 'Bring To Front', 'advanced-columns-block' )}
				checked={contentAboveShape}
				onChange={() => setAttributes( {[contentAboveShapeKey]: !contentAboveShape} )}
			/>
		</Fragment>
	);
};

/**
 * 仕切り
 */
import {
	PanelBody,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import {__} from '@wordpress/i18n';

import Options from './options';

export default ( {
	setAttributes,
	topType,
	topColor,
	topDividerOpacity,
	topWidth,
	topHeightMobile,
	topHeight,
	topFlip,
	topContentAboveShape,
	bottomType,
	bottomColor,
	bottomDividerOpacity,
	bottomWidth,
	bottomHeightMobile,
	bottomHeight,
	bottomFlip,
	bottomContentAboveShape,
} ) => {
	const params = {
		top: {
			type: {key: 'topType', val: topType},
			color: {key: 'topColor', val: topColor},
			opacity: {key: 'topDividerOpacity', val: topDividerOpacity},
			width: {key: 'topWidth', val: topWidth},
			heightMobile: {key: 'topHeightMobile', val: topHeightMobile},
			height: {key: 'topHeight', val: topHeight},
			flip: {key: 'topFlip', val: topFlip},
			contentAboveShape: {key: 'topContentAboveShape', val: topContentAboveShape},
		},
		bottom: {
			type: {key: 'bottomType', val: bottomType},
			color: {key: 'bottomColor', val: bottomColor},
			opacity: {key: 'bottomDividerOpacity', val: bottomDividerOpacity},
			width: {key: 'bottomWidth', val: bottomWidth},
			heightMobile: {key: 'bottomHeightMobile', val: bottomHeightMobile},
			height: {key: 'bottomHeight', val: bottomHeight},
			flip: {key: 'bottomFlip', val: bottomFlip},
			contentAboveShape: {key: 'bottomContentAboveShape', val: bottomContentAboveShape},
		},
	};

	return (
		<PanelBody title={__( 'Shape Dividers', 'advanced-columns-block' )} initialOpen={false}>
			<TabPanel
				className='acb-inspect-tabs acb-inspect-tabs-col-2'
				activeClass='active-tab'
				tabs={[
					{
						name: 'top',
						title: __( 'Top', 'advanced-columns-block' ),
						className: 'acb-top-tab',
					},
					{
						name: 'bottom',
						title: __( 'Bottom', 'advanced-columns-block' ),
						className: 'acb-bottom-tab',
					},
				]}
			>
				{tab => {
					const param = params[tab.name];

					return (
						<div>
							<SelectControl
								label={__( 'Type', 'advanced-columns-block' )}
								value={param.type.val}
								onChange={value => setAttributes( {[param.type.key]: value} )}
								options={[
									{value: 'none', label: __( 'None', 'advanced-columns-block' )},
									{value: 'tilt', label: __( 'Tilt', 'advanced-columns-block' )},
									{value: 'mountains', label: __( 'Mountains', 'advanced-columns-block' )},
									{value: 'wave_brush', label: __( 'Wave Brush', 'advanced-columns-block' )},
									{value: 'waves', label: __( 'Waves', 'advanced-columns-block' )},
									{value: 'triangle', label: __( 'Triangle', 'advanced-columns-block' )},
								]}
							/>
							<Options
								setAttributes={setAttributes}
								color={param.color.val}
								colorKey={param.color.key}
								opacity={param.opacity.val}
								opacityKey={param.opacity.key}
								width={param.width.val}
								widthKey={param.width.key}
								heightMobile={param.heightMobile.val}
								heightMobileKey={param.heightMobile.key}
								height={param.height.val}
								heightKey={param.height.key}
								flip={param.flip.val}
								flipKey={param.flip.key}
								contentAboveShape={param.contentAboveShape.val}
								contentAboveShapeKey={param.contentAboveShape.key}
								isShow={('none' !== param.type.val)}
							/>
						</div>
					);
				}}
			</TabPanel>
		</PanelBody>
	);
};

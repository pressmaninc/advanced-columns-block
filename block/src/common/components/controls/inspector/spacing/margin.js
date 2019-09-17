/**
 * 外側余白
 */
import {
	Button,
	ButtonGroup,
	Dashicon,
	RangeControl,
	TabPanel
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import Icons from '../../../../../icons';

export default ( {
	setAttributes,
	mobileMarginType,
	topMarginMobile,
	bottomMarginMobile,
	leftMarginMobile,
	rightMarginMobile,
	desktopMarginType,
	topMargin,
	bottomMargin,
	leftMargin,
	rightMargin,
} ) => {
	const
		params = {
			mobile: {
				title: __( 'Margin Mobile', 'advanced-columns-block' ),
				type: {key: 'mobileMarginType', val: mobileMarginType},
				top: {key: 'topMarginMobile', val: topMarginMobile},
				bottom: {key: 'bottomMarginMobile', val: bottomMarginMobile},
				left: {key: 'leftMarginMobile', val: leftMarginMobile},
				right: {key: 'rightMarginMobile', val: rightMarginMobile},
			},
			desktop: {
				title: __( 'Margin', 'advanced-columns-block' ),
				type: {key: 'desktopMarginType', val: desktopMarginType},
				top: {key: 'topMargin', val: topMargin},
				bottom: {key: 'bottomMargin', val: bottomMargin},
				left: {key: 'leftMargin', val: leftMargin},
				right: {key: 'rightMargin', val: rightMargin},
			}
		},
		max = type => ( ( '%' === type ) ? 100 : 2000 );

	return (
		<TabPanel
			className='acb-size-type-field-tabs acb-size-type-field__common-tabs acb-inline-margin'
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
				const param = params[tab.name];

				return (
					<div>
						<ButtonGroup className='acb-size-type-field' aria-label={__( 'Size Type', 'advanced-cloumns-block' )}>
							<Button
								key='px'
								className='acb-size-btn'
								isSmall
								isPrimary={'px' === param.type.val}
								aria-pressed={'px' === param.type.val}
								onClick={() => setAttributes( {[param.type.key]: 'px'} )}
							>
								px
							</Button>
							<Button
								key='%'
								className='acb-size-btn'
								isSmall
								isPrimary={'%' === param.type.val}
								aria-pressed={'%' === param.type.val}
								onClick={() => setAttributes( {[param.type.key]: '%'} )}
							>
								%
							</Button>
						</ButtonGroup>
						<h2>{param.title}</h2>
						<RangeControl
							label={Icons.top_margin}
							className='acb-margin-control'
							value={param.top.val}
							onChange={value => setAttributes( {[param.top.key]: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
							min={- ( max( param.type.val ) )}
							max={max( param.type.val )}
							initialPosition={0}
							allowReset
						/>
						<RangeControl
							label={Icons.bottom_margin}
							className='acb-margin-control'
							value={param.bottom.val}
							onChange={value => setAttributes( {[param.bottom.key]: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
							min={- ( max( param.type.val ) )}
							max={max( param.type.val )}
							initialPosition={0}
							allowReset
						/>
						{'undefined' !== typeof param.left.val && (
							<RangeControl
								label={Icons.left_margin}
								className='acb-margin-control'
								value={param.left.val}
								onChange={value => setAttributes( {[param.left.key]: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
								min={- ( max( param.type.val ) )}
								max={max( param.type.val )}
								initialPosition={0}
								allowReset
							/>
						)}
						{'undefined' !== typeof param.right.val && (
							<RangeControl
								label={Icons.right_margin}
								className='acb-margin-control'
								value={param.right.val}
								onChange={value => setAttributes( {[param.right.key]: ( ( 'undefined' !== typeof value ) ? value : 0 )} )}
								min={- ( max( param.type.val ) )}
								max={max( param.type.val )}
								initialPosition={0}
								allowReset
							/>
						)}
					</div>
				);
			}}
		</TabPanel>
	);
};

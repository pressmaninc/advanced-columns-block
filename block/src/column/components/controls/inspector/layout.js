/**
 * レイアウト
 */
import {__} from "@wordpress/i18n";
import {Dashicon, PanelBody, RangeControl, SelectControl, TabPanel} from "@wordpress/components";

export default ( {
	setAttributes,
	colWidthMobile,
	colWidth,
	alignMobile,
	align,
} ) => {
	const params = {
		mobile: {
			colWidth: {key: 'colWidthMobile', val: colWidthMobile},
			align: {key: 'alignMobile', val: alignMobile},

		},
		desktop: {
			colWidth: {key: 'colWidth', val: colWidth},
			align: {key: 'align', val: align},

		},
	};

	return (
		<PanelBody title={__( 'Layout', 'advanced-columns-block' )} initialOpen={false}>
			{/* コンテンツの幅 */}
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
					const param = params[tab.name];

					return (
						<div>
							<RangeControl
								label={__( 'Content Width (%)', 'advanced-columns-block' )}
								value={param.colWidth.val}
								onChange={value => setAttributes( {[param.colWidth.key]: value} )}
								min={0}
								max={100}
							/>
						</div>
					)
				}}
			</TabPanel>
			{/* コンテンツの配置 */}
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
					const param = params[tab.name];

					return (
						<div>
							<SelectControl
								label={__( 'Content Alignment', 'advanced-columns-block' )}
								value={param.align.val}
								onChange={value => setAttributes( {[param.align.key]: value} )}
								options={[
									{value: 'left', label: __( 'Left', 'advanced-columns-block' )},
									{value: 'center', label: __( 'Center', 'advanced-columns-block' )},
									{value: 'right', label: __( 'Right', 'advanced-columns-block' )},
								]}
							/>
						</div>
					)
				}}
			</TabPanel>
		</PanelBody>
	);
}
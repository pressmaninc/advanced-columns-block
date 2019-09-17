<?php


/**
 * Plugin Name: Advanced Columns Block
 * Description: This plugin is advanced columns that extracted from UAG
 * Version: 0.1
 * Author: pmyosuke
 */

class Advanced_Columns_Block {
	private static $instance;


	private function __construct() {
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_filter( 'block_categories', [ $this, 'add_block_category' ], 10, 2 );
		add_action( 'enqueue_block_assets', [ $this, 'set_translation' ] );

		include_once (__DIR__ . '/acb-helper.php');
		add_action( 'wp', [ Acb_Helper::getInstance(), 'generate_stylesheet' ], 10 );
		add_action( 'wp_head', [ Acb_Helper::getInstance(), 'print_stylesheet' ], 80 );
	}

	public static function getInstance(): Advanced_Columns_Block {
		return ( self::$instance === null ) ? ( self::$instance = new self() ) : self::$instance;
	}

	public function add_block_category( array $categories, WP_Post $post ): array {
		$categories[] = [
			'slug'  => 'advanced-columns-block',
			'title' => 'Advanced Columns Block'
		];

		return $categories;
	}

	public function register_blocks(): void {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

		wp_register_style(
			'advanced-columns-block',
			plugin_dir_url( __FILE__ ) . 'block/build/style.css'
		);

		wp_register_style(
			'advanced-columns-block-editor',
			plugin_dir_url( __FILE__ ) . 'block/build/editor.css'
		);

		wp_register_script(
			'advanced-columns-block-editor',
			plugin_dir_url( __FILE__ ) . 'block/build/index.js',
			[ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ]
		);

		register_block_type( 'advanced-columns-block/advanced-columns-block', [
			'style'         => 'advanced-columns-block',
			'editor_style'  => 'advanced-columns-block-editor',
			'editor_script' => 'advanced-columns-block-editor',
		] );
	}

	public function set_translation() {
		wp_set_script_translations( 'advanced-columns-block-editor', 'advanced-columns-block', __DIR__ . '/language' );
	}

	private function _get_columns_css( $attr, $id ) {
		global $content_width;

		$defaults = UAGB_Helper::$block_list['uagb/columns']['attributes'];

		$attr = array_merge( $defaults, $attr );

		$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

		$m_selectors = array();
		$t_selectors = array();

		$style = array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['topPadding'], $attr['desktopPaddingType'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPadding'], $attr['desktopPaddingType'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPadding'], $attr['desktopPaddingType'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPadding'], $attr['desktopPaddingType'] ),
			'margin-top'     => UAGB_Helper::get_css_value( $attr['topMargin'], $attr['desktopMarginType'] ),
			'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMargin'], $attr['desktopMarginType'] ),
			'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadius'], $attr['desktopMarginType'] ),
		);

		if ( "none" != $attr['borderStyle'] ) {
			$style["border-style"] = $attr['borderStyle'];
			$style["border-width"] = UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' );
			$style["border-color"] = $attr['borderColor'];
		}

		$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

		if ( 'image' === $bg_type ) {

			$style['background-image']      = ( isset( $attr['backgroundImage'] ) && isset( $attr['backgroundImage']['url'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
			$style['background-position']   = $position;
			$style['background-attachment'] = $attr['backgroundAttachment'];
			$style['background-repeat']     = $attr['backgroundRepeat'];
			$style['background-size']       = $attr['backgroundSize'];

		}

		$inner_width = '100%';

		if ( isset( $attr['contentWidth'] ) ) {
			if ( 'theme' == $attr['contentWidth'] ) {
				$inner_width = '#CONTENT_WIDTH#';
			} else if ( 'custom' == $attr['contentWidth'] ) {
				$inner_width = UAGB_Helper::get_css_value( $attr['width'], $attr['widthType'] );
			}
		}

		$selectors = array(
			'.uagb-columns__wrap'                                    => $style,
			' .uagb-columns__video-wrap'                             => array(
				'opacity' => ( isset( $attr['backgroundVideoOpacity'] ) && '' != $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : 0.5,
			),
			' > .uagb-columns__inner-wrap'                           => array(
				'max-width' => $inner_width,
			),
			' .uagb-column__inner-wrap'                              => array(
				'padding' => UAGB_Helper::get_css_value( $attr['columnGap'], 'px' )
			),
			' .uagb-columns__shape-top svg'                          => array(
				'height' => UAGB_Helper::get_css_value( $attr['topHeight'], 'px' )
			),
			' .uagb-columns__shape-top .uagb-columns__shape-fill'    => array(
				'fill'    => $attr['topColor'],
				'opacity' => ( isset( $attr['topDividerOpacity'] ) && '' != $attr['topDividerOpacity'] ) ? ( ( $attr['topDividerOpacity'] ) / 100 ) : ""
			),
			' .uagb-columns__shape-bottom svg'                       => array(
				'height' => UAGB_Helper::get_css_value( $attr['bottomHeight'], 'px' )
			),
			' .uagb-columns__shape-bottom .uagb-columns__shape-fill' => array(
				'fill'    => $attr['bottomColor'],
				'opacity' => ( isset( $attr['bottomDividerOpacity'] ) && '' != $attr['bottomDividerOpacity'] ) ? ( ( $attr['bottomDividerOpacity'] ) / 100 ) : ""
			),
		);

		if ( '' !== $attr['topWidth'] ) {
			$selectors[' .uagb-columns__shape-top svg']['width'] = "calc( " . $attr['topWidth'] . "% + 1.3px )";
		}

		if ( '' !== $attr['bottomWidth'] ) {
			$selectors[' .uagb-columns__shape-bottom svg']['width'] = "calc( " . $attr['bottomWidth'] . "% + 1.3px )";
		}

		if ( 'video' == $bg_type ) {
			$selectors[' > .uagb-columns__overlay'] = array(
				'opacity'          => 1,
				'background-color' => $attr['backgroundVideoColor'],
			);
		} else if ( 'image' == $bg_type ) {
			$selectors[' > .uagb-columns__overlay'] = array(
				'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
				'background-color' => $attr['backgroundImageColor'],
			);
		} else if ( 'color' == $bg_type ) {
			$selectors[' > .uagb-columns__overlay'] = array(
				'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
				'background-color' => $attr['backgroundColor'],
			);
		} elseif ( 'gradient' === $bg_type ) {
			$selectors[' > .uagb-columns__overlay']['background-color'] = 'transparent';
			$selectors[' > .uagb-columns__overlay']['opacity']          = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

			if ( 'linear' === $attr['gradientType'] ) {

				$selectors[' > .uagb-columns__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			} else {

				$selectors[' > .uagb-columns__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			}
		}

		$selectors[' > .uagb-columns__overlay']["border-radius"] = UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' );

		$m_selectors = array(
			'.uagb-columns__wrap'              => array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingType'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginType'] ),
			),
			' .uagb-columns__shape-bottom svg' => array(
				'height' => UAGB_Helper::get_css_value( $attr['bottomHeightMobile'], 'px' )
			),
			' .uagb-columns__shape-top svg'    => array(
				'height' => UAGB_Helper::get_css_value( $attr['topHeightMobile'], 'px' )
			),
		);

		$t_selectors = array(
			'.uagb-columns__wrap'              => array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingType'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingType'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['tabletPaddingType'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingType'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginType'] ),
			),
			' .uagb-columns__shape-bottom svg' => array(
				'height' => UAGB_Helper::get_css_value( $attr['bottomHeightTablet'], 'px' )
			),
			' .uagb-columns__shape-top svg'    => array(
				'height' => UAGB_Helper::get_css_value( $attr['topHeightTablet'], 'px' )
			),
		);

// @codingStandardsIgnoreEnd

		$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-columns-' . $id );

		$tablet = UAGB_Helper::generate_css( $t_selectors, '#uagb-columns-' . $id );

		$mobile = UAGB_Helper::generate_css( $m_selectors, '#uagb-columns-' . $id );

		$generated_css = array(
			'desktop' => $desktop,
			'tablet'  => $tablet,
			'mobile'  => $mobile,
		);

		return $generated_css;
	}





}

Advanced_Columns_Block::getInstance();

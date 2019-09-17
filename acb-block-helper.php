<?php

class Acb_Block_Helper {
	private static function generate_css( $selectors, $id ) {
		$styling_css = '';

		if ( empty( $selectors ) ) {
			return '';
		}

		foreach ( $selectors as $key => $value ) {

			$css = '';

			foreach ( $value as $j => $val ) {

				if ( ! empty( $val ) || 0 === $val ) {
					$css .= $j . ': ' . $val . ';';
				}
			}

			if ( ! empty( $css ) ) {
				$styling_css .= $id;
				$styling_css .= $key . '{';
				$styling_css .= $css . '}';
			}
		}

		return $styling_css;
	}

	private static function get_css_value( $value = '', $unit = '' ) {
		if ( '' == $value ) {
			return $value;
		}

		$css_val = '';

		if ( ! empty( $value ) ) {
			$css_val = esc_attr( $value ) . $unit;
		}

		return $css_val;
	}

	public static function get_columns_css( $attr, $id ) {
		$defaults = [
			'block_id'               => '',
			'columns'                => '2',
			'align'                  => 'center',
			'vAlign'                 => 'top',
			'stack'                  => 'mobile',
			'topPadding'             => '0',
			'bottomPadding'          => '0',
			'leftPadding'            => '0',
			'rightPadding'           => '0',
			'topMargin'              => '0',
			'bottomMargin'           => '0',
			'topPaddingMobile'       => '0',
			'bottomPaddingMobile'    => '0',
			'leftPaddingMobile'      => '0',
			'rightPaddingMobile'     => '0',
			'topMarginMobile'        => '0',
			'bottomMarginMobile'     => '0',
			'contentWidth'           => 'theme',
			'width'                  => '900',
			'widthType'              => 'px',
			'backgroundType'         => 'none',
			'backgroundImage'        => '',
			'backgroundPosition'     => 'center-center',
			'backgroundSize'         => 'cover',
			'backgroundRepeat'       => 'no-repeat',
			'backgroundAttachment'   => 'scroll',
			'backgroundVideo'        => '',
			'backgroundColor'        => '',
			'gradientColor1'         => '',
			'gradientColor2'         => '',
			'gradientType'           => 'linear',
			'gradientLocation1'      => '0',
			'gradientLocation2'      => '100',
			'gradientAngle'          => '0',
			'gradientPosition'       => 'center center',
			'backgroundOpacity'      => '100',
			'backgroundVideoOpacity' => '50',
			'backgroundVideoColor'   => '',
			'backgroundImageColor'   => '',
			'borderStyle'            => 'none',
			'borderWidth'            => '1',
			'borderRadius'           => '0',
			'borderColor'            => '',
			'columnGap'              => '10',
			'bottomType'             => 'none',
			'bottomColor'            => '',
			'bottomHeight'           => '50',
			'bottomHeightMobile'     => '50',
			'bottomWidth'            => '100',
			'topType'                => 'none',
			'topColor'               => '',
			'topHeight'              => '50',
			'topHeightMobile'        => '50',
			'topWidth'               => '100',
			'bottomFlip'             => 'false',
			'topFlip'                => 'false',
			'mobileMarginType'       => 'px',
			'desktopMarginType'      => 'px',
			'mobilePaddingType'      => 'px',
			'desktopPaddingType'     => 'px',
		];

		$attr = array_merge( $defaults, $attr );

		$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';
		$style   = [
			'padding-top'    => self::get_css_value( $attr['topPadding'], $attr['desktopPaddingType'] ),
			'padding-bottom' => self::get_css_value( $attr['bottomPadding'], $attr['desktopPaddingType'] ),
			'padding-left'   => self::get_css_value( $attr['leftPadding'], $attr['desktopPaddingType'] ),
			'padding-right'  => self::get_css_value( $attr['rightPadding'], $attr['desktopPaddingType'] ),
			'margin-top'     => self::get_css_value( $attr['topMargin'], $attr['desktopMarginType'] ),
			'margin-bottom'  => self::get_css_value( $attr['bottomMargin'], $attr['desktopMarginType'] ),
			'border-radius'  => self::get_css_value( $attr['borderRadius'], $attr['desktopMarginType'] ),
		];

		if ( 'none' !== $attr['borderStyle'] ) {
			$style['border-style'] = $attr['borderStyle'];
			$style['border-width'] = self::get_css_value( $attr['borderWidth'], 'px' );
			$style['border-color'] = $attr['borderColor'];
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
				$inner_width = self::get_css_value( $attr['width'], $attr['widthType'] );
			}
		}

		$selectors = [
			'.acb-columns__wrap'                                   => $style,
			' .acb-columns__video-wrap'                            => [
				'opacity' => ( isset( $attr['backgroundVideoOpacity'] ) && '' != $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : 0.5,
			],
			' > .acb-columns__inner-wrap'                          => [
				'max-width' => $inner_width,
			],
			' .acb-column__inner-wrap'                             => [
				'padding' => self::get_css_value( $attr['columnGap'], 'px' )
			],
			' .acb-columns__shape-top svg'                         => [
				'height' => self::get_css_value( $attr['topHeight'], 'px' )
			],
			' .acb-columns__shape-top .acb-columns__shape-fill'    => [
				'fill'    => $attr['topColor'],
				'opacity' => ( isset( $attr['topDividerOpacity'] ) && '' != $attr['topDividerOpacity'] ) ? ( ( $attr['topDividerOpacity'] ) / 100 ) : ""
			],
			' .acb-columns__shape-bottom svg'                      => [
				'height' => self::get_css_value( $attr['bottomHeight'], 'px' )
			],
			' .acb-columns__shape-bottom .acb-columns__shape-fill' => [
				'fill'    => $attr['bottomColor'],
				'opacity' => ( isset( $attr['bottomDividerOpacity'] ) && '' != $attr['bottomDividerOpacity'] ) ? ( ( $attr['bottomDividerOpacity'] ) / 100 ) : ""
			],
		];

		if ( '' !== $attr['topWidth'] ) {
			$selectors[' .acb-columns__shape-top svg']['width'] = "calc( {$attr['topWidth']}% + 1.3px )";
		}

		if ( '' !== $attr['bottomWidth'] ) {
			$selectors[' .acb-columns__shape-bottom svg']['width'] = "calc( {$attr['bottomWidth']}% + 1.3px )";
		}

		if ( 'video' == $bg_type ) {
			$selectors[' > .acb-columns__overlay'] = [
				'opacity'          => 1,
				'background-color' => $attr['backgroundVideoColor'],
			];
		} else if ( 'image' == $bg_type ) {
			$selectors[' > .acb-columns__overlay'] = [
				'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
				'background-color' => $attr['backgroundImageColor'],
			];
		} else if ( 'color' == $bg_type ) {
			$selectors[' > .acb-columns__overlay'] = [
				'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
				'background-color' => $attr['backgroundColor'],
			];
		} elseif ( 'gradient' === $bg_type ) {
			$selectors[' > .acb-columns__overlay']['background-color'] = 'transparent';
			$selectors[' > .acb-columns__overlay']['opacity']          = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

			if ( 'linear' === $attr['gradientType'] ) {

				$selectors[' > .acb-columns__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			} else {

				$selectors[' > .acb-columns__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			}
		}

		$selectors[' > .acb-columns__overlay']["border-radius"] = self::get_css_value( $attr['borderRadius'], 'px' );
		$m_selectors                                            = [
			'.acb-columns__wrap'              => [
				'padding-top'    => self::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-bottom' => self::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-left'   => self::get_css_value( $attr['leftPaddingMobile'], $attr['mobilePaddingType'] ),
				'padding-right'  => self::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingType'] ),
				'margin-top'     => self::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginType'] ),
				'margin-bottom'  => self::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginType'] ),
			],
			' .acb-columns__shape-bottom svg' => [
				'height' => self::get_css_value( $attr['bottomHeightMobile'], 'px' )
			],
			' .acb-columns__shape-top svg'    => [
				'height' => self::get_css_value( $attr['topHeightMobile'], 'px' )
			],
		];

		$desktop = self::generate_css( $selectors, '#acb-columns-' . $id );
		$mobile  = self::generate_css( $m_selectors, '#acb-columns-' . $id );

		$generated_css = [
			'desktop' => $desktop,
			'mobile'  => $mobile,
		];

		return $generated_css;
	}

	public static function get_column_css( $attr, $id ) {
		global $content_width;

		$defaults = [
			'block_id'                 => '',
			'topPadding'               => '0',
			'bottomPadding'            => '0',
			'leftPadding'              => '0',
			'rightPadding'             => '0',
			'topMargin'                => '0',
			'bottomMargin'             => '0',
			'leftMargin'               => '0',
			'rightMargin'              => '0',
			'topPaddingMobile'         => '0',
			'bottomPaddingMobile'      => '0',
			'leftPaddingMobile'        => '0',
			'rightPaddingMobile'       => '0',
			'topMarginMobile'          => '0',
			'bottomMarginMobile'       => '0',
			'leftMarginMobile'         => '0',
			'rightMarginMobile'        => '0',
			'colWidth'                 => '0',
			'colWidthMobile'           => '0',
			'backgroundType'           => 'none',
			'backgroundImage'          => '',
			'backgroundPosition'       => 'center-center',
			'backgroundSize'           => 'cover',
			'backgroundRepeat'         => 'no-repeat',
			'backgroundAttachment'     => 'scroll',
			'backgroundColor'          => '',
			'gradientColor1'           => '',
			'gradientColor2'           => '',
			'gradientType'             => 'linear',
			'gradientLocation1'        => 0,
			'gradientLocation2'        => 100,
			'gradientAngle'            => 0,
			'backgroundOpacity'        => '100',
			'backgroundImageColor'     => '',
			'borderStyle'              => 'none',
			'borderWidth'              => 1,
			'borderRadius'             => '0',
			'borderColor'              => '',
			'align'                    => 'left',
			'alignMobile'              => 'left',
			'mobileMarginType'         => 'px',
			'desktopMarginType'        => 'px',
			'mobilePaddingType'        => 'px',
			'desktopPaddingType'       => 'px',
			'overlayType'              => 'color',
			'gradientOverlayColor1'    => '',
			'gradientOverlayColor2'    => '',
			'gradientOverlayType'      => 'linear',
			'gradientOverlayLocation1' => '0',
			'gradientOverlayLocation2' => '100',
			'gradientOverlayAngle'     => '0',
		];

		$attr = array_merge( $defaults, $attr );

		$bg_type      = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';
		$overlay_type = ( isset( $attr['overlayType'] ) ) ? $attr['overlayType'] : 'none';

		$style = [
			'padding-top'    => self::get_css_value( $attr['topPadding'], $attr['desktopPaddingType'] ),
			'padding-bottom' => self::get_css_value( $attr['bottomPadding'], $attr['desktopPaddingType'] ),
			'padding-left'   => self::get_css_value( $attr['leftPadding'], $attr['desktopPaddingType'] ),
			'padding-right'  => self::get_css_value( $attr['rightPadding'], $attr['desktopPaddingType'] ),
			'margin-top'     => self::get_css_value( $attr['topMargin'], $attr['desktopMarginType'] ),
			'margin-bottom'  => self::get_css_value( $attr['bottomMargin'], $attr['desktopMarginType'] ),
			'margin-left'    => self::get_css_value( $attr['leftMargin'], $attr['desktopMarginType'] ),
			'margin-right'   => self::get_css_value( $attr['rightMargin'], $attr['desktopMarginType'] ),
			'border-radius'  => self::get_css_value( $attr['borderRadius'], 'px' ),
		];

		$m_selectors = [];

		if ( 'none' != $attr['borderStyle'] ) {
			$style["border-style"] = $attr['borderStyle'];
			$style["border-width"] = self::get_css_value( $attr['borderWidth'], 'px' );
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

		$selectors = [
			'.acb-column__wrap' => $style
		];

		if ( 'image' == $bg_type ) {
			if ( 'color' == $overlay_type ) {
				$selectors[' > .acb-column__overlay'] = [
					'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
					'background-color' => $attr['backgroundImageColor'],
				];
			} else {
				$selectors[' > .acb-column__overlay']['background-color'] = 'transparent';
				$selectors[' > .acb-column__overlay']['opacity']          = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

				if ( 'linear' === $attr['gradientOverlayType'] ) {
					$selectors[' > .acb-column__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientOverlayAngle'] . 'deg, ' . $attr['gradientOverlayColor1'] . ' ' . $attr['gradientOverlayLocation1'] . '%, ' . $attr['gradientOverlayColor2'] . ' ' . $attr['gradientOverlayLocation2'] . '%)';
				} else {
					$selectors[' > .acb-column__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientOverlayColor1'] . ' ' . $attr['gradientOverlayLocation1'] . '%, ' . $attr['gradientOverlayColor2'] . ' ' . $attr['gradientOverlayLocation2'] . '%)';
				}
			}

		} else if ( 'color' == $bg_type ) {
			$selectors[' > .acb-column__overlay'] = [
				'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
				'background-color' => $attr['backgroundColor'],
			];
		} elseif ( 'gradient' === $bg_type ) {
			$selectors[' > .acb-column__overlay']['background-color'] = 'transparent';
			$selectors[' > .acb-column__overlay']['opacity']          = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

			if ( 'linear' === $attr['gradientType'] ) {

				$selectors[' > .acb-column__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			} else {

				$selectors[' > .acb-column__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
			}
		}

		if ( '' != $attr['colWidth'] && 0 != $attr['colWidth'] ) {

			$selectors[''] = [
				"width" => self::get_css_value( $attr['colWidth'], "%" )
			];
		}

		$m_selectors = [
			'.acb-column__wrap' => [
				'padding-top'    => self::get_css_value( $attr['topPaddingMobile'], $attr['tabletPaddingType'] ),
				'padding-bottom' => self::get_css_value( $attr['bottomPaddingMobile'], $attr['tabletPaddingType'] ),
				'padding-left'   => self::get_css_value( $attr['leftPaddingMobile'], $attr['tabletPaddingType'] ),
				'padding-right'  => self::get_css_value( $attr['rightPaddingMobile'], $attr['tabletPaddingType'] ),
				'margin-top'     => self::get_css_value( $attr['topMarginMobile'], $attr['tabletMarginType'] ),
				'margin-bottom'  => self::get_css_value( $attr['bottomMarginMobile'], $attr['tabletMarginType'] ),
				'margin-left'    => self::get_css_value( $attr['leftMarginMobile'], $attr['tabletMarginType'] ),
				'margin-right'   => self::get_css_value( $attr['rightMarginMobile'], $attr['tabletMarginType'] ),
			]
		];

		if ( '' != $attr['colWidthTablet'] && 0 != $attr['colWidthTablet'] ) {
			$t_selectors[''] = [
				"width" => self::get_css_value( $attr['colWidthTablet'], '%' )
			];
		}

		if ( '' != $attr['colWidthMobile'] && 0 != $attr['colWidthMobile'] ) {
			$m_selectors[''] = [
				"width" => self::get_css_value( $attr['colWidthMobile'], '%' )
			];
		}

		$desktop = UAGB_Helper::generate_css( $selectors, '#acb-column-' . $id );
		$mobile = UAGB_Helper::generate_css( $m_selectors, '#acb-column-' . $id );

		$generated_css = [
			'desktop' => $desktop,
			'mobile'  => $mobile,
		];

		return $generated_css;
	}
}
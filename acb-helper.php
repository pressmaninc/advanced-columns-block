<?php

include_once( __DIR__ . '/acb-block-helper.php' );

class Acb_Helper {
	private static $instance;
	private static $page_blocks;
	private static $stylesheet;
	private static $current_block_list = [];
	private static $acb_flag = false;

	public static function getInstance(): Acb_Helper {
		return ( self::$instance === null ) ? ( self::$instance = new self() ) : self::$instance;
	}

	private function _get_block_css( $block ) {
		$block = ( array ) $block;

		$name = $block['blockName'];
		$css  = array();

		if ( ! isset( $name ) ) {
			return '';
		}

		if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
			$blockattr = $block['attrs'];

			if ( isset( $blockattr['block_id'] ) ) {
				$block_id = $blockattr['block_id'];
			}
		}

		self::$current_block_list[] = $name;

		if ( strpos( $name, 'advanced-columns-block/' ) !== false ) {
			self::$acb_flag = true;
		}

		switch ( $name ) {
			case 'advanced-columns-block/columns':
				$css += Acb_Block_Helper::get_columns_css( $blockattr, $block_id );
				break;

			case 'advanced-columns-block/column':
				$css += Acb_Block_Helper::get_column_css( $blockattr, $block_id );
				break;


			default:
				// Nothing to do here.
				break;
		}

		if ( isset( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as $j => $inner_block ) {
				if ( 'core/block' == $inner_block['blockName'] ) {
					$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse( $content );

						self::$stylesheet .= $this->get_stylesheet( $reusable_blocks );
					}
				} else {
					// Get CSS for the Block.
					$inner_block_css = $this->_get_block_css( $inner_block );

					$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
					$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
					$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

					if ( isset( $inner_block_css['desktop'] ) ) {
						$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
						$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
						$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
					}
				}
			}
		}

		self::$current_block_list = array_unique( self::$current_block_list );

		return $css;
	}

	private function _get_stylesheet( $blocks ) {
		$desktop = '';
		$mobile  = '';

		$mob_styling_css = '';

		foreach ( $blocks as $i => $block ) {
			if ( ! is_array( $block ) || '' === $block['blockName'] ) {
				continue;
			}

			if ( 'core/block' === $block['blockName'] ) {
				$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

				if ( $id ) {
					$content          = get_post_field( 'post_content', $id );
					$reusable_block   = parse_blocks( $content );
					self::$stylesheet .= $this->_get_stylesheet( $reusable_block );
				}
			} else {
				$css = $this->_get_block_css( $block );

				if ( isset( $css['desktop'] ) ) {
					$desktop .= $css['desktop'];
					$mobile  .= $css['mobile'];
				}
			}
		}

		if ( ! empty( $mobile ) ) {
			$mob_styling_css .= "@media only screen and (max-width: 767px) {{$mobile}}";
		}

		return $desktop . $mob_styling_css;
	}

	private function _generate_stylesheet( $this_post ) {
		if ( ! $this_post instanceof WP_Post || ! isset( $this_post->ID ) || ! has_blocks( $this_post->ID ) || ! isset( $this_post->post_content ) ) {
			return;
		}

		self::$page_blocks = parse_blocks( $this_post->post_content );

		if ( ! is_array( self::$page_blocks ) || empty( self::$page_blocks ) ) {
			return;
		}

		self::$stylesheet .= $this->_get_stylesheet( self::$page_blocks );
	}

	public function generate_stylesheet(): void {
		if ( is_single() || is_page() || is_404() ) {
			global $post;

			if ( ! $post instanceof WP_Post ) {
				return;
			}

			$this->_generate_stylesheet( $post );
		} elseif ( is_archive() || is_home() || is_search() ) {
			global $wp_query;

			foreach ( $wp_query as $post ) {
				$this->_generate_stylesheet( $post );
			}
		}
	}

	public function print_stylesheet() {
		global $content_width;

		if ( is_null( self::$stylesheet ) || '' === self::$stylesheet ) {
			return;
		}

		self::$stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', self::$stylesheet );

		ob_start();
		?>
		<style type="text/css" media="all" id="acb-style-frontend"><?php echo self::$stylesheet; ?></style>
		<?php
		ob_end_flush();
	}
}

Acb_Helper::getInstance();
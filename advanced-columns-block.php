<?php

/**
 * Plugin Name: Advanced Columns Block
 * Description: This plugin is advanced columns that extracted from UAG
 * Version: 0.2.3
 * Author: pmyosuke
 */

class Advanced_Columns_Block {
	private static $instance;

	private function __construct() {
		add_action( 'init', [ $this, 'register_blocks' ] );
		add_filter( 'block_categories', [ $this, 'add_block_category' ], 10, 2 );
		add_action( 'enqueue_block_assets', [ $this, 'set_translation' ] );
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
}

Advanced_Columns_Block::getInstance();

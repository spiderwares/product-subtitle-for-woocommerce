<?php
/**
 * Class PSWC_Shop
 *
 * This class manages the display of product subtitles on the shop page.
 *
 * @package PSWC_Shop
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * PSWC_Shop
 */
class PSWC_Shop {



	/**
	 * Constructor
	 */
	public function __construct() {
		$this->event_handler(); // Call the event handler method.
	}

	/**
	 * Event handler for actions and filters
	 */
	public function event_handler() {
		$subtitle_action = get_option( 'pswc_shop_position', 'disable-0' ); // Get the shop subtitle action from options.
		$hook            = ! empty( $subtitle_action ) ? explode( '-', $subtitle_action ) : array();

		if ( is_array( $hook ) ) :
			$priority  = isset( $hook[1] ) ? $hook[1] : 10;
			$hookname  = isset( $hook[0] ) ? $hook[0] : 'disable';

			add_action( $hookname, array( $this, 'shop_product_subtitle' ), $priority, ); // Add action to display product subtitle on the shop page.
		endif;
	}

	/**
	 * Display product subtitle on the shop page
	 */
	public function shop_product_subtitle() {
		global $product;
		$subtitle_tag = get_option( 'pswc_shop_tag', 'strong' ); // Get the shop subtitle tag option.
		$product_id   = $product->get_id(); // Get the product ID.

		$subtitle = get_post_meta( $product_id, 'pswc_subtitle', true ); // Get the product subtitle.

		if ( ! empty( $subtitle ) ) : // Check if subtitle is not empty and if it's the shop page.
			echo wp_kses_post( 
				apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					'pswc_shop_page_product_subtitle_html',
					sprintf(
						'<%1$s class="product-subtitle product-subtitle-%2$d">%3$s</%1$s>',
						esc_html( $subtitle_tag ), // Ensure the subtitle tag is safe.
						esc_attr( $product_id ),
						wp_kses_post( $subtitle )  // Allow safe HTML in the subtitle.
					),
					$subtitle_tag,
					$subtitle,
					$product
				)
			);
		endif;		
	}
}

new PSWC_Shop(); // Instantiate the PSWC_Shop class.

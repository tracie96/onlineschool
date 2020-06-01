<?php
include(get_theme_file_path('inc/enqueue.php'));
add_action('wp_enqueue_scripts','vt_enqueue');
add_action('wp_enqueue_scripts','vt_script');


include(get_theme_file_path('inc/walker.php'));
include(get_theme_file_path('inc/widgets.php'));

function setup()
{
    register_nav_menu('primary',__('Primary Menu','primary'));
}
add_action('after_setup_theme','setup');
add_filter ("widget_text", "do_shortcode");
add_action('widgets_init','my_widgets');

?>
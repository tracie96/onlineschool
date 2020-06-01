<?php
function my_widgets()
{
    register_sidebar([
        'name' => __('My First Sidebar','tutorial'),
        'id' => 'tutorial',
        'description' => __('Sidebar for the theme tutorial', 'tutorial'),
        'before_widget' => '<div id="%1$s" class="widget clearfix %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
        ]);
     
}


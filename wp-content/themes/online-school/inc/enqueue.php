<?php

  function vt_enqueue()
{
    # code...
    $uri = get_theme_file_uri();

    wp_register_style('fontawesome', 'https://use.fontawesome.com/releases/v5.6.1/css/all.css');

    wp_register_style('cloudfare', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'); 

    wp_register_style('googlefont', 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');  

    wp_register_style('style', $uri.'/css/styles.css'); 
    // wp_register_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    wp_register_style('certainhair', $uri.'/css/certinhair.css'); 

    wp_enqueue_style('fontawesome');
    wp_enqueue_style('cloudfare');
    wp_enqueue_style('googlefont');
    wp_enqueue_style('style');
    wp_enqueue_style('certainhair');

    // wp_enqueue_style('bootstrap');


}


function vt_script(){
    $uri = get_theme_file_uri();
  
     wp_register_script('script', $uri.'/js/script.js');  
     wp_register_script('script', $uri.'/js/script.js');  

    //  wp_register_script('bt_script', 'https://code.jquery.com/jquery-3.3.1.slim.min.js');  

    //  wp_register_script('bt_script', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js');  


    //  wp_register_script('bt_jjscript', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');  


     wp_enqueue_script('jquery');

    wp_enqueue_script('script');


    // wp_enqueue_script('bt_script');
    // wp_enqueue_script('bt_script');
    // wp_enqueue_script('bt_jjscript');





}
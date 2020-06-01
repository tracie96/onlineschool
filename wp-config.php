<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'onlineschool' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'upJesus1996' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:8888' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'O&3S?,Y0eVU.Nxhi}jSi|C3TMB72WK,>5Ltv9)FEx&urw3&)!Ge(mX@p_e!)zM-[' );
define( 'SECURE_AUTH_KEY',  'x|bdfg* la(tJ].^QM}R%%pgVG41bntHZ<yj%rFo2qc:gurUl=ht90CzInL*Mn`|' );
define( 'LOGGED_IN_KEY',    'xuav~0|(VB~rlPI^n%-=!|d6gp_`y%-A X`mJ/9<:vU_aNQov[lldZb2>Xk{cnjp' );
define( 'NONCE_KEY',        '4PvWuiL+MpD<%Z4y+!E7%&|o{jL-x0XMs5b+pw|<4-_aN7rt-{6.c$;C~0xe(&ai' );
define( 'AUTH_SALT',        '@T>2`/o3N<=;%x~Ko+) /haPj-AicdesrjMEt>cQcp7M74M%BL;2ON>uM*gm-w;p' );
define( 'SECURE_AUTH_SALT', '&9ss?qHnMjd4_`_mMD<@O.;zA3K8}z<WR$>iGk.sC_F2MVXd/[u`BR|J8FE#E}&D' );
define( 'LOGGED_IN_SALT',   '1O+&%~0&<nOPXvB*-8BaU$bBn^<.*lsH{22^oBH6_r$PDR#Zj6YwJL+|+/~.fq@}' );
define( 'NONCE_SALT',       'rW!ij$.~(CfqOu)^|C,LiJ9F,pOOmyAoft&;9+,R]4up-.*~?_h}+-aR?:eNSBo[' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

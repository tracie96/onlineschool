<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Online School</title>
    <?php wp_head()?>
   </head>
  <body>
    <main>
      <header>
        <div class="top-header">
          <div class="contact-info">
            <span>+234 812 844 8323</span>
            <span class="top-address">
              1a, Harvey Road, off Herbert Macaulay Way, Behind Domino's Pizza,
              Yaba, Lagos, Nigeria.</span
            >
          </div>

          <div>
            <ul class="social-icons">
              <li class="icons">
                <a href="http://instagram.com"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="icons">
                <a href="http://twitter.com"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="icons">
                <a href="http://facebook.com"
                  ><i class="fab fa-facebook"></i
                ></a>
              </li>
              <li class="icons">
                <a href="#"><i class="far fa-user"></i> Login</a>
              </li>
              <li class="icons"><a href="#">Register</a></li>
            </ul>
          </div>
        </div>

        <div class="main-header">
          <nav class="mobile-web-nav">
            <div class="logoandtoggle">
              <div class="logo">
                <img src="<?php echo get_template_directory_uri();?>/img/logo-1-1.png" />
              </div>
              <!---desktop menu-->
              <div class="desktopmenu">
                <ul>
                  <li class="active"><a href="index.html">home</a></li>
                  <li>
                    <a href="course.html">courses</a>
                    <div class="dropdownmenu1">
                      <ul>
                        <li>
                          <a href="certinskin.html"
                            >Certificate in formulating organic..</a
                          >
                        </li>
                        <li>
                          <a href="certinhair.html">
                            Certificate organic hair care pro..</a
                          >
                        </li>
                        <li>
                          <a href="beginner.html"
                            >Beginners soap making course</a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="about.html">about us</a></li>
                  <li><a href="contact.html">contact us</a></li>
                  <li>
                    <a href="#"><span>Enroll Now</span></a>
                  </li>
                </ul>
              </div>

              <!---hambuger toggle button-->
              <button class="toggle-button">
                <span class="toggle-button__line"></span>
                <span class="toggle-button__line"></span>
                <span class="toggle-button__line"></span>
              </button>
            </div>

            <!---mobile show on mini screens-->
            <div class="mobilemenu">
              <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="course.html">Courses</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="about.html">about us</a></li>
                <li><a href="contact.html">contact us</a></li>
                <li>
                  <a href="#"><span>Enroll Now</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="main-banner">
          <img src="<?php echo get_template_directory_uri();?>/img/aw-creative-K-Y0CMiZFoQ-unsplash.jpg" />
          <div class="headeroverlay">
            <div class="header-overlay-text">
              <h1>STUDY WITH US</h1>
              <p>
                Learn how to create high perfoermance skincare products that
                work effectively and become your own Boss
              </p>
              <a href="#">View Our Courses</a>
            </div>
          </div>
        </div>
      </header>
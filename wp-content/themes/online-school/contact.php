<?php /* Template Name: contact */ ?>

<?php get_header();?>
      
        <div class="page-content res-pad">
          <div class="about-content">
            <h2>Contact Info!</h2>
            <div class="center-content">
              <p>
                LOCATION: 1a, Harvey Road, off Herbert Macaulay Way, Behind Domino’s Pizza, Yaba, Lagos, Nigeria.
              </p>
              <p>
                PHONE: 08188193688
                EMAIL: info@skinessenceschool.com
              </p>
              <p>
               instagram, facebook, twitter
              </p>
            </div>
          </div>
          <div class="contact-form">
            <form class="form">
              <h2>Send us a message!</h2>
              <div class="form-row">
                <div class="form-group">
                  <input type="text" placeholder="your name" />
                </div>
                <div class="form-group">
                  <input type="text" placeholder="your email" />
                </div>
              </div>
              <div class="form-group">
                <textarea placeholder="your message"></textarea>
              </div>
              <button class="btn">Submit</button>
            </form>
          </div>
      </div>
      <hr />



      <?php get_template_part('section','enroll');?>



    <div class="store">
      <div class="storeoverlay">
        <div class="text res-pad">
          <h1>SHOP ON MAYA ORGANICS STORE</h1>
          <p>Purchase organic products from different categories such as Skincare, Hair Care, Soap, Fitness and Female Healthcare formulated by Maya Organics</p>
          <a href="#">Start shopping</a>
        </div>
      </div>
    </div>
  </main>
  <?php get_footer();?>
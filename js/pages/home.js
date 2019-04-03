var Home = {
  template: `
    <div>
      <div id="wrap"  class="header-intro text-dark py-5" style="background:#fff">
        <div class="container text-center">
          <div class="profile-teaser media flex-column flex-md-row">
          <!-- <img class="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="assets/images/profile.jpg" alt=""> -->
        <div class="media-body text-center">
        <div class="lead mb-4">Hello, my name is</div>
        <h2 class="mt-0 display-4 font-weight-bold">Baker Hasan</h2>
        <div class="bio mb-4 mt-4">
        I’m an independent web & Web Developer.
        Several years of experience in wide range of Web Development area.
        Have a look through some of my projects and blog posts. Learn a bit
        more about me and then consider hiring me.
        </div><!--//bio-->
        <router-link class="theme-btn-on-bg btn font-weight-bold theme-btn-cta" to="/contact">Hire Me</router-link>
        </div><!--//media-body-->
      </div><!--//profile-teaser-->

        </div><!--//container-->
      </div><!--//header-intro-->


      <section class="skills-section section py-5">
          <div class="container">
            <h3 class="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
            <div class="section-intro mx-auto text-center mb-5 text-secondary">I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <a href="resume.html">Check out my online resume</a>.</div>

            <div class="skills-blocks mx-auto pt-5">
              <div class="row">
                <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                  <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 class="skills-cat text-center mb-3 mt-5">Frontend</h4>
                    <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                        <img class="skills-icon" src="assets/images/frontend-icon.svg">
                    </div>
                    <ul class="skills-list list-unstyled text-secondary">
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Javascript</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Node.js</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Vuejs</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>HTML/CSS/SASS/LESS</li>
                    </ul>
                  </div><!--//skills-block-inner-->
                </div><!--//skills-block-->

                <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
                  <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 class="skills-cat text-center mb-3 mt-5">Backend</h4>
                    <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                        <img class="skills-icon" src="assets/images/backend-icon.svg">
                    </div>
                    <ul class="skills-list list-unstyled text-secondary">
                    <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>PHP/Laravel</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Python/Django</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>PostgresSQL/MySQL</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>MongoDB</li>
                    </ul>
                  </div><!--//skills-block-inner-->
                </div><!--//skills-block-->

                <div class="skills-block col-12 col-lg-4">
                  <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                    <h4 class="skills-cat text-center mb-3 mt-5">Others</h4>
                    <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                        <img class="skills-icon" src="assets/images/other-skills-icon.svg">
                    </div>
                    <ul class="skills-list list-unstyled text-secondary">
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>DevOps</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Unit Testing</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>UX/Wireframing</li>
                      <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Linux/Server</li>
                    </ul>
                  </div><!--//skills-block-inner-->
                </div><!--//skills-block-->

              </div><!--//row-->
            </div>
          </div><!--//container-->
      </section><!--//skills-section-->




      <section class="section-featured-projects py-5">
          <div class="container">
            <h3 class="section-title font-weight-bold text-center mb-5">Featured Projects</h3>

            <div class="project-cards row mb-5">
              <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img class="card-img-top rounded-0" src="assets/images/projects/project-1-thumb.jpg" alt="">
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo"><img class="img-fluid w-50" src="assets/images/logos/logo-1-inverse.svg"></div>
                </div>
                <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Google</h5>
                    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0"><a href="project.html">SaaS Product</a></h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Angular</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >Django</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MongoDB</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">HTML/CSS</span></li>
                </ul>
                </div>
              </div><!--//card-->
              </div>
              <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img class="card-img-top rounded-0" src="assets/images/projects/project-2-thumb.jpg" alt="">
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo"><img class="img-fluid w-50" src="assets/images/logos/logo-2-inverse.svg"></div>
                </div>
                <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Basecamp</h5>
                    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Webapp Development</a></h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >Rails</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">jQuery</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">PostgresSQL</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">HTML/LESS</span></li>
                </ul>
                </div>
              </div><!--//card-->
              </div>
              <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img class="card-img-top rounded-0" src="assets/images/projects/project-3-thumb.jpg" alt="">
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo"><img class="img-fluid w-50" src="assets/images/logos/logo-3-inverse.svg"></div>
                </div>
                <a class="card-img-overlay overlay-content text-left p-lg-4" href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Airbnb</h5>
                    <p class="card-text">Project summary goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod...</p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0"><a href="project.html">Mobile app development</a></h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">React</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill" >Python</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">MySQL</span></li>
                      <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Webpack</span></li>
                </ul>
                </div>
              </div><!--//card-->
              </div>

            </div><!--//row-->
            <div class="text-center">
                <a class="btn btn-primary" href="projects.html">View all projects</a>
            </div>
          </div><!--///container-->

      </section>

      <section class="section-latest-blog py-5">
          <div class="container">
            <h3 class="section-title font-weight-bold text-center mb-5">Latest Blog Posts</h3>

            <div class="blog-cards row">
              <div class="col-12 col-lg-6">
                <div class="card rounded-0 border-0 shadow-sm mb-5">
              <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-1.jpg" alt="">
                    <div class="card-img-overlay overlay-mask overlay-logo text-center p-0">
                      <div class="overlay-mask-content text-center w-100 position-absolute">
                      <a class="btn btn-primary" href="blog-post.html">Read more</a>
                      </div>
                      <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
                </div>
              </div>
              <div class="card-body pb-4">

                <h4 class="card-title text-truncate mb-2"><a href="blog-post.html">How to Create an Angular Library</a></h4>
                <div class="card-text">
                  <ul class="meta list-inline mb-1">
                    <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 26, 2018</li>
                    <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">4 Comments</a></li>
                  </ul>
                  <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
                </div>
              </div>
              </div><!--//card-->
              </div>

              <div class="col-12 col-lg-6">
                <div class="card rounded-0 border-0 shadow-sm mb-5">
              <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-2.jpg" alt="">
                    <div class="card-img-overlay overlay-mask overlay-logo text-center p-0">
                      <div class="overlay-mask-content text-center w-100 position-absolute">
                      <a class="btn btn-primary" href="blog-post.html">Read more</a>
                      </div>
                      <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
                </div>
              </div>
              <div class="card-body pb-4">

                <h4 class="card-title text-truncate mb-2"><a href="blog-post.html">React, Bootstrap, and Angular- The Basics</a></h4>
                <div class="card-text">
                  <ul class="meta list-inline mb-1">
                    <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 18, 2018</li>
                    <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">8 Comments</a></li>
                  </ul>
                  <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
                </div>
              </div>
              </div><!--//card-->
              </div>


              <div class="col-12 col-lg-6">
                <div class="card rounded-0 border-0 shadow-sm mb-5">
              <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-3.jpg" alt="">
                    <div class="card-img-overlay overlay-mask overlay-logo text-center p-0">
                      <div class="overlay-mask-content text-center w-100 position-absolute">
                      <a class="btn btn-primary" href="blog-post.html">Read more</a>
                      </div>
                      <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
                </div>
              </div>
              <div class="card-body pb-4">

                <h4 class="card-title text-truncate mb-2"><a href="blog-post.html">Best Practices for Code Review</a></h4>
                <div class="card-text">
                  <ul class="meta list-inline mb-1">
                    <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>May 7, 2018</li>
                    <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">23 Comments</a></li>
                  </ul>
                  <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
                </div>
              </div>
              </div><!--//card-->
              </div>

              <div class="col-12 col-lg-6">
                <div class="card rounded-0 border-0 shadow-sm mb-5">
              <div class="card-img-container position-relative">
                    <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-4.jpg" alt="">
                    <div class="card-img-overlay overlay-mask overlay-logo text-center p-0">
                      <div class="overlay-mask-content text-center w-100 position-absolute">
                      <a class="btn btn-primary" href="blog-post.html">Read more</a>
                      </div>
                      <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
                </div>
              </div>
              <div class="card-body pb-4">

                <h4 class="card-title text-truncate mb-2"><a href="blog-post.html">Learn React Components</a></h4>
                <div class="card-text">
                  <ul class="meta list-inline mb-1">
                    <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Apr 25, 2018</li>
                    <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">18 Comments</a></li>
                  </ul>
                  <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
                </div>
              </div>
              </div><!--//card-->
              </div>


            </div><!--//blog-cards-->


          </div>

          <div class="text-center">
              <a class="btn btn-primary" href="blog.html">View all posts</a>
          </div>


      </section>


      <section class="section-cta py-5 bg-primary text-white">
        <div class="container">
          <div class="text-center">
              <img class="profile-small d-inline-block mx-auto rounded-circle mb-2" src="assets/images/profile.jpg" alt="">
            </div>
            <h3 class="section-title font-weight-bold text-center mb-2">Interested in hiring me for your project?</h3>
            <div class="section-intro mx-auto text-center mb-3">
              Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a class="link-on-bg text-success" href="#">steve.doe@youremail.com</a> or use the <a class="link-on-bg text-success" href="contact.html">form on the contact page</a>.
            </div>
            <div class="text-center">
                <a class="theme-btn-on-bg btn" href="contact.html">Let's Talk</a>
            </div>
        </div><!--//container-->
      </section>

    </div>
  `
}

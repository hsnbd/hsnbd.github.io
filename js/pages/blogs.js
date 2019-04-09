var Blogs = {
  template : `
    <div>
    <section class="section pt-5">
        <div class="container blog-cards">

          <div class="row">
            <div class="col-12">
              <div class="featured-card d-md-table card rounded-0 border-0 shadow-sm mb-5">
            <div class="featured-card-image card-img-container position-relative d-md-table-cell">
                <span class="badge badge-success mb-2 position-absolute">Featured</span>
                <div class="card-img-overlay overlay-mask text-center p-0">
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="featured-card-body card-body d-md-table-cell  pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">How to Create an Angular Library</a></h4>
              <div class="card-text">
                <div class="excerpt mb-3"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
                <a class="btn btn-primary d-none d-md-inline-block" href="blog-post.html">Read more</a>
              </div>
            </div>
            <div class="card-footer border-0 d-md-none">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 18, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">8 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-2.jpg" alt="">
                  <div class="card-img-overlay overlay-mask text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">React, Bootstrap, and Angular- The Basics</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>

            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>June 18, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">12 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-3.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">Best Practices for Code Review</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>May 7, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">23 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-4.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">Learn React Components</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Apr 25, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">18 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-5.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
        A Guide to Becoming a Full-Stack Developer</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Mar 15, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">21 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-6.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
Top 10 UX Tools for Developers</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Mar 7, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">12 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-7.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
The Future of Blockchain</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Feb 26, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">16 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-8.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
Coding Challenges</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Feb 21, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">7 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-9.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
How to become a digital nomad</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Feb 8, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">7 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-5">
              <div class="card rounded-0 border-0 shadow-sm eq-height">
            <div class="card-img-container position-relative">
                  <img class="card-img-top rounded-0" src="assets/images/blog/blog-post-thumb-10.jpg" alt="">
                  <div class="card-img-overlay overlay-mask  text-center p-0">
                    <div class="overlay-mask-content text-center w-100 position-absolute">
                    <a class="btn btn-primary" href="blog-post.html">Read more</a>
                    </div>
                    <a class="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
              </div>
            </div>
            <div class="card-body pb-4">

              <h4 class="card-title mb-2"><a href="blog-post.html">
Best Meetups for Developers in London</a></h4>
              <div class="card-text">

                <div class="excerpt"> Blog post intro goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien quis nulla dictum euismod. Vivamus sed mi vitae dui iaculis venenatis...</div>
              </div>
            </div>
            <div class="card-footer border-0">
              <ul class="meta list-inline mb-0">
                <li class="list-inline-item mr-3"><i class="far fa-clock mr-2"></i>Jan 12, 2018</li>
                <li class="list-inline-item"><i class="fas fa-comment mr-2"></i><a href="#">14 Comments</a></li>
              </ul>
            </div>
            </div><!--//card-->
            </div>

            <div class="col-12 mb-5">
              <a class="btn-blog-more btn btn-primary btn-block text-white font-weight-bold">Load more posts...</a>
            </div>

          </div>
        </div><!--//container-->
    </section><!--//section-->


  <section class="section py-5 bg-primary text-white">
    <div class="container">
      <div class="text-center">
          <img class="profile-small d-inline-block mx-auto rounded-circle mb-2" src="assets/images/profile.jpg" alt="">
        </div>
        <h3 class="section-title font-weight-bold text-center mb-2">Interested in hiring me for your project?</h3>
        <div class="section-intro mx-auto text-center mb-3">
          Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a class="link-on-bg" href="#">hasanbd666@gmail.com</a> or use the <a class="link-on-bg" href="/#/contact">form on the contact page</a>.
        </div>
        <div class="text-center">
            <a class="theme-btn-on-bg btn" href="/#/contact">Let's Talk</a>
        </div>
    </div><!--//container-->
  </section>
    </div>
  `
}

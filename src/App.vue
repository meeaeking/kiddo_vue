<template>
  <div id="app">

    <header>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
               <a class="navbar-brand text-success logo" href="/"><i class="mdi mdi-home-map-marker"></i> <strong>KidDo</strong></a>
               <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HOME
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                           <a class="dropdown-item" href="/">Home With Search</a>
                           <a class="dropdown-item" href="index2.html">Home With Map</a>
                        </div>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Friends
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                           <a class="dropdown-item" href="/seefriends">See Your Friends</a>
                           <a class="dropdown-item" href="/notfriends">Connect with a Friend</a>
                        </div>
                     
                     
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                           <a class="dropdown-item" href="user-profile.html">User Profile</a>
                           <a class="dropdown-item" href="social-profiles.html">My Playdates</a>
                        </div>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                           <a class="dropdown-item" href="/about">About Us</a>
                           <a class="dropdown-item" href="faq.html">FAQ</a>
                           <a class="dropdown-item" href="contact.html">Contact</a>
                           <a class="dropdown-item" href="not-found.html">404 Page</a>
                        </div>
                     </li>
                  </ul>
                  <div class="my-2 my-lg-0">
                     <ul class="list-inline main-nav-right">
                        <li class="list-inline-item">
                           <a class="btn btn-link btn-sm" href="/login">Sign In</a>
                        </li>
                        <li class="list-inline-item">
                           <a class="btn btn-success btn-sm" href="/signup">Sign Up</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </nav>
      </header>


    <router-view/>

    <section class="section-padding footer bg-white">
         <div class="container">
            <div class="row">
               <div class="col-lg-4 col-md-3">
                  <h4 class="mb-5"><a class="text-success logo" href="index.html"><i class="mdi mdi-home-map-marker"></i> <strong>KidDo</strong></a></h4>
                  <p>Chicago, IL</p>
                  <p class="mb-0"><a class="text-dark" href="#">847 668 4360</a></p>
                  <p class="mb-0"><a class="text-success" href="#">kiddo@gmail.com</a></p>
                  <p class="mb-0"><a class="text-info" href="#">www.askbootstrap.com</a></p>
               </div>
               <div class="col-lg-2 col-md-2">
                  <h6 class="mb-4">COMPANY</h6>
                  <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Contact</a></li>
                  </ul>
               </div>
               <div class="col-lg-2 col-md-2">
                  <h6 class="mb-4">LEARN MORE</h6>
                  <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Account</a></li>
                  <li><a href="#">FAQ</a></li>
                  </ul>
               </div>
               <div class="col-lg-4 col-md-4">
                  <h6 class="mb-4">NEWSLETTER</h6>
                  <div class="input-group">
                     <input type="text" class="form-control" placeholder="Email Address..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                     <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><i class="mdi mdi-arrow-right"></i></button>
                     </div>
                  </div>
                  <h6 class="mb-4 mt-5">GET IN TOUCH</h6>
                  <div class="footer-social">
                     <a href="#"><i class="mdi mdi-facebook"></i></a>
                     <a href="#"><i class="mdi mdi-twitter"></i></a>
                     <a href="#"><i class="mdi mdi-instagram"></i></a>
                     <a href="#"><i class="mdi mdi-google"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
  </div>
</template>

<style>
</style>

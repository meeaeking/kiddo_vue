<template>
  <!-- <div class="playdates_show">
    <h1>{{ playdate.name }}</h1>
    <img width="250px" v-bind:src="playdate.image_url">
    <h1>Phone Number: {{ playdate.phone }}</h1>
    <h1>Location: {{ playdate.location[0] }}, {{ playdate.location[1]}}</h1>
    <p><a href="mailto:email@example.com?subject=Let's Get Together for a Playdate!&body=Check out this place I found: ">Send Email</a></p>
  </div> -->
<div>
<!-- Property Single Slider header -->
      <section class="osahan-slider">
         <div id="osahanslider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#osahanslider" data-slide-to="0" class="active"></li>
               <li data-target="#osahanslider" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
               <div class="carousel-item active" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIm2XDl4QYCvd61QIWQMqmPAObistiwW-i1WRBOammn8nBFaG')"></div>
               <div class="carousel-item" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9sx5O4hngsYoKgDCwjiNt2IQ6u09YrLTbhXeFDIxpp8eic3vFA')"></div>
            </div>
            <a class="carousel-control-prev" href="#osahanslider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#osahanslider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
         </div>
         <div class="property-single-title property-single-title-gallery">
            <div class="container">
               <div class="row">
                  <div class="col-lg-8 col-md-8">
                     <h1>{{playdate.name}}</h1>
                     <h6><i class="mdi mdi-home-map-marker"></i> {{playdate.location[0]}}, {{playdate.location[1]}}</h6>
                  </div>
               </div>
               <hr>
                <div>
                  <h6>Phone Number: {{ playdate.display_phone }}</h6>
                </div>
               <div class="row">
                  <div class="col-lg-4 col-md-4 text-right">
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- End Property Single Slider header -->
      <!-- Property Single Slider -->
      <section class="section-padding">
         <div class="container">
            <div class="row">
               <!-- <div class="col-lg-8 col-md-8">
                  <div class="card">
                     <div class="card-body osahan-slider pl-0 pr-0 pt-0 pb-0">
                        <div id="osahansliderz" class="carousel slide" data-ride="carousel">
                           <ol class="carousel-indicators">
                              <li data-target="#osahansliderz" data-slide-to="0" class="active"></li>
                              <li data-target="#osahansliderz" data-slide-to="1"></li>
                           </ol>
                           <div class="carousel-inner" role="listbox">
                              <div class="carousel-item active rounded" v-bind:style="playdate.image_url"></div>
                           </div>
                           <a class="carousel-control-prev" href="#osahansliderz" role="button" data-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="sr-only">Previous</span>
                           </a>
                           <a class="carousel-control-next" href="#osahansliderz" role="button" data-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="sr-only">Next</span>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="card padding-card">
                     <div class="card-body">
                        <h5 class="card-title mb-3">About This Place</h5>
                        <p>Name: {{ playdate.name }}</p>
                        <p>Hours: {{ playdate.Monday }}</p>
                        <p>Categories of Place: {{ playdate.catgories }}</p>
                        <p class="mb-0">is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                     </div>
                  </div>
                  <div class="card padding-card">
                  </div>
               </div> -->
               <div class="card-body">
                        <h5 class="card-title mb-4">{{ playdate.name }}</h5>
                        <div id="featured-properties">
                           <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <div class="card card-list">
                                    <a href="#">
                                       <img class="card-img-top" v-bind:src="playdate.image_url" alt="Card image cap">
                                       <div class="card-body pb-0">
                                          <h5 class="card-title mb-4">{{ playdate.name}}</h5>
                                          <h6 v-for="hours in playdate.hours[0]['open']">{{ days_of_week[hours['day']] }}: {{ hours['start'] }} to {{ hours['end'] }}</h6>

                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
               <div class="col-lg-4 col-md-4">
                  <div class="card sidebar-card">
                     <div class="card-body">
                        <h5 class="card-title mb-4">Set up a Playdate</h5>
                        <form name="sentMessage">
                           <div class="control-group form-group">
                              <div class="controls">
                                 <label>Your Email <span class="text-danger">*</span></label>
                                 <input type="text" placeholder="Enter Your Email"  class="form-control" required>
                              </div>
                           </div>
                           <div class="control-group form-group">
                              <div class="controls">
                                 <label>Phone <span class="text-danger">*</span></label>
                                 <input type="text" placeholder="Enter Phone Number"  class="form-control" required>
                              </div>
                           </div>
                           <div class="control-group form-group">
                              <div class="controls">
                                 <label>Message <span class="text-danger">*</span></label>
                                 <textarea rows="5" cols="50" class="form-control"></textarea>
                              </div>
                           </div>
                           <button type="submit" class="btn btn-success btn-block">SEND REQUEST</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- End Property Single Slider -->  
</div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      playdate: {},
      days_of_week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
  },
  created: function() {
    axios.get(`/api/playdates/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.playdate = response.data; 
    });
  },
  methods: {}
};
</script>

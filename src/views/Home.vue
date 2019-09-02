<template>
  <div class="home">

    <section class="osahan-slider">
         <div id="osahanslider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#osahanslider" data-slide-to="0" class="active"></li>
               <li data-target="#osahanslider" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
               <div class="carousel-item active" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71i6ypJc8MOb7K_cyWqKedycowgujEki7qu2K8uZ-h5njBMdb')">
                  <div class="overlay"></div>
               </div>
               <div class="carousel-item" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmaDc1TCkHbOhXmw6FEbP_yM2SyfygX0yCxsAHjDQldH8LGct')">
                  <div class="overlay"></div>
               </div>
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
         <div class="slider-form">
            <div class="container">
               <h1 class="text-center text-white mb-5">Find a Friend and Play</h1>
            </div>
         </div>
      </section>
    <div>
      <!-- Location: <input type="text" v-model="location"> -->
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-6">
      <div class="input-group">
           <div class="input-group-addon"><i class="mdi mdi-map-marker-multiple"></i></div>
           <select class="form-control select2" name="location" v-model="location">
              <option disabled="" selected="">Choose Your City</option>
              <option>Chicago</option>
              <option>NewYorkCity</option>
              <option>Baltimore</option>
              <option>Houston</option>
              <option>Memphis</option>
              <option>Atlanta</option>
              <option>Los Angeles</option>
              <option>Seattle</option>
              <option>Denver</option>
              <option></option>
           </select>
        </div>
      </div>
    <div>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('museums')">Museums</button>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('amusementparks')">Amusement Parks</button>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('beaches')">Beaches</button>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('parks')">Parks</button>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('playgrounds')">Playgrounds</button>
      <button style="position:relative;" type="button" class="btn btn-success spacing" v-on:click="getPlaydate('farms')">Farms</button>
      <button style="position:relative; " type="button" class="btn btn-success spacing" v-on:click="getPlaydate('festivals')">Festivals</button>
      <button style="position:relative; " type="button" class="btn btn-success spacing" v-on:click="getPlaydate('skatingrinks')">Skating Rinks</button>
    </div>

    <section class="section-padding">
         <div class="section-title text-center mb-5">
            <h2>Playdate Locations</h2>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-lg-4 col-md-4" v-for="playdate in playdates" >
                  <div class="card card-list">
                     <a href="#">
                        <img class="card-img-top" v-bind:src="playdate.image_url" alt="Card image cap" >
                        <div class="card-body">
                          <h2 class="text-success mb-0 mt-3" >
                            <router-link v-bind:to="`/playdates/${playdate.id}`">{{ playdate.name }}</router-link>
                              
                           </h2>
                           <h5 class="card-title">{{ playdate.location[0] }}, {{ playdate.location[1] }}</h5>
                           <h6><p><router-link v-bind:to="`/playdates/${playdate.id}`">Choose this Location</router-link></p></h6>
                           
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    

  </div>
</template>

<style>
.spacing {
  position: relative;
  top: 35px;
  left: 175px;
  right: 50px;
  margin: 10px;
}

.locationsearch {
  position: relative;
  margin: 20px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      playdates: [],
      location: "seattle"
    };
  },
  created: function() {
    
  },
  methods: {
    
    getPlaydate: function(category) {

      axios.get(`/api/playdates?location=${this.location}&categories=${category}`).then(response => {
        this.playdates = response.data;
      });
    }
  }
};
</script>

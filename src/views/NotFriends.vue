<template>
  <div class="container">


    <section class="osahan-slider">
         <div id="osahanslider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#osahanslider" data-slide-to="0" class="active"></li>
               <li data-target="#osahanslider" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
               <div class="carousel-item active" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ihHjCMPNt9YoGsyJ95iMXz_crM6zZJu50MOGTvlZ1w-Hww_x')">
                  <div class="overlay"></div>
               </div>
               <div class="carousel-item" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1HKeWWSRnsw-CkFlEhc7y_hfVOgLewOs7_A0VvgmOHHWEZJxdw')">
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
         <div class="slider-form inner-page-form">
            <div class="container">
               <h1 class="text-center text-white mb-5">Connect With a Friend</h1>
               <form>
                  <div class="row no-gutters">
                     
                     
                  </div> 
              </form>
            </div>
         </div>
      </section>

      <section class="section-padding">
         <div class="container">
            <div class="row">
               <div class="col-lg-8 col-md-8">
                  <div class="row">
                     <div class="col-lg-12 col-md-12" v-for="friend in friends">
                        <div class="card card-list card-list-view">
                           <a href="#">
                              <div class="row no-gutters">
                                 <div class="col-lg-5 col-md-5">
                                    <img class="card-img-top" src="img/list/1.png" alt="Card image cap">
                                 </div>
                                 <div class="col-lg-7 col-md-7">
                                    <div class="card-body">
                                       <h5 class="card-title">{{friend.name}}</h5>
                                       <h6> {{ friend.location }}</h6>
                                       <button v-on:click="beFriends(friend.id)">Connect</button>
                      
                                    </div>
                                    
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <nav class="mt-5">
                     <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                           <a class="page-link" href="#" tabindex="-1"><i class="mdi mdi-chevron-left"></i></a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item"><a class="page-link" href="#">10</a></li>
                        <li class="page-item">
                           <a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      friends: []
    };
  },
  created: function() {
    axios.get("/api/notfriends").then(response => {
      console.log(response.data);
      this.friends = response.data;
    });
  },
  methods: {
    beFriends: function(friendId) {
      console.log("this is be friends");
      console.log(friendId);
      var params = {
        friend_id: friendId
      };
      axios.post("/api/friendships", params).then(response => {
        this.$router.push("/seefriends");
      });
    }
  }
};
</script>
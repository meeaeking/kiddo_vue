<template>
  <div class="container">


  <!-- Main Slider With Form -->
      <section class="osahan-slider">
         <div id="osahanslider" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#osahanslider" data-slide-to="0" class="active"></li>
               <li data-target="#osahanslider" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
               <div class="carousel-item active" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgPvhIsalzNwisIQ8V6s3H-B8xu7BnSf8WYgY5tolEN78Q-1E')">
                  <div class="overlay"></div>
               </div>
               <div class="carousel-item" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUWGoqL6X33kPlqZx0xpRXeDka-DsjD2cLYT4kuYQiN39_75V1g')">
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
               <h1 class="text-center text-white mb-5">Your Friends</h1>
            </div>
         </div>
      </section>
      <!-- End Main Slider With Form -->
      <!-- Properties List -->
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
                                       <h5><a v-bind:href="'mailto:'+friend.email+'?subject=Get Together for a Playdate!'">Send Email</a></h5>
                      
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
      <!-- End Properties List -->
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
    axios.get("/api/seefriends").then(response => {
      console.log(response.data);
      this.friends = response.data;
    });
  },
  methods: {}
};
</script>

<!-- <script src="https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.js"></script> -->

<!-- Instantiate PubNub -->
<!-- <script type="text/javascript"> -->

    <!-- var pubnubDemo = new PubNub({ -->
        <!-- publishKey: 'pub-c-01919a79-f678-4187-aa23-dd15240b3eb3',
        subscribeKey: 'sub-c-333883d2-c871-11e9-8ada-366022f02051'
    });

    function publish() {
   
    pubnub = new PubNub({
        publishKey : 'demo',
        subscribeKey : 'demo'
    })
       
    function publishSampleMessage() {
        console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
        var publishConfig = {
            channel : "hello_world",
            message: { 
                title: "greeting",
                description: "hello world!"
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
            console.log(status, response);
        })
    }
       
    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                publishSampleMessage();
            }
        },
        message: function(msg) {
            console.log(msg.message.title);
            console.log(msg.message.description);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })      
    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['hello_world'] 
    });
};

</script> -->
<template>
  <div class="home">
    <h1>KidDo</h1>
    <div>
      Location: <input type="text" v-model="location">
    </div>
    <div>
      <p><button v-on:click="getPlaydate('museums')">Museums</button></p>
      <p><button v-on:click="getPlaydate('amusementparks')">Amusement Parks</button></p>
      <p><button v-on:click="getPlaydate('beaches')">Beaches</button></p>
      <p><button v-on:click="getPlaydate('parks')">Parks</button></p>
      <p><button v-on:click="getPlaydate('playgrounds')">Playgrounds</button></p>
      <p><button v-on:click="getPlaydate('arcades')">Arcades</button></p>
    </div>
    <div v-for="playdate in playdates">
      <h2>{{ playdate.name }}</h2>
      <h2>{{ playdate.location }}</h2>
  
    </div>
    

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      playdates: [],
      location: ""
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

<template>
  <div class="playdates_show">
    <h1>{{ playdate.name }}</h1>
    <h1>Phone Number: {{ playdate.phone }}</h1>
    <h1>Location: {{ playdate.location }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      playdate: {}
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

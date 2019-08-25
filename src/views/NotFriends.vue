<template>
  <div class="container">
    <h1>Connect with a Friend</h1>
    <div v-for="friend in friends">
      <h2>{{ friend.name }}</h2>
    </div>
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
  methods: {}
};
</script>
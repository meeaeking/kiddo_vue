<template>
  <div class="container">
    <h1>Connect with a Friend</h1>
    <div v-for="friend in friends">
      <h2>{{ friend.name }}</h2>
      <h2>{{ friend.id }}</h2>
      <button v-on:click="beFriends(friend.id)">Press Here</button>
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
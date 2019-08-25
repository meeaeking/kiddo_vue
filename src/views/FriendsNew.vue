<template>
  <div class="container">
    <h1>You Made a New Friend</h1>
    <div>
      Friend ID: <input type="integer" v-model="newFriend_id">
      <button v-on:click="createNewFriend()">Press to Friend</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newFriend_id: ""
    };
  },
  created: function() {},
    
  methods: {
    createNewFriend: function() {
      var params = {
        friend_id: this.newFriend_id
      };
      axios.post("/api/friendships", params).then(response => {
        this.$router.push("/seefriends");
      });
    }
  }
};
</script>

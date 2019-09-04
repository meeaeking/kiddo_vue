import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import store from './store';
// import PubNubVue from 'pubnub-vue';

// Vue.config.productionTip = false;

// const publish_Key = 'pub-c-01919a79-f678-4187-aa23-dd15240b3eb3';
// const subscribe_Key = 'sub-c-333883d2-c871-11e9-8ada-366022f02051';

// // Make a unique uuid for each client
// const myUuid = fourCharID();
// const me = {
//   uuid: myUuid,
// };

// try {
//   if (!publish_Key || !subscribe_Key) {
//     throw 'PubNub Keys are missing.';
//   }
// }

// catch (err) {
//   console.log(err);
// }

// Vue.use(PubNubVue, {
//   subscribeKey: subscribe_Key,
//   publishKey: publish_Key,
//   ssl: true
// }, store);


// new Vue({
//   el: '#app',
//   store,
//   components: { App },
//   template: '&lt;App/&gt;',
//   created
// });

// function fourCharID() {
//   const maxLength = 4;
//   const possible = 'abcdef0123456789';
//   let text = '';
    
//   for (let i = 0; i < maxLength; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
    
//   return text;
// }

// function created() {
//   this.$store.commit('setMe', {me});
// }


axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

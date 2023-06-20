import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import store from "./stores/store.js";
// import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);

app.use(router).use(store);
// app.use(vue3GoogleLogin, {
//   clientId:
//     "502673035330-2t6972dls11mfqnif2jtf4dp3k9v8c4k.apps.googleusercontent.com",
// });

app.mount("#app");

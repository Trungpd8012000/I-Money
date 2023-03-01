import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/styles/tailwind.css";
import "@/assets/styles/global.css";
import { registerGlobalComponets } from "@/utils/import";

const app = createApp(App);
app.use(router);
registerGlobalComponets(app);
app.mount("#app");

import VueRouter from "vue-router";
import Index from "./pages/Index.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register";
import Order from "./pages/Order";

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/login",
      component: Login
    },
    {
      path:"/register",
      component: Register
    },
    {
      path:"/order",
      component: Order
    }
  ]
});

export default router;
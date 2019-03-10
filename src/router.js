import VueRouter from "vue-router";
import Index from "./pages/Index.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register";
import Credit from "./pages/Credit";
import Profile from "./pages/Profile";


const router = new VueRouter({
  mode: "hash",
  routes: [{
      path: "/",
      component: Index
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/credit",
      component: Credit
    },
    {
      path: "/profile",
      component: Profile
    }
  ]
});

export default router;
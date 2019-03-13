import VueRouter from "vue-router";
import Index from "./pages/Index.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import NewItem from "./pages/NewItem.vue";
import ItemDetail from "./pages/ItemDetail.vue";
import Credit from "./pages/Credit";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Check from "./pages/Check";
import OrderDetail from "./pages/OrderDetail";

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
    path: "/new-item",
    component: NewItem
  },
  {
    path: "/item-detail",
    component: ItemDetail
  },
  {
    path: "/credit",
    component: Credit
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/check",
    component: Check
  },
  {
    path: "/order-detail",
    component: OrderDetail
  }]
});

export default router;
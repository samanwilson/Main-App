import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import Product from "../views/Product";
import Company from "../views/Company";
import Login from "../views/Login";
import Blog from "../views/Blog";
import Id from "../views/Id";
import Contact from "../views/Contact";
import Panel from "../views/Panel";
import SingleProduct from "../views/SingleProduct";

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/Product',
    component: Product
  },
  {
    path:'/Company'
    ,component:Company
  },
  {
    path:'/Login'
    ,
    component: Login
  },
    {
        path:'/Blog',
        component:Blog
    },
  {
    path:'/Product/Id',
    component: Id
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Panel',
    component:Panel
  },
  {
    path:'/SingleProduct/:id',
    component : SingleProduct

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

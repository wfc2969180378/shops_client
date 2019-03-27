import Vue from 'vue'
import Router from 'vue-router'
// import MSite from '../views/Msite/Msite'
// import Order from '../views/Order/Order'
// import Search from '../views/Search/Search'
// import Profile from '../views/Profile/Profile'
import Login from '../views/Login/Login'
const MSite = () => import('../views/MSite/MSite')
const Order = () => import('../views/Order/Order')
const Search = () => import('../views/Search/Search')
const Profile = () => import('../views/Profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },{
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      redirect: '/msite',
      path: '/'
    }
  ]
})

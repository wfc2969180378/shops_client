import Vue from 'vue'
import Router from 'vue-router'
// import MSite from '../views/Msite/Msite'
// import Order from '../views/Order/Order'
// import Search from '../views/Search/Search'
// import Profile from '../views/Profile/Profile'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods'
import ShopInfos from '../views/Shop/ShopInfos/ShopInfos'
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings'


const MSite = () => import('../views/MSite/MSite')
const Order = () => import('../views/Order/Order')
const Search = () => import('../views/Search/Search')
const Profile = () => import('../views/Profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },{
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: false
      },
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/infos',
          component: ShopInfos
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      redirect: '/msite',
      path: '/'
    }
  ]
})

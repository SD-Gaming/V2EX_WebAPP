import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component:PostList
    },
    {
      path: '/a/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/member/:loginname',
      name: 'user',
      component:User
    }
  ]
})

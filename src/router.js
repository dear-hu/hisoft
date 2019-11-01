import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import News from './views/list-article'
import Article from './views/article-article'
import Upload from './views/upload'
import GetAddress from './views/getAddress'
import Jieliufangdou from './views/jieliufangdou'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/news',
            name: 'news',
            component: News,
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article,
        },
        {
            path: '/upload',
            name: 'upload',
            component: Upload,
        },
        {
            path: '/getAddress',
            name: 'getAddress',
            component: GetAddress,
        },
        {
            path: '/jieliufangdou',
            name: 'jieliufangdou',
            component: Jieliufangdou,
        },




    ],
});

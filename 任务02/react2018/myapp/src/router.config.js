import Home from './pages/Home';
import Doc from './pages/Doc';
import Tuto from './pages/Tuto';
import Blog from './pages/Blog';
import Comm from './pages/Comm';
import Login from './pages/Login';
// import DocContent from './pages/DocContent';
import {Core} from './xueli/Doc'
const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/doc',
        component: Doc,
        pri: true,
        routes: [
            {
                path: '/doc/core',
                component: Core,
            },
            {
                path:'/doc/guide',
                component:Guide,
            },
            {
                path:'/doc/api',
                component:Api,
            },
            {
                path:'/doc/hooks',
                component:Hooks,
            },
        ]
    },
    {
        path: '/tuto',
        component: Tuto,
        pri: true
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/comm',
        component: Comm
    },
    {
        path: '/login',
        component: Login
    },
]
export default routes;
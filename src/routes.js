import VueRouter from 'vue-router';
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import Registration from "./components/Auth/Registration";
import Ad from "./components/Ads/Ad";
import Orders from "./components/User/Orders";

export default new VueRouter({
    routes: [
        {path: '', name: 'home', component: Home},
        {path: '/login', name: 'login', component: Login},
        {path: '/registration', name: 'registration', component: Registration},
        {path: '/orders', name: 'orders', component: Orders},
        {path: '/ad/:id', name: 'ad', component: Ad},
    ],
});


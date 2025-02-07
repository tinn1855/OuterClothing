import Cart from "../components/cart/cart";
import Home from "../components/home/home";
import Payment from "../components/payment/payment";
import ProductDetail from "../components/products/detail/detail";
import Products from "../components/products/products";



//Public Roter
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/detail', component: ProductDetail },
    { path: '/cart', component: Cart},
    { path: '/payment', component: Payment}

]


export {publicRoutes}
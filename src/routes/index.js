import Home from "../components/home/home";
import ProductDetail from "../components/products/detail/detail";
import Products from "../components/products/products";



//Public Roter
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/detail', component: ProductDetail }
]


export {publicRoutes}
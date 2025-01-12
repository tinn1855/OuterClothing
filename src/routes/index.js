import Home from "../components/home/home";
import Products from "../components/products/products";



//Public Roter
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/products', component: Products}
]


export {publicRoutes}
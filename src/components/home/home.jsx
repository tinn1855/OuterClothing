import { useEffect, useState } from "react";

import Header from "../header/header";
import ImageSlider from "../slider/slider";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    
    
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                // Lọc sản phẩm bestSeller (ví dụ: lấy 3 sản phẩm đầu)
                setBestSellers(data.slice(0, 3));
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Hàm lọc sản phẩm theo danh mục
    const filterByCategory = (category) => {
        return products.filter((product) => product.category === category);
    };

    return (
        <div>
            <Header />
            <ImageSlider />
            <div className="container mx-auto px-5 mt-10">

                {/* Best Seller */}
                <CategorySection title="BEST SELLER" products={bestSellers} folder="bestSeller" />

                {/* T-Shirts */}
                <CategorySection title="T-SHIRTS" products={filterByCategory("tshirts")} folder="tshirts" />

                {/* Jackets */}
                <CategorySection title="JACKET" products={filterByCategory("jackets")} folder="jackets" />

                {/* Pants */}
                <CategorySection title="PANTS" products={filterByCategory("pants")} folder="pants" />

                {/* Hoodies/Sweater */}
                <CategorySection title="HOODIES/SWEATER" products={filterByCategory("hoodies")} folder="hoodies" />
            </div>
            <Footer />
        </div>
    );
}

// Component hiển thị từng danh mục sản phẩm
function CategorySection({ title, products, folder }) {
    return (
        <>
            <div className="mt-10 flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-blue font-bold text-2xl">{title}</span>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-5">
                {products.map((product) => (
                    <div key={product.id} className="col-span-1 text-center">
                        <Link className="relative" to={`/products/${product.id}`}>
                            <img src={`images/${folder}/${product.image}`} alt={product.name} className="transition-transform duration-300 hover:scale-110" />
                        </Link>

                        <h1 className="text-sm font-semibold text-gray-500 mt-5">{product.name}</h1>
                        <div className="flex justify-center space-x-3 font-bold">
                            <del className="text-gray-500">{product.price.toLocaleString("vi-VN")} VND</del>
                            <h4 className="text-red-500">{product.priceSale.toLocaleString("vi-VN")} VNĐ </h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;

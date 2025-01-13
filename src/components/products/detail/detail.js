import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { useEffect, useState } from "react";


function ProductDetail() {
    const [tshirts, setTshirts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/tshirts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error")
                }
                return response.json()
            })
            .then((data) => setTshirts(data))
            .catch((error) => console.error("Error fetching data: ", error))
    },[])

    return (
        <div>
            <Header/>
            <div className="container mx-auto px-5 mt-10">
                <h1>Trang chủ</h1>
                <div className="flex space-x-10 mt-10">
                    <div className="w-1/3">
                        <img src="/images/bestSeller/tshirt-01.jpg" alt="" />
                        <div className="grid grid-cols-4 gap-4 flex space-x-2 mt-5">
                        <div className="col-span-1">
                                <img src="/images/bestSeller/tshirt-01.jpg" alt="" />
                        </div>
                        <div className="col-span-1">
                                <img src="/images/bestSeller/tshirt-01.jpg" alt="" />
                        </div>
                        <div className="col-span-1">
                                <img src="/images/bestSeller/tshirt-01.jpg" alt="" />
                        </div>
                        <div className="col-span-1">
                                <img src="/images/bestSeller/tshirt-01.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-xl font-bold text-gray-600">Áo Thun RAGLAN Line Tee Vegsivir</h1>
                        <div className="flex space-x-2 items-center ">
                            <del className="font-semibold text-gray-600">250.000 VND</del>
                            <p className="text-red-500 text-lg font-bold">199.000 VND</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-5">
                            <div className="w-1/6">
                                <h1 className="font-semibold text-gray-600">Màu sắc:</h1>
                            </div>
                            <div className="w-5/6 flex space-x-5">
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Đỏ</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Đen</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Trắng</button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-5">
                            <div className="w-1/6">
                                <h1 className="font-semibold text-gray-600">Size:</h1>
                            </div>
                            <div className="w-5/6 flex space-x-5">
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">S</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">M</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">L</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">XL</button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-5">
                            <div className="w-1/6">
                                <h1 className="font-semibold text-gray-600">Số lượng:</h1>
                            </div>
                            <div className="w-5/6 flex">
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">-</button>
                                <input value="1" className="outline-none border w-12 text-center"/>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">+</button>
                            </div>
                        </div>
                        <div className="flex space-x-5 mt-5">
                            <div className="flex items-center space-x-3 border px-4 py-2 bg-gray-400 text-white">
                                <FontAwesomeIcon icon={faCartPlus} />
                                <button className="">Thêm vào giỏ hàng</button>
                            </div>
                            <button className="border px-4 py-2 bg-red-500 text-white">Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl font-bold">CHI TIẾT SẢN PHẨM</h1>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl font-bold">SẢM PHẨM TƯƠNG TỰ</h1>
                    <div className="grid grid-cols-4 gap-5 mt-5">
                        { tshirts.slice(0,4).map((tshirt) => (
                             <div key={tshirt.id} className="col-span-1 text-center">
                                <a className="relative" href="/">
                                    <img src={"/images/tshirts/" + tshirt.image} alt="" className="transition-transform duration-300 hover:scale-110"/>
                                </a>
                                <h1 className="text-sm font-semibold text-gray-500 mt-5">{tshirt.name}</h1>
                                <div className="flex justify-center space-x-3 font-bold">
                                    <del className="text-gray-500">{tshirt.price} VND</del>
                                    <h4 className="text-red-500">{tshirt.priceSale} VND</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductDetail;
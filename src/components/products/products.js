import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/footer";
import Header from "../header/header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";



function Products() {
    const [tshirts, setTshirts] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    

    useEffect(() => {
        fetch("http://localhost:3000/tshirts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error")
                }
                return response.json();
            })
            .then((data) => setTshirts(data))
            .catch((error) => console.error("Error fetching data: ", error))
    }, [])
    
    return (
        <div>
            <Header/>
           
            <div className="container mx-auto px-5 mt-10">
                <div className="flex items-center">
                    <div className="w-1/5">
                        Trang chủ/ {}
                    </div>
                    <div className="border px-4 rounded-full py-1 w-3/5 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input placeholder="Tìm kiếm sản phẩm" className="outline-none w-full" />
                    </div>
                    <div className="w-1/5 flex justify-end ">
                        <select className="outline-none border rounded-md py-2 px-4 hover:bg-gray-100 hover:shadow-sm">
                            <option>Mặc định</option>
                            <option>Bán chạy</option>
                            <option>Mới nhất</option>
                            <option>Giá thấp đến cao</option>
                            <option>Giá cao đến thấp</option>
                        </select>
                    </div>
                </div>
                <div className="flex mt-5">
                    <div className="w-1/5">
                        <h1 className="font-semibold text-xl">Danh mục sản phẩm</h1>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>T-shirt</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>Jacket</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>Pant</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>Short</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>Hoodie/Sweather</label>
                        </div>
                        <h1 className="font-semibold text-xl mt-5">Size</h1>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>S</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>M</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>L</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>XL</label>
                        </div>
                        <div className="space-x-2">
                            <input type="checkbox"/>
                            <label>2XL</label>
                        </div>
                        <button className="mt-5 bg-gray-500 px-3 py-1 text-white rounded-sm">
                            Xóa tất cả bộ lọc
                        </button>
                    </div>
                    <div className="w-4/5 grid grid-cols-4 gap-8">
                        {tshirts.map((tshirt) => (
                            <div key={tshirt.id} className="col-span-1 text-center">
                                <a className="relative" href="/">
                                    <img src={"images/tshirts/" + tshirt.image} alt="" className="transition-transform duration-300 hover:scale-110"/>
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

export default Products;
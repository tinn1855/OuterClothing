import { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faTag } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "@mui/material/Button";

function Cart() {
    const [quantity, setquantity] = useState(1)

    const handleQuantityChange = (e) => {
        setquantity(e.target.value)
    }
    


    return (
        <div>
            <Header/>
            <div className="container mx-auto px-5 flex space-x-10">
                <div className="w-3/5 mt-10">
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tạm tính</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold">
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <img className="w-16" src="/images/tshirts/tshirt-01.jpg" alt=""/>
                                    <h1>Áo Thun RAGLAN Line Tee Vegsivir</h1>
                                </div>
                            </td>
                            <td className="text-red-500">199.000 VND</td>
                            <td>
                                <div className="flex">
                                    <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">-</button>
                                    <input value={quantity} onChange={handleQuantityChange} className="outline-none border w-12 text-center"/>
                                    <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">+</button>
                                </div>
                            </td>
                            <td className="text-red-500">199.000 VND</td>
                        </tr>
                    </tbody>
                    <tbody className="font-semibold mb-8">
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <img className="w-16" src="/images/tshirts/tshirt-01.jpg" alt=""/>
                                    <h1>Áo Thun RAGLAN Line Tee Vegsivir</h1>
                                </div>
                            </td>
                            <td className="text-red-500">199.000 VND</td>
                            <td>
                                <div className="flex">
                                    <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">-</button>
                                    <input value={quantity} onChange={handleQuantityChange} className="outline-none border w-12 text-center"/>
                                    <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">+</button>
                                </div>
                            </td>
                            <td className="text-red-500">199.000 VND</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex space-x-5 mt-5">
                    <Button variant="outlined" color="primary" className="space-x-2">
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <h1>Tiếp tục xem sản phẩm</h1>
                    </Button>
                </div>
                </div>
                <div className="w-2/5 mt-10">
                    <div className="space-y-2">
                        <h1 className="font-bold">Cộng giỏ hàng</h1>
                        <div className="border-b w-full"></div>
                        <div className="flex justify-between">
                            <h1 className="mt-1">Tạm tính</h1>
                            <p className="text-red-500 font-semibold">199.000 VND</p>
                        </div>
                        <div className="flex justify-end">
                            Phí ship: <p className="text-red-500 ml-2"> 25.000 VND</p>
                        </div>
                       
                        <div className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faTag} />
                            <h1>Mã giảm giá</h1>
                        </div>
                        <input className="w-full border outline-none px-2 py-1 rounded-md" placeholder="Nhập mã giảm giá" />
                        <button className="w-full border py-1 bg-gray-200 rounded-md text-gray-600 font-semibold">Áp dụng</button>
                        <div className="border-b w-full"></div>
                        <div className="flex justify-between">
                            <h1 className="mt-1">Tổng</h1>
                            <p className="text-red-500 font-semibold">224.000 VND</p>
                        </div>
                        <Button className="w-full" variant="contained" color="primary">THANH TOÁN</Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart;
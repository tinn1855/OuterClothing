import Footer from "../footer/footer";
import Header from "../header/header";
import Button from "@mui/material/Button";


function Payment() {
    return (
        <div>
            <Header/>
            <div className="container mx-auto px-5 mt-10 flex space-x-8">
                <div className="w-3/5 text-gray-600 space-y-5">
                    <h1 className="text-xl font-medium">THÔNG TIN THANH TOÁN</h1>
                    <div>
                        <h1 className="font-medium">Họ và tên <span className="text-red-500">*</span></h1>
                        <input type="text" 
                            placeholder="Họ và tên của bạn" 
                            className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                        />
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-1/2">
                            <h1 className="font-medium">Số điện thoại <span className="text-red-500">*</span></h1>
                            <input type="text" 
                                placeholder="Số điện thoại của bạn" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-medium">Email</h1>
                            <input type="text" 
                                placeholder="Email của bạn" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-1/2">
                            <h1 className="font-medium">Tỉnh/Thành phố <span className="text-red-500">*</span></h1>
                            <input type="text" 
                                placeholder="Nhập họ và tên" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-medium">Quận/Huyện <span className="text-red-500">*</span></h1>
                            <input type="text" 
                                placeholder="Nhập họ và tên" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-1/2">
                            <h1 className="font-medium">Xã/Phường <span className="text-red-500">*</span></h1>
                            <input type="text" 
                                placeholder="Nhập họ và tên" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                        <div className="w-1/2">
                            <h1 className="font-medium">Địa chỉ <span className="text-red-500">*</span></h1>
                            <input type="text" 
                                placeholder="Ví dụ: Số 20, Ngõ 19" 
                                className="w-full outline-none border border-gray-200 px-3 py-1 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-medium">Ghi chú</h1>
                        <textarea className="border border-gray-200 w-full outline-none px-3 py-1"  rows="4"/>
                    </div>
                </div>
                <div className="w-2/5 border border-gray-200 p-8 text-gray-700 space-y-5">
                    <h1 className="font-medium">ĐƠN HÀNG CỦA BẠN</h1>
                    <div className="flex justify-between font-medium mt-3">
                        <h1>Sản phẩm</h1>
                        <h1>Tạm tính</h1>
                    </div>
                    <div className="border-b border-gray-300 mt-1"></div>
                    <div className="flex justify-between mt-3">
                        <h1 className="text-sm">Áo Thun Newseven Curve - Đen, M  × 1</h1>
                        <h1 className="font-medium text-sm text-red-500">199.000 VND</h1>
                    </div>
                    <div className="flex justify-between mt-1">
                        <h1 className="text-sm">Áo Thun Newseven Curve - Trắng, M  × 1</h1>
                        <h1 className="font-medium text-sm text-red-500">199.000 VND</h1>
                    </div>
                    <div className="border-b border-gray-300 mt-3"></div>
                    <div className="flex justify-between mt-1">
                        <h1 className="text-sm font-medium">Tạm tính</h1>
                        <h1 className="font-medium text-sm text-red-500">398.000 VND</h1>
                    </div>
                    <div className="flex justify-between mt-1">
                        <h1 className="text-sm font-medium">Phí ship</h1>
                        <h1 className="font-medium text-sm text-red-500">25.000 VND</h1>
                    </div>
                    <div className="border-b border-gray-300 mt-1"></div>
                    <div className="flex justify-between mt-3">
                        <h1 className="text-sm font-medium">Tổng</h1>
                        <h1 className="font-medium text-sm text-red-500">423.000 VND</h1>
                    </div>
                    <div className="flex justify-end mt-3">
                        <h1 className="text-sm">Thanh toán khi nhận hàng</h1>
                    </div>
                    <Button href="/" className="w-full mt-3" variant="contained" color="error">ĐẶT HÀNG</Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Payment;
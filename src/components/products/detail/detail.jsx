import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";

function ProductDetail() {
    const { id } = useParams(); // Lấy product ID từ URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch sản phẩm theo ID
        fetch(`http://localhost:3000/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Sản phẩm không tồn tại");
                }
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu sản phẩm: ", error);
                setProduct(null); // Đảm bảo sản phẩm là null nếu có lỗi
            });
    }, [id]);

    // Nếu chưa có dữ liệu sản phẩm, hiển thị thông báo
    if (!product) {
        return (
            <div>
                <Header />
                <div className="container mx-auto px-5 mt-10">
                    <h1>Sản phẩm không tìm thấy</h1>
                </div>
                <Footer />
            </div>
        );
    }

    // Đảm bảo category tồn tại trong sản phẩm và có giá trị mặc định nếu không có
    const category = product.category || "tshirts";  // Mặc định là "tshirts" nếu không có category

    return (
        <div>
            <Header />
            <div className="container mx-auto px-5 mt-10">
                <h1>Trang chủ</h1>
                <div className="flex space-x-10 mt-10">
                    <div className="w-1/3">
                        {/* Hiển thị ảnh sản phẩm từ API với thư mục động */}
                        <img src={`/images/${category}/${product.image}`} alt={product.name} />
                        <div className="grid grid-cols-4 gap-4 flex space-x-2 mt-5">
                            {/* Hiển thị các ảnh nhỏ của sản phẩm */}
                            <div className="col-span-1">
                                <img src={`/images/${category}/${product.image}`} alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src={`/images/${category}/${product.image}`} alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src={`/images/${category}/${product.image}`} alt="" />
                            </div>
                            <div className="col-span-1">
                                <img src={`/images/${category}/${product.image}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3">
                        <h1 className="text-xl font-bold text-gray-600">{product.name}</h1>
                        <div className="flex space-x-2 items-center ">
                            <del className="font-medium text-gray-600">{product.price.toLocaleString("vi-VN")} VND</del>
                            <p className="text-red-500 text-lg font-bold">{product.priceSale.toLocaleString("vi-VN")} VND</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-5">
                            <div className="w-1/6">
                                <h1 className="font-medium text-gray-600">Màu sắc:</h1>
                            </div>
                            <div className="w-5/6 flex space-x-5">
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Đỏ</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Đen</button>
                                <button className="border px-3 py-1 hover:border-gray-500 hover:text-red-500">Màu Trắng</button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-5">
                            <div className="w-1/6">
                                <h1 className="font-medium text-gray-600">Size:</h1>
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
                                <button className="">Thêm vào giỏ hàng</button>
                            </div>
                            <button className="border px-4 py-2 bg-red-500 text-white">Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 space-y-2">
                    <h1 className="text-xl font-bold">CHI TIẾT SẢN PHẨM</h1>
                    <i className="font-semibold text-xl text-[#2F6AC2]">{product.name}</i>
                    <p>Hàng chuẩn <b>OUTERCLO</b> sản xuất, tem mác chính hãng.</p>
                    <p>Chất liệu: Cotton 2 chiều <b>280GSM</b> </p>
                    <ul className="list-disc ml-5">
                        <li>Vải mềm mại và ấm áp nhờ mặt trong vải được phủ một lớp lông tơ ngắn, nên bề mặt vải vô cùng mềm mại, mịn màng.</li>
                        <li>Vải ít nhăn, ít bám bẩn.</li>
                        <li>Bề mặt vải dai co giãn, khó bị xước</li>
                    </ul>
                    <h1 className="font-bold">LƯU Ý</h1>
                    <ul className="list-disc ml-5">
                        <li>Không giặt máy trong 10 ngày đầu</li>
                        <li>Không nên sấy và sử dụng chất tẩy, lộn ngược khi giặt để áo bền hơn</li>
                        <li>Nên giặt với nước lạnh dưới 40 độ và tuyệt đối không nên giặt với nước nóng sẽ làm co giãn sợi vải.</li>
                        <li>Khi phơi lộn trái và không phơi trực tiếp dưới ánh nắng mặt trời</li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl font-bold">SẢM PHẨM TƯƠNG TỰ</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;

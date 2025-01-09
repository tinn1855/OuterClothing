import { useEffect, useState } from "react";


function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bestSeller")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((param) => setProducts(param))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []); // Thêm mảng phụ thuộc để chỉ chạy một lần


    return (
        <div className="container mx-auto px-5 mt-10">
            <div className="flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-xl text-blue">BEST SELLER</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {products.map((bestSeller) => (
                    <div key={bestSeller.id} className="col-span-1 text-center">
                        <img src={"images/bestSeller/" + bestSeller.image} alt=""/>
                        <h1 className="text-sm font-semibold text-gray-500 mt-5">{bestSeller.name}</h1>
                        <div className="flex justify-center space-x-3 font-bold">
                            <del className="text-gray-500">{bestSeller.price} VND</del>
                            <h4 className="text-red-500">{bestSeller.priceSale} VND</h4>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default Home;
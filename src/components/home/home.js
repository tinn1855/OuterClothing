import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";

import Header from '../header/header'
import ImageSlider from '../slider/slider'
import Footer from '../footer/footer'


function Home() {
    const [products, setProducts] = useState([])
    const [jackets, setJackets] = useState([])
    const [pants, setPants] = useState([])
    const [hoodies, setHoodies] = useState([])
    const [tshirts, setTshirts] = useState([])

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

    useEffect(() => {
        fetch("http://localhost:3000/jacket")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json();
            })
            .then((data) => setJackets(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/pants")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json();
            })
            .then((data) => setPants(data))
            .catch((error) => console.error("Error fetching data: ", error))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/hoodies")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error")
                }
                return response.json();
            })
            .then((data) => setHoodies(data))
            .catch((error) => console.error("Error fetching data: ", error)) 
    }, [])

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
            <ImageSlider/>
            <div className="container mx-auto px-5 mt-10">
            <div className="flex justify-end mb-10">
                <div className="border px-4 rounded-full py-1 w-1/3 flex items-center space-x-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input placeholder="Search" className="outline-none w-full" />
                </div>
            </div>
            <div className="flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-2xl text-blue">BEST SELLER</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {products.map((bestSeller) => (
                    <div key={bestSeller.id} className="col-span-1 text-center">
                        <a className="relative" href="/">
                            <img src={"images/bestSeller/" + bestSeller.image} alt="" className="transition-transform duration-300 hover:scale-110"/>
                        </a>
                        <h1 className="text-sm font-semibold text-gray-500 mt-5">{bestSeller.name}</h1>
                        <div className="flex justify-center space-x-3 font-bold">
                            <del className="text-gray-500">{bestSeller.price} VND</del>
                            <h4 className="text-red-500">{bestSeller.priceSale} VND</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-2xl text-blue">T-SHIRTS</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
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
            <div className="mt-10 flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-2xl text-blue">JACKET</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {jackets.map((jacket) => (
                    <div key={jacket.id} className="col-span-1 text-center">
                    <img src={"images/jacket/" + jacket.image} alt=""/>
                    <h1 className="text-sm font-semibold text-gray-500 mt-5">{jacket.name}</h1>
                    <div className="flex justify-center space-x-3 font-bold">
                        <del className="text-gray-500">{jacket.price} VND</del>
                        <h4 className="text-red-500">{jacket.priceSale} VND</h4>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-10 flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-2xl text-blue">PANTS</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {pants.map((pant) => (
                    <div key={pant.id} className="col-span-1 text-center">
                    <img src={"images/pants/" + pant.image} alt=""/>
                    <h1 className="text-sm font-semibold text-gray-500 mt-5">{pant.name}</h1>
                    <div className="flex justify-center space-x-3 font-bold">
                        <del className="text-gray-500">{pant.price} VND</del>
                        <h4 className="text-red-500">{pant.priceSale} VND</h4>
                    </div>
                </div>
                ))}
            </div>
            <div className="mt-10 flex items-center before:flex-grow before:border-t before:border-gray-300 after:flex-grow after:border-t after:border-gray-300">
                <span className="mx-4 text-gray-500 font-bold text-2xl text-blue">HOODIES/SWEATHER</span>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-5">
                {hoodies.map((hoodie) => (
                    <div key={hoodie.id} className="col-span-1 text-center">
                    <img src={"images/hoodies/" + hoodie.image} alt=""/>
                    <h1 className="text-sm font-semibold text-gray-500 mt-5">{hoodie.name}</h1>
                    <div className="flex justify-center space-x-3 font-bold">
                        <del className="text-gray-500">{hoodie.price} VND</del>
                        <h4 className="text-red-500">{hoodie.priceSale} VND</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
        </div>
        
    )
}

export default Home;
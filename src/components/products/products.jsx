import Footer from "../footer/footer";
import Header from "../header/header";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Products() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const listOption = [
        { label: 'Mặc định' },
        { label: 'Bán chạy' },
        { label: 'Mới nhất' },
        { label: 'Giá từ thấp đến cao' },
        { label: 'Giá từ cao đến thấp' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    // Lọc sản phẩm theo từ khóa tìm kiếm
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="container mx-auto px-5 mt-10">
                <div className="flex items-center">
                    <div className="w-1/5">Trang chủ/ {}</div>
                    <div className="w-3/5">
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                                id="search"
                                className="w-full"
                                label="Nhập tên sản phẩm"
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <Autocomplete
                            options={listOption}
                            sx={{ width: 200 }}
                            renderInput={(params) => <TextField {...params} label="Lựa chọn" size="small" />}
                        />
                    </div>
                </div>
                <div className="flex mt-5">
                    <div className="w-1/5">
                        <h1 className="font-semibold text-xl">Danh mục sản phẩm</h1>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox size="small" />} label="T-Shirt" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Jacket" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Pant" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Short" />
                            <FormControlLabel control={<Checkbox size="small" />} label="Hoodie/Sweater" />
                        </FormGroup>
                        <h1 className="font-semibold text-xl mt-5">Size</h1>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox size="small" />} label="S" />
                            <FormControlLabel control={<Checkbox size="small" />} label="M" />
                            <FormControlLabel control={<Checkbox size="small" />} label="L" />
                            <FormControlLabel control={<Checkbox size="small" />} label="XL" />
                            <FormControlLabel control={<Checkbox size="small" />} label="2XL" />
                        </FormGroup>
                        <Button variant="contained" color="primary" size="small" startIcon={<DeleteIcon />}>
                            Xóa tất cả bộ lọc
                        </Button>
                    </div>
                    <div className="w-4/5">
                        <div className="grid grid-cols-4 gap-8">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div key={product.id} className="col-span-1 text-center">
                                        <Link to={`/products/${product.id}`} className="relative" href="/">
                                            <img src={`images/${product.category}/${product.image}`} alt={product.name} className="transition-transform duration-300 hover:scale-110" />
                                        </Link>
                                        
                                        <h1 className="text-sm font-semibold text-gray-500 mt-5">{product.name}</h1>
                                        <div className="flex justify-center space-x-3 font-bold">
                                            <del className="text-gray-500">{product.price} VND</del>
                                            <h4 className="text-red-500">{product.priceSale} VND</h4>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center col-span-4 text-gray-500">Không tìm thấy sản phẩm</p>
                            )}
                        </div>
                        <div className="mt-5 flex justify-center">
                            <Stack spacing={1}>
                                <Pagination count={5} variant="outlined" shape="rounded" />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;

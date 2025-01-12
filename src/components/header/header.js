import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    
    return (
        <div className="sticky top-0 bg-white z-50 shadow-md" id='header'>
            <div className="container mx-auto px-5 flex justify-between items-center py-4">
                <div className="w-1/4">
                    <a href="/" className="">
                        <img src="/images/logo.png" className="w-20" alt="logo" />
                    </a>
                </div>
                <div className="w-2/4">
                    <ul className="flex justify-between font-semibold">
                        <a href="/"><li className="hover:text-[#2F6AC2]">Trang chủ</li></a>
                        <Link to="/products"><li className="hover:text-[#2F6AC2]">Sản phẩm</li></Link>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Bộ sưu tập</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Về chúng tôi</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Liên hệ</li></a>
                    </ul>
                </div>
                <div className="w-1/4 flex justify-end space-x-5">
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
            
        </div>
       
    )
}

export default Header;
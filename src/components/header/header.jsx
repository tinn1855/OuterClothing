import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; // Import Modal từ react-modal

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


Modal.setAppElement('#root');

function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const CartBadge = styled(Badge)`
        & .${badgeClasses.badge} {
            top: -12px;
            right: -6px;
        }
        `;
    
    return (
        
        <div className="sticky top-0 bg-white z-50 shadow-md" id='header'>
            <div className="container mx-auto px-5 flex justify-between items-center py-4">
                <div className="w-1/4">
                    <a href="/" className="">
                        <img src="/images/logo.png" className="w-20" alt="logo" />
                    </a>
                </div>
                <div className="w-2/4">
                    <ul className="flex justify-between font-medium text-gray-600">
                        <a href="/"><li className="hover:text-[#2F6AC2]">Trang chủ</li></a>
                        <Link to="/products"><li className="hover:text-[#2F6AC2]">Sản phẩm</li></Link>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Bộ sưu tập</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Về chúng tôi</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Liên hệ</li></a>
                    </ul>
                </div>
                <div className="w-1/4 flex justify-end items-center">
                    <IconButton onClick={() => setModalIsOpen(true)}>   
                        <PersonOutlineIcon  />
                    </IconButton>
                    <IconButton href='/cart'>
                        <ShoppingCartIcon fontSize="small" />
                        <CartBadge badgeContent={1} color="primary" overlap="circular" />
                    </IconButton>
                </div>
                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                        content: {
                            padding: '20px',
                            borderRadius: '8px',
                            maxWidth: '600px',
                            maxHeight: '400px',
                            margin: 'auto',
                            transform: 'opacity 0.3s ease-in-out',
                            animationDuration: '200'
                            
                        },
                        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                    }}
                >
                    <div className='container mx-auto px-5'>
                        <div className='w-full text-gray-600 space-y-4'>
                            <h1 className='text-xl font-bold'>ĐĂNG NHẬP</h1>
                            <div className=''>
                                <label>Tên tài khoản hoặc địa chỉ email: <span className='text-red-500'>*</span> </label>
                                <input className='border rounded-sm outline-none py-1 px-2 w-full' />
                            </div>
                            <div className=''>
                                <label>Mật khẩu: <span className='text-red-500'>*</span> </label>
                                <input className='border rounded-sm outline-none py-1 px-2 w-full' />
                            </div>
                            <div className='flex space-x-2'>
                                <input className='' type='checkbox' />
                                <p>Ghi nhớ mật khẩu</p>
                            </div>
                            <button className='bg-gray-600 text-white w-full font-semibold px-4 py-2'>
                                Đăng nhập
                            </button>
                            <h1 className=''>
                                Nếu chưa có tài khoản hãy  
                                <a href='/' className='font-semibold text-blue'> ĐĂNG KÝ </a>
                            </h1>
                            <a href='/'>Quên mật khẩu?</a>
                        </div>
                    </div>
                </Modal>
            </div>
            
        </div>
       
    )
}

export default Header;
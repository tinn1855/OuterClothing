import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



function Footer() {
    return (
        <footer>
            <div className="bg-gray-100 py-10 mt-14">
                <div className="container mx-auto px-5 flex text-sm">
                    <div className="w-1/2 flex flex-col space-y-2">
                        <h1 className="font-bold text-lg text-[#2A65BD]">CÔNG TY TNHH MTV OUTERCLO</h1>
                        <p className="text-gray-500">
                            <b>Trụ sở chính:</b> Phú Mỹ, Phú Vang, Thành phố Huế.
                        </p>
                        <p className="text-gray-500">
                            <b>Cơ sở 2:</b> Phú An, Phú Vang, Thành phố Huế.
                        </p>
                        <p className="text-gray-500">
                            <b>Hotline:</b> 0835 0803 94.
                        </p>
                        <p className="text-gray-500">
                            <b>Email:</b> outerclo@gmail.com.
                        </p>
                    </div>
                    <div className="w-1/2 flex">
                        <div className="w-1/2 font-medium text-gray-500 flex flex-col space-y-2">
                            <h1 className="font-bold text-lg text-[#2A65BD]">Thông tin chung</h1>
                            <a href="/"><h2>Về chúng tôi</h2></a>
                            <a href="/"><h2>Câu hỏi thường gặp</h2></a>
                        </div>
                        <div className="w-1/2 font-medium text-gray-500 flex flex-col space-y-2">
                            <h1 className="font-bold text-lg text-[#2A65BD]">Điều khoản chung</h1>
                            <a href="/"><span>Chính sách bảo mật</span></a>
                            <a href="/"><h2>Điều khoản sử dụng</h2></a>
                            <a href="/"><h2>Chính sách giải quyết tranh chấp</h2></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2A65BD] text-center py-3">
                <IconButton>
                    <InstagramIcon fontSize='large' className='text-white' />
                </IconButton>
                <IconButton>
                    <FacebookIcon fontSize='large' className='text-white' />
                </IconButton>
                <IconButton>
                    <LinkedInIcon fontSize='large' className='text-white' />
                </IconButton>
                <IconButton>
                    <MailOutlineIcon fontSize='large' className='text-white' />
                </IconButton>
            </div>
        </footer>
        
    )
}

export default Footer;
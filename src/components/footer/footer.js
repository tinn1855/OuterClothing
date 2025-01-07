import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <footer>
            <div className="bg-gray-100 py-10 mt-10">
                <div className="container mx-auto px-5 flex">
                    <div className="w-1/2">
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
                            <b>Email:</b> otuerclo@gmail.com.
                        </p>
                    </div>
                    <div className="w-1/2 flex">
                        <div className="w-1/2 font-semibold text-gray-500">
                            <h1 className="font-bold text-lg text-[#2A65BD]">Thông tin chung</h1>
                            <a href="/"><h2>Về chúng tôi</h2></a>
                            <a href="/"><h2>Câu hỏi thường gặp</h2></a>
                        </div>
                        <div className="w-1/2 font-semibold text-gray-500">
                            <h1 className="font-bold text-lg text-[#2A65BD]">Điều khoản chung</h1>
                            <a href="/"><h2>Chính sách bảo mật</h2></a>
                            <a href="/"><h2>Điều khoản sử dụng</h2></a>
                            <a href="/"><h2>Chính sách giải quyết tranh chấp</h2></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2A65BD] text-center py-5 space-x-5">
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faTiktok} size="2x" color="white" />
                </a>
            </div>
        </footer>
        
    )
}

export default Footer;
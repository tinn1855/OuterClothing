
function Header() {
    return (
        <div className="sticky top-0 bg-white z-50">
            <div className="container mx-auto px-5 flex py-4">
                <div className="w-1/2">
                    <a href="/" className="">
                        <img src="/images/logo.png" className="w-20" alt="logo" />
                    </a>
                </div>
                <div className="w-1/2">
                    <ul className="flex justify-between font-semibold">
                        <a href="/"><li className="hover:text-[#2F6AC2]">Trang chủ</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Sản phẩm</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Bộ sưu tập</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Về chúng tôi</li></a>
                        <a href="/"><li className="hover:text-[#2F6AC2]">Liên hệ</li></a>
                    </ul>
                </div>
                
            </div>
        </div>
        
    )
}

export default Header;
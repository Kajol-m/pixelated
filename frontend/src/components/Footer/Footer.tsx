import SubscribeEmail from "./SubscribeEmail";
import { FaFacebook,  FaPinterest,  FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer:React.FC=()=>{
    return(
        <>
        <div className="bg-gray-100">
            <SubscribeEmail/>
            <div className="flex gap-[200px] items-center justify-center text-sm py-[80px]">
                <nav>
                    <h2 className="text-xl font-semibold mb-2">SHOP</h2>
                    <ul className="flex flex-col space-y-1">
                        <li><a href="">New Arrivals</a></li>
                        <li><a href="">Clothing</a></li>
                        <li><a href="">Accessories</a></li>
                        <li><a href="">Artworks</a></li>
                        <li><a href="">Plants</a></li>
                        <li><a href="">Bestsellers</a></li>
                        <li><a href="">Trending</a></li>
                    </ul>
                </nav>
                <nav>
                    <h2 className="text-xl font-semibold mb-2">QUICK LINKS</h2>
                    <ul className="flex flex-col space-y-1">
                        <li><a href="">Order Status</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Returns and Exchange Policy</a></li>
                        <li><a href="">Offers and Deals</a></li>
                    </ul>
                </nav>
                <nav className="flex flex-row gap-7">
                    <FaFacebook className="text-2xl"/>
                    <FaInstagram className="text-2xl"/>
                    <FaPinterest className="text-2xl"/>
                    <IoIosMail className="text-2xl"/>
                </nav>
            </div>
            <p className="flex justify-end text-xs py-4 pr-4">© 2025 PIXELATED INDIA Retail, LLC. All Rights Reserved.</p>
        </div>
        </>
    )
}
export default Footer;
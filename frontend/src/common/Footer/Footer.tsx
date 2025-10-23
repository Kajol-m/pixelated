import SubscribeEmail from "./SubscribeEmail";
import { FaFacebook,  FaPinterest,  FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer:React.FC=()=>{
    return(
        <>
        <div className="border-t border-gray-300 bg-gray-100">
            <div className="lg:px-[100px] md:px-8 border-b border-gray-300"><SubscribeEmail/></div>
            
            <div className=" grid grid-cols-2 md:flex md:flex-row md:gap-[200px] items-center justify-center text-sm lg:py-[80px] md:py-[20px] py-[15px] px-8">
                <nav>
                    <h2 className="text-xl font-semibold mb-2">SHOP</h2>
                    <ul className="flex flex-col space-y-1">
                        
                        <li><Link to="/collections/COL00000004">New Arrivals</Link></li>
                        <li><Link to="/product/clothing">Clothing</Link></li>
                        <li><Link to="/product/accessories">Accessories</Link></li>
                        <li><Link to="/product/tops">Tops</Link></li>
                        <li><Link to="/product/dresses">Dresses</Link></li>
                        <li><Link to="/bestsellers">Bestsellers</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
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
                        <li><a href="">Returns & Exchange</a></li>
                        <li><a href="">Offers and Deals</a></li>
                    </ul>
                </nav>
                <nav className="hidden lg:flex flex-row gap-7">
                    <FaFacebook className="text-2xl"/>
                    <FaInstagram className="text-2xl"/>
                    <FaPinterest className="text-2xl"/>
                    <IoIosMail className="text-2xl"/>
                </nav>
            </div>
            <div>
                <nav className="flex lg:hidden flex-row gap-7 items-center justify-center py-6">
                    <FaFacebook className="text-2xl"/> 
                    <FaInstagram className="text-2xl"/>
                    <FaPinterest className="text-2xl"/>
                    <IoIosMail className="text-2xl"/>
                </nav>
            </div>
            <p className="flex justify-end text-xs py-1 px-2 ">© 2025 PIXELATED INDIA Retail, LLC. All Rights Reserved by Kajol Murmu.</p>
            <p className="flex justify-end text-xs py-1 px-2 lg:pb-1 md:pb-[60px] pb-[70px]">All the images and UI inspo are from Minga London Urban Outfitters, Bonkers Corner, Virgio and Nasty Gal</p>
        </div>
        </>
    )
}
export default Footer;
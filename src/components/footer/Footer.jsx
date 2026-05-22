import iconImg from '../../assets/images/logo.png';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#001931] text-white py-[30px]">
            <div className="flex justify-between items-center px-20">
                <div className="flex items-center justify-center gap-2">
                    <img src={iconImg} alt="logo" className="w-[40px]" />
                    <p>Hero.Io</p>
                </div>

                
                <div className="space-y-5">
                    <p className="text-xl">Social Links</p>

                    <ul className="flex gap-3 justify-center items-center mt-2">
                        <li className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                            <a href=""><AiFillInstagram className="text-black text-2xl" /></a>
                        </li>

                        <li className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                            <a href=""><FaSquareFacebook className="text-black text-2xl" /></a>
                        </li>

                        <li className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                            <a href=""><FaXTwitter className="text-black text-2xl" /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-5 mt-[10px] mb-5">
                <hr className="border-[#FAFAFA]/20" />
            </div>

            <p className="flex justify-center items-center">Copyright &copy; 2025 - All right reserved</p>
            
        </div>
    );
};

export default Footer;
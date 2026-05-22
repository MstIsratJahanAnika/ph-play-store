import bannerImg from '../../../assets/images/hero.png';
import appStoreImg from '../../../assets/images/appStore.png';
import playStoreImg from '../../../assets/images/playStore.png';


const Banner = () => {
    return (
        <div className="text-center space-y-4 mt-20">
            <h2 className="font-bold text-7xl">We Build <br /><span className="font-black text-purple-400">Productive</span> Apps</h2>
            <p className="text-[#627382] text-xl">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center items-center gap-4 my-10">
                <button className="py-3 px-6 border border-[#D2D2D2] rounded-sm flex items-center gap-4 hover:bg-gray-100 cursor-pointer"><span><img src={playStoreImg} alt="Play Store" /></span>Google Play</button>
                <button className="py-3 px-6 border border-[#D2D2D2] rounded-sm flex items-center gap-4 hover:bg-gray-100 cursor-pointer"><span><img src={appStoreImg} alt="App Store" /></span>App Store</button>
            </div>

            <img src={bannerImg} alt="Hero Banner" className='mx-auto'/>
        </div>
    );
};

export default Banner;
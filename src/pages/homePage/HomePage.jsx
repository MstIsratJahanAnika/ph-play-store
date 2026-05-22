import Banner from "./banner/Banner";
import Stats from "./stats/Stats";
import TrendingApps from "./trendingApps/TrendingApps";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;
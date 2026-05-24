import { useLoaderData } from "react-router";
import Banner from "./banner/Banner";
import Stats from "./stats/Stats";
import TrendingApps from "./trendingApps/TrendingApps";
import { useEffect, useState } from "react";

const HomePage = () => {

    // homepage loader thaka & er kono component er moddhe thaka same, both way useLoaderData() use kora jabe, 
    // but homepage loader thaka data use korar jonno homepage er moddhe useLoaderData() use kora better, 
    // karon homepage er onno component gulo te data pass korte hobe props er maddhome, but homepage er moddhe directly useLoaderData() use kore data access kora jabe, 
    // eta code ke clean rakhbe

    // const data = useLoaderData();
    // console.log(data, 'data from home page');

    const [apps, setApps] = useState([]);

    // loading fallBack dekhanor jonno 
    const [isLoading, setIsLoading] = useState(true);

    // useEffect use kore
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('/data.json');
            const data = await response.json();

            setTimeout(()=>{
                setApps(data); //state er moddhe data peye jabo
                setIsLoading(false);

                // data peye gele loading false kore dao
            }, 2000) //2 second por loading false kore dao, jate loading fallBack dekha jay

            console.log(data, 'data from home page');
        };
        fetchData(); //function ke call kore dao
    }, [])

    console.log(apps, 'apps from home page'); //state e update howar por abar render hobe, tai ekhane apps er data peye jabo
    console.log(isLoading, 'isLoading from home page'); //loading state er value peye jabo

    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps apps={apps} setApps={setApps} isLoading={isLoading}></TrendingApps>
        </div>
    );
};

export default HomePage;
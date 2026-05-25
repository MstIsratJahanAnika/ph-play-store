import { useLoaderData } from "react-router";
import Banner from "./banner/Banner";
import Stats from "./stats/Stats";
import TrendingApps from "./trendingApps/TrendingApps";
import { useEffect, useState } from "react";
import useApps from "../apps/useApps";

const HomePage = () => {

    // homepage loader thaka & er kono component er moddhe thaka same, both way useLoaderData() use kora jabe, 
    // but homepage loader thaka data use korar jonno homepage er moddhe useLoaderData() use kora better, 
    // karon homepage er onno component gulo te data pass korte hobe props er maddhome, but homepage er moddhe directly useLoaderData() use kore data access kora jabe, 
    // eta code ke clean rakhbe

    // const data = useLoaderData();
    // console.log(data, 'data from home page');

    const {apps, isLoading, setApps} = useApps(); //custom hook theke data access kora

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
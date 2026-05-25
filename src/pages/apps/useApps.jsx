// custom hook for fetching apps data

import { useEffect, useState } from "react";

const useApps = () => {

    const [apps, setApps] = useState([]);
    
        // loading fallBack dekhanor jonno 
        const [isLoading, setIsLoading] = useState(true);
    
        // useEffect use kore
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('/data.json');
                const data = await response.json();
    
                setTimeout(() => {
                    setApps(data); //state er moddhe data peye jabo
                    setIsLoading(false);
    
                    // data peye gele loading false kore dao
                }, 2000) //2 second por loading false kore dao, jate loading fallBack dekha jay
    
                console.log(data, 'data from home page');
            };
            fetchData(); //function ke call kore dao
        }, [])

        // object return kore dao, jate component e use kora jay
    return {apps, isLoading, setApps, setIsLoading}; //state and setState function gulo return kore dao, jate component e use kora jay
};

export default useApps;
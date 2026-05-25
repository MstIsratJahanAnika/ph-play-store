// import { use } from "react";

import { HashLoader } from "react-spinners";
import AllCards from "./allCards/AllCards";
import { Link } from "react-router";

// data promise - use hook use kore 

// const appsPromise = fetch('/data.json')
//     .then(response => response.json())
//         .catch(error => {

//             console.error('Error fetching data:', error);
//         return [];
//     });

const TrendingApps = ({ apps, setApps, isLoading }) => {

    // const apps = use(appsPromise);
    // console.log(apps);

    return (
        <div className="my-20">

            <div className="text-center space-y-4">
                <h3 className="text-5xl font-bold">Trending Apps</h3>

                <p className="text-[#627382] text-xl">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="mt-10">

                {
                    isLoading ? (<div className="flex justify-center items-center"><HashLoader color="#ad46ff" /></div>) :
                        (<>
                            <h2>Total Apps: {apps.length}</h2>

                            <div className="grid grid-cols-4 gap-4 mt-6">

                                {
                                    apps.slice(0, 8).map(app => (
                                        <AllCards app={app} key={app.id}></AllCards>))
                                }

                            </div>

                            <div className="text-center">
                                <Link to="/apps">
                                    <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                                        View All
                                    </button>
                                </Link>
                            </div>
                        </>)
                }

            </div>
        </div>
    );
};

export default TrendingApps;


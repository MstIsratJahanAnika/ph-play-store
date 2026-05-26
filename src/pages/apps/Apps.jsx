import AllCards from "../homePage/trendingApps/allCards/AllCards";
import { HashLoader } from "react-spinners";
import useApps from "./useApps";

const Apps = () => {

    const {apps, isLoading} = useApps(); //custom hook theke data access kora

    console.log(apps, isLoading);


    return (
        <div className="container mx-auto px-4">
            <div className="text-center space-y-4 my-20">
                <h2 className="text-[#001931] text-5xl font-bold">Our All Applications</h2>
                <p className="ttext-[#627382] text-xl">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {
                isLoading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <HashLoader color="#ad46ff" />
                    </div>
                ) : (
                    <>
                        <h2 className="font-semibold text-lg">({apps.length}) Apps Found</h2>

                        <div className="grid grid-cols-4 gap-4 mt-6">
                            {
                                apps.map(app => (
                                    <AllCards
                                        app={app}
                                        key={app.id}
                                    />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};
    export default Apps;
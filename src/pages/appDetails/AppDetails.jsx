import { useParams } from "react-router";
import useApps from "../apps/useApps";

import downLoadIcon from '../../assets/images/icon-downloads.png';
import ratingIcon from '../../assets/images/icon-ratings.png';
import reviewIcon from '../../assets/images/icon-review.png';
import ErrorPage from "../errorPage/ErrorPage";
import { HashLoader } from "react-spinners";
import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetails = () => {

    // const param = useParams();
    const { id } = useParams(); //useParams hook diye dynamic route theke id ta access kora
    console.log(id, 'id from app details page'); //dynamic route theke id ta peye jabo

    const { apps, isLoading } = useApps(); //custom hook theke data access kora
    console.log(apps, isLoading, 'apps & isLoading from app details page'); //state e update howar por abar render hobe, tai ekhane apps er data peye jabo

    const contextData = useContext(InstalledAppsContext); //context theke data access kora
    const { installedApps, setInstalledApps } = contextData;

    const expectedApp = apps.find(app => (app.id) == id); //apps array theke id match kore expected app ta ber kora
    console.log(expectedApp, 'expected app from app details page'); //expected app er data peye jabo

    // install app
    const handleInstalledApps = () => {

        // if already exists in installed 
        const alreadyExists = installedApps.find(app => app.id == expectedApp.id);

        if(alreadyExists){
            toast.error(`${expectedApp.title} already exists`);
            return;
        }

        // installed na thakle baki code execute koro
        setInstalledApps([...installedApps, expectedApp]);

        // toaster added
        toast.success(`${expectedApp.title} is Installed!`);
    };


    console.log(installedApps, 'installed apps from app details page');


    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <HashLoader color="#ad46ff" />
            </div>
        )
    }

    if (!expectedApp) {
        return (
            <ErrorPage></ErrorPage>
        )
    }

    console.log(expectedApp, 'expected app from app details page'); //expected app er data peye jabo


    return (
        <div className="container mx-auto mt-20 mb-10 flex gap-10 items-center">
            <div>
                <img src={expectedApp.image} alt={expectedApp.title} className="w-80 h-80 object-cover rounded-lg" />
            </div>

            <div className="flex-1">
                <div>
                    <h2 className="text-[32px] font-bold">{expectedApp.title}</h2>
                    <p className="text-[#627382] text-xl">Developed by <span className="font-semibold text-purple-500">{expectedApp.companyName}</span></p>
                </div>

                <div className="my-4">
                    <hr className="text-[#cccdcd]" />
                </div>

                <div className="flex items-center justify-start gap-12 mt-4">
                    <div>
                        <img src={downLoadIcon} alt="Downloads" />
                        <p className="font-extrabold text-[40px]">{expectedApp.downloads}</p>
                    </div>
                    <div>
                        <img src={ratingIcon} alt="Ratings" />
                        <p className="font-extrabold text-[40px]">{expectedApp.ratingAvg}</p>
                    </div>
                    <div>
                        <img src={reviewIcon} alt="Reviews" />
                        <p className="font-extrabold text-[40px]">{expectedApp.reviews}</p>
                    </div>

                </div>
                <div className="mt-6">
                    <button onClick={handleInstalledApps} className="bg-[#00D390] hover:bg-[#00b87a] text-white font-bold py-2 px-4 rounded">
                        Install Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
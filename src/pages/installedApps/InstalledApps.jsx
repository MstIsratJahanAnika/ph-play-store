import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const InstalledApps = () => {

    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

    // uninstall functionality - predicted
    const handleUninstall = (app) => {
        console.log(app, 'app needed to uninstall');

        const restApps = installedApps.filter(restApp => restApp.id != app.id);
        console.log(restApps);

        // updated apps diye replace
        setInstalledApps(restApps);
        toast.warning(`${app.title} is Uninstalled`);
    }

    return (
        <div className="container mx-auto  min-h-[60vh] mt-20 mb-10">

            {
                installedApps.length === 0 ? <h2 className="font-bold text-4xl">No Apps Found</h2> :
                
                installedApps.map((installedApp) => {

                    const { id, title, image, downloads, ratingAvg, reviews } = installedApp;

                    return (
                        <div key={id} className="flex items-center gap-4 mb-4 p-5 shadow space-y-4">
                            <img src={image} alt={title} className="w-20 h-20 rounded-lg" />

                            <div>
                                <h3 className="text-lg font-semibold">{title}</h3>

                                <div className="flex gap-4 items-center">
                                    <p className="flex justify-center items-center text-[#00D390]"><MdOutlineFileDownload />{downloads}</p>
                                    <p className="flex justify-center items-center text-[#FF8811]"><FaStar />{ratingAvg}</p>
                                    <p className="text-[#627382]">{reviews}</p>

                                <button onClick={()=>handleUninstall(installedApp)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 cursor-pointer">
                                    Uninstall
                                </button>
                                </div>

                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default InstalledApps;
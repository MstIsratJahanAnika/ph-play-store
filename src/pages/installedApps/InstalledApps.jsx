import { useContext } from "react";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const InstalledApps = () => {

    const { installedApps, setInstalledApps } = useContext(InstalledAppsContext);

    return (
        <div className="container mx-auto mt-20 mb-10">

            {
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
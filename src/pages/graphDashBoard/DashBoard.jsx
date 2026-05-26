import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstalledAppsContext } from "../../context/InstalledAppsContext";
import useApps from "../apps/useApps";
// import { RechartsDevtools } from '@recharts/devtools';


const DashBoard = () => {

    // context theke data niye ashe use korbo 
    const {installedApps} = useContext(InstalledAppsContext);

    const { apps, isLoading } = useApps(); //custom hook theke data access kora
    console.log(apps, 'all apps');

    const unInstalledApps = apps.length - installedApps.length;
    console.log(unInstalledApps);

    // #region Sample data
    const data = [
        { name: 'Installed', value: installedApps.length, fill: '#0088FE' },
        { name: 'UnInstalled', value: unInstalledApps, fill: '#00C49F' },

    ];


    return (
        <div className="my-10 min-h-[60vh]">
            <h2 className="text-4xl font-bold text-purple-500 text-center">Installed & Uninstalled Apps</h2>

            <div className="my-20 rounded-md border border-slate-300 py-10 container mx-auto">
                <PieChart style={{ width: '100%', maxWidth: '500px', margin: 'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    {/* <RechartsDevtools /> */}
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
}

export default DashBoard;
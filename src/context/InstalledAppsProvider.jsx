import { useState } from "react";
import { InstalledAppsContext } from "./InstalledAppsContext";

// children is full application
const InstalledAppsProvider = ({ children }) => {

    // installation state declare
    const [installedApps, setInstalledApps] = useState([]);

    // generally object e pass kora hoy
    const data = {
        installedApps,
        setInstalledApps
    }

    return (
        // context create kora file pass korte hobe, jekhane context create kora ache, then value hishebe data pass korte hobe, and children ke wrap korte hobe, jekhane context use korte chai, sei children ke wrap korte hobe
        <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>
    );
};

export default InstalledAppsProvider;
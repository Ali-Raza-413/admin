import React from "react";
import SettingTabbar from "../components/SettingComponents/SettingTabbar";
import BackButton from "../components/BackButton";

const Settings = () => {
  return (
    <div className="p-4">
   
     <div className="flex items-center gap-2 mt-5">
        <BackButton />
        <h1 className="text-2xl font-bold text-black">Admin Profile</h1>
      </div>
<div className="mt-5">
      <SettingTabbar />
      </div>
    </div>
  );
};

export default Settings;

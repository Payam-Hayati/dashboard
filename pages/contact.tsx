import Sidebar from "../components/Sidebar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ContactContent from "../components/ContactContent";

const Team = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* Start Dark Light Button */}
      <div className="dark-light">
        {darkMode ? (
          <WbSunnyIcon
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer text-gray-50"
          />
        ) : (
          <DarkModeIcon
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer text-gray-50"
          />
        )}
      </div>
      {/* End Dark Light Button */}
      <div className={darkMode ? "dark" : ""}>
        <div className="flex gap-5 bg-back-body rtl">
          <Sidebar />
          <ContactContent />
        </div>
      </div>
    </>
  );
};

export default Team;

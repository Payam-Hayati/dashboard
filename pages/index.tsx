import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "./Dashboard";
import { motion } from "framer-motion";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import Topbar from "../components/Topbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>پنل مدیریت</title>
        <meta name="description" content="طراحی شده توسط پیام حیاتی" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

      {/* Start Main */}
      <div className={darkMode ? "dark" : ""}>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto rtl bg-[#3C3D51]  dark:bg-[#1A2233]"
        >
          <Dashboard />
        </motion.div>
      </div>
      {/* Start Main */}
    </>
  );
}

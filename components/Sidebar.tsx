import { useState } from "react";
import Image from "next/image";

import Link from "next/link";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Sidebar = () => {
  const [isCool, setIsCool] = useState<boolean>(true);

  return (
    <>
      {isCool ? (
        <div className="sidebar text-back-body flex-1 px-5 py-2 rounded-bl-lg rounded-tl-lg max-w-[15rem] bg-my-white dark:bg-back-dashboard dark:text-gray-100">
          {/* Start Top Image */}
          <div className="flex justify-between">
            <div>مدیران</div>
            <div>
              <KeyboardArrowDownOutlinedIcon
                onClick={() => setIsCool(!isCool)}
              />
            </div>
          </div>

          {/* Start img */}
          <div className="mx-auto text-center">
            <Image
              className="mx-auto"
              src="/user.png"
              alt="user"
              width="60"
              height="60"
            />
            <h5 className="font-semibold mt-1">نگین راکی</h5>
            <h6 className="text-sm">مدیریت بخش طراحی</h6>
          </div>
          <div className="line mt-2"></div>

          {/* Start List */}
          <div className="flex mt-2 gap-2">
            <div>
              <HomeOutlinedIcon className="text-cyan-600" />
            </div>
            <span className="text-cyan-600">
              <Link href="/">داشبورد</Link>
            </span>
          </div>

          <div className="line mt-2"></div>

          {/* Data */}
          <div className="mt-4 text-sm">
            <label className="font-semibold">کاربران</label>
            <ul className="text-md">
              <li className="py-2">
                <span>
                  <PeopleOutlinedIcon />
                </span>

                <span className="mr-2">
                  <Link href="/team">مدیریت تیم</Link>
                </span>
              </li>

              <li className="py-1">
                <span>
                  <ContactsOutlinedIcon />
                </span>
                <span className="mr-2">
                  <Link href="/contact">اطلاعات تماس</Link>
                </span>
              </li>

              <li className="py-1">
                <span>
                  <ReceiptOutlinedIcon />
                </span>
                <span className="mr-2">قراردادها</span>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div className="mt-4">
            <label className="font-semibold">صفحات</label>
            <ul className="text-md">
              <li className="py-2">
                <span>
                  <PersonOutlinedIcon />
                </span>

                <span className="mr-2">
                  <Link href="/user">فرم کاربری</Link>
                </span>
              </li>

              <li className="py-1">
                <span>
                  <CalendarTodayOutlinedIcon />
                </span>
                <span className="mr-2">تقویم</span>
              </li>

              <li className="py-1">
                <span>
                  <HelpOutlineOutlinedIcon />
                </span>
                <span className="mr-2">پرسش و پاسخ</span>
              </li>
            </ul>
          </div>

          {/* Charts */}
          <div className="mt-4">
            <label className="font-semibold">نمودارها</label>
            <ul className="text-md">
              <li className="py-2">
                <span>
                  <BarChartOutlinedIcon />
                </span>
                <span className="mr-2">نمودار ستونی</span>
              </li>

              <li className="py-1">
                <span>
                  <PieChartOutlineOutlinedIcon />
                </span>
                <span className="mr-2">نمودار دایره ای</span>
              </li>

              <li className="py-1">
                <span>
                  <TimelineOutlinedIcon />
                </span>
                <span className="mr-2">نمودار خطی</span>
              </li>

              <li className="py-1">
                <span>
                  <MapOutlinedIcon />
                </span>
                <span className="mr-2">نمودار جغرافیایی</span>
              </li>
            </ul>
          </div>
        </div> //End MAin Div
      ) : (
        <div className="bg-back-content px-5 py-2 rounded-bl-lg">
          <MenuOutlinedIcon
            onClick={() => setIsCool(!isCool)}
            className="bg-[#243B53] rounded-full h-10 w-10 p-1"
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;

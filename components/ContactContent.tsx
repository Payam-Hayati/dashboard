import Topbar from "./Topbar";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import { data } from "../pages/api/Data";
import { useState } from "react";
import Table from "@mui/material/Table";

const ContactContent = () => {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex-1 bg-my-white rounded-tr-lg px-5 py-2  dark:bg-back-dashboard dark:text-gray-100 rounded-br-lg">
        <Topbar />
        <div className="mt-12 bg-my-silver px-4 py-1 rounded-lg dark:bg-back-body">
          <span>
            <PermPhoneMsgOutlinedIcon className="text-md" />
          </span>
          <span className="mr-2 font-semibold">اطلاعات تماس</span>
        </div>
        <div className="py-4">
          <form>
            <input
              className="my-3 dark:text-back-body p-2 rounded-lg min-w-full"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </form>
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            className="bg-back-body rounded-lg text-gray-50 p-4"
            aria-label="a dense table"
          >
            <thead>
              <tr>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>ایمیل</th>
                <th>تماس</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.first_name.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr
                    key={index}
                    className="text-center border-solid border-cyan-500 border-2"
                  >
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ContactContent;

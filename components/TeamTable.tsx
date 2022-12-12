import Users from "../components/Users";
import Topbar from "./Topbar";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
const TeamTable = () => {
  return (
    <>
      <div className="flex-1 bg-my-white rounded-tr-lg px-5 py-2  dark:bg-back-dashboard dark:text-gray-100 rounded-br-lg">
        <Topbar />
        <div className="mt-12 bg-my-silver px-4 py-1 rounded-lg dark:bg-back-body">
          <span>
            <PeopleAltOutlinedIcon className="text-md text-back-body dark:text-gray-50" />
          </span>
          <span className="mr-2 font-semibold text-back-body dark:text-gray-50">
            اطلاعات کاربران
          </span>
        </div>

        <div className="">
          <Users />
        </div>
      </div>
    </>
  );
};

export default TeamTable;

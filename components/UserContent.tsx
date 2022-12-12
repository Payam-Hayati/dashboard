import Topbar from "./Topbar";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AddUserForm from "./AddUserForm";

const UserContent = () => {
  return (
    <>
      <div className="flex-1 bg-my-white rounded-tr-lg px-5 py-2  dark:bg-back-dashboard dark:text-gray-100 rounded-br-lg">
        <Topbar />
        <div className="mt-12 bg-my-silver px-4 py-1 rounded-lg dark:bg-back-body">
          <span>
            <GroupAddOutlinedIcon className="text-md" />
          </span>
          <span className="mr-2 font-semibold">افزودن کاربر</span>
        </div>
        <div className="py-4">
          <AddUserForm />
        </div>
      </div>
    </>
  );
};

export default UserContent;

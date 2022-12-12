import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
export default function Topbar() {
  return (
    <>
      <div className="flex">
        {/* Search Box */}
        <div className="flex-1">
          <FormControl variant="standard" className="dark:text-gray-50 ">
            <Input
              id="input-with-icon-adornment"
              className="dark:text-gray-50 text-gray-900"
              placeholder="جستجو"
              startAdornment={
                <InputAdornment position="start" className="dark:text-gray-50">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>

        {/* Icons */}
        <div className="flex-1 text-left mt-1">
          <NotificationsNoneOutlinedIcon className="text-[20px] text-gray-500 ml-2" />
          <SettingsOutlinedIcon className="text-[20px] text-gray-500 ml-2" />
          <PersonOutlinedIcon className="text-[20px] text-gray-500 ml-2" />
        </div>
      </div>
    </>
  );
}

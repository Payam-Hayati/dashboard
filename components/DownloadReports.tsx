import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const DownloadReports = () => {
  const dTime: string = new Date().toLocaleString();

  return (
    <>
      <div className="bg-my-silver dark:bg-back-body mt-12 px-4 py-2 rounded-lg">
        <div className="flex justify-between">
          <button className="bg-[#9598F6] px-2 py-1 rounded-lg">
            <span>
              <FileDownloadOutlinedIcon className="text-[16px]" />
            </span>
            <span className="text-sm mr-1">دریافت گزارش</span>
          </button>
          <div className="flex-1 text-left"></div>
        </div>
      </div>
    </>
  );
};

export default DownloadReports;

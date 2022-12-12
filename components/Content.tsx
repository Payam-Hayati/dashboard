import ColumnChart from "./ColumnChart";
import DownloadReports from "./DownloadReports";
import Summaries from "./Summaries";
import Topbar from "./Topbar";

const Content = () => {
  return (
    <>
      <div className="flex-1 bg-my-white rounded-tr-lg px-5 py-2  dark:bg-back-dashboard dark:text-gray-100 rounded-br-lg">
        <Topbar />
        <DownloadReports />
        <Summaries />
        <ColumnChart />
      </div>
    </>
  );
};

export default Content;

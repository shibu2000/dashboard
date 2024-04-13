import Card from "../ui/dashboard/card/card";
import Transaction from "./transactions/page";
import style from "./dashboard.module.css";
import Chart from "./chart/page";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-3">
      <div className={`${style.main} space-y-3`}>
        <div className={`cards flex gap-3`}>
          <Card active={true} />
          <Card />
          <Card />
        </div>
        <div className="rounded space-y-3">
          <Transaction />
          <Chart />
        </div>
      </div>
      <div className={style.rightbar}>
        <div className="fixed space-y-3">
          <Rightbar />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

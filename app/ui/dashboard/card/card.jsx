import { MdSupervisedUserCircle } from "react-icons/md";

const Card = ({ active }) => {
  return (
    <div
      className={`flex gap-3 w-2/6 p-3 rounded-lg ${
        active ? "bg-slate-700" : "_bgSoft"
      } hover:bg-slate-700`}
    >
      <MdSupervisedUserCircle size={24} />
      <div className="space-y-2">
        <p className="text-md">Total Users</p>
        <p className="text-lg">10,928</p>
        <p className="text-xs">
          <span className={`text-green-600`}>12%</span> more than previous week
        </p>
      </div>
    </div>
  );
};

export default Card;

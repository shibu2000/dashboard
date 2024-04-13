import { MdPlayCircleFilled, MdWatch } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="_bgSoft p-2 rounded-md space-y-4">
      <h2>🔥 Available now</h2>
      <h1>How to use the new version of the admin dashboard</h1>
      <p className="text-xs">Takes 4 minutes to learn</p>
      <p className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        nihil soluta expedita perferendis.
      </p>
      <button className="font-bold text-sm flex gap-2 items-center bg-purple-800 p-2 rounded-md">
        <MdPlayCircleFilled />
        Watch
      </button>
    </div>
  );
};

export default Rightbar;

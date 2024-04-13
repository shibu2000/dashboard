import Image from "next/image";
import "./transaction.css";

const tableItems = [
  {
    id: 1,
    image: "/noavatar.png",
    name: "Shibu Dhara",
    status: "done",
    date: "07.03.2024",
    amount: 3000,
  },
  {
    id: 2,
    image: "/noavatar.png",
    name: "Shibu Dhara",
    status: "pending",
    date: "07.03.2024",
    amount: 3000,
  },
  {
    id: 3,
    image: "/noavatar.png",
    name: "Shibu Dhara",
    status: "cancelled",
    date: "07.03.2024",
    amount: 3000,
  },
  {
    id: 4,
    image: "/noavatar.png",
    name: "Shibu Dhara",
    status: "done",
    date: "07.03.2024",
    amount: 3000,
  },
];

const Transaction = async () => {
  return (
    <div className="_bgSoft p-2 rounded-md">
      <h2 className="_textSoft">Latest Transaction</h2>
      <table className="w-full mt-4 text-sm border-separate border-spacing-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={item.image}
                      alt="noavatar"
                      width={30}
                      height={30}
                      className="object-cover rounded-full"
                    />
                    {item.name}
                  </div>
                </td>
                <td>
                  <span className={`px-1 rounded text-xs ${item.status}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>₹{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;

import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "./dashboard.module.css";

const layout = ({ children }) => {
  return (
    <main className="flex">
      <section className="flex-1">
        <Sidebar />
      </section>
      <section className={`${styles.content} p-3`}>
        <Navbar />
        <div className="container mt-4">{children}</div>
      </section>
    </main>
  );
};

export default layout;

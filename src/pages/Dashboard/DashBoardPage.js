import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { DashBoardCard } from "./components/DashBoardCard";
import { DashBoardEmpty } from "./components/DashBoardEmpty";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";

export const DashbaordPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>{!orders.length && <DashBoardEmpty />}</section>

      <section>
        {orders.length &&
          orders.map((order) => <DashBoardCard key={order.id} order={order} />)}
      </section>
    </main>
  );
};

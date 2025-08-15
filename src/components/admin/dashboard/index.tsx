"use client";
// import { useParams, useRouter } from "next/navigation";
import React from "react";
import TotalCards from "./TotalCards";
import OrderTable from "./OrderTable";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Statistics } from "./StatisticsCharts";
import { Visitors } from "./Visitos";

// type Props = {}

const AdminHomePage = () => {
  // const params = useParams()
  return (
    <>
      <div className="grid gap-7 w-full bg-[#f7f7f7] p-5">
        <h1 className="font-bold text-5xl">Dashboard</h1>
        <div className="flex  gap-7">
          <TotalCards
            title="total sales"
            Icon={BsCurrencyDollar}
            value={19626098.05}
            symbol={"$"}
            bgColor="bg-green-100"
            bgColorSecondary="bg-green-400"
          />
          <TotalCards
            title="total orders"
            Icon={FaCartShopping}
            value={3290}
            bgColor="bg-orange-100"
            bgColorSecondary="bg-orange-400"
          />
          <TotalCards
            title="total Products"
            Icon={MdOutlineShoppingBasket}
            value={322}
            bgColor="bg-blue-100"
            bgColorSecondary="bg-blue-400"
          />
        </div>
        <div className="flex gap-7">
        {/* <div className="flex gap-7 max-h-3/5"> */}
          <Statistics />
          <Visitors />
        </div>
        <OrderTable />
      </div>
    </>
  );
};

export default AdminHomePage;

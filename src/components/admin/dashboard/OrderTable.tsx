import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders } from "@/components/sampleData/SampleData";

type Props = {};

const OrderTable = (props: Props) => {
  return (
    <div className="bg-white p-5">
      <h1 className="font-bold capitalize">latest orders</h1>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Order Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>
                ${order.amount.toFixed(2)}
              </TableCell>
              <TableCell>
                <span
                  className={`font-medium w-full ${
                    order.status === "Delivered"
                      ? "bg-[#e3f8e8]  px-3 rounded-4xl text-green-500"
                      : order.status === "Pending"
                      ? "bg-[#fff4e4] px-3 rounded-4xl text-orange-500"
                      : "bg-[#f9ecea] px-3 rounded-4xl text-red-500"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;

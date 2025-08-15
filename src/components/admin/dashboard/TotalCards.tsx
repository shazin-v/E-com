import React from "react";

type Props = {
  title: string;
  value: number;
  symbol?: any;
  Icon?: React.ElementType;
  bgColor: string;
  bgColorSecondary: string;
};

const TotalCards = ({
  title,
  value,
  symbol,
  Icon,
  bgColor,
  bgColorSecondary,
}: Props) => {
  return (
    <div className="flex justify-center items-center bg-red-300 gap-5">
      <div className="bg-white min-w-sm p-3">
        <div className="flex">
          <div
            className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center`}
          >
            {/* <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center"> */}
            <div
              className={`w-14 h-14 rounded-full ${bgColorSecondary} flex items-center justify-center`}
            >
              <span className="text-white">{Icon && <Icon size={24} />}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center pl-8">
            <h1 className="text-gray-500 font-bold capitalize">{title}</h1>
            <p className="font-bold text-black">
              {symbol}
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCards;

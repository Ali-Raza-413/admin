import React from "react";

const AnalyticsCard = ({ title, value, image }) => {
  return (
    <div className="p-4 bg-black rounded-lg shadow-lg text-white transition-all duration-300 max-w-xl py-5">
      {image && <img src={image} alt="Icon" className="w-[26px] h-[26px]" />}
      <p className="text-sm text-[#E8E8E8] mt-5 font-[500]">{title}</p>
      <p className="text-lg text-white font-[600]">{value}</p>
    </div>
  );
};

const Analytics = () => {
  const analyticsData = [
    {
      title: "Total Customers",
      value: "200",
      image: "/f3.png", // Replace with your actual image path
    },

    {
      title: "Total Sellers",
      value: "300",
      image: "/f2.png", // Replace with your actual image path
    },
    {
      title: "Total Users",
      value: "400",
      image: "/f4.png", // Replace with your actual image path
    },
    {
      title: "Total Categories",
      value: "400",
      image: "/f1.png", // Replace with your actual image path
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
      {analyticsData.map((data, index) => (
        <AnalyticsCard
          key={index}
          title={data.title}
          value={data.value}
          image={data.image} // Pass image if available
        />
      ))}
    </div>
  );
};

export default Analytics;

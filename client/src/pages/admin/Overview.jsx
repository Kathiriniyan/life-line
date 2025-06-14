import React from "react";

const stats = [
  { label: "Total Campaigns", value: "1,250" },
  { label: "Total Donations", value: "$5,750,000" },
  { label: "Active Users", value: "8,500" },
  { label: "New Campaigns This Month", value: "120" },
];

const activities = [
  {
    user: "Emily Harper",
    action: "Created Campaign",
    campaign: "Support for Cancer Treatment",
    date: "2024-07-26",
  },
  {
    user: "Owen Foster",
    action: "Donated",
    campaign: "Help with Heart Surgery",
    date: "2024-07-25",
  },
  {
    user: "Chloe Hayes",
    action: "Updated Campaign",
    campaign: "Recovery Support",
    date: "2024-07-24",
  },
  {
    user: "Noah Ingram",
    action: "Created Campaign",
    campaign: "Emergency Medical Fund",
    date: "2024-07-23",
  },
];

export default function Overview() {
  return (
    <div className="p-6 md:p-10">
      {/* Title */}
      <h1 className="font-bold text-2xl md:text-3xl mb-6">Admin Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-100 rounded-lg px-5 py-6 flex flex-col items-start"
          >
            <span className="text-gray-600 text-sm">{stat.label}</span>
            <span className="font-bold text-xl md:text-2xl mt-2">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Performance Section */}
      <h2 className="font-bold text-lg mb-3">Campaign Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Donations by Category */}
        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-lg font-bold">$2,500,000</div>
              <div className="text-xs text-gray-400">
                Last Year <span className="text-green-600 font-semibold">+15%</span>
              </div>
            </div>
          </div>
          {/* Simple Bar Chart */}
          <div className="flex items-end h-28 gap-4 mt-4">
            {/* Medical */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-7 h-12 rounded" />
              <div className="text-xs mt-1 text-gray-500">Medical</div>
            </div>
            {/* Surgery */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-7 h-20 rounded" />
              <div className="text-xs mt-1 text-gray-500">Surgery</div>
            </div>
            {/* Therapy */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-7 h-16 rounded" />
              <div className="text-xs mt-1 text-gray-500">Therapy</div>
            </div>
            {/* Rehabilitation */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-7 h-10 rounded" />
              <div className="text-xs mt-1 text-gray-500">Rehabilitation</div>
            </div>
            {/* Other */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 w-7 h-6 rounded" />
              <div className="text-xs mt-1 text-gray-500">Other</div>
            </div>
          </div>
        </div>

        {/* Campaign Growth Chart */}
        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-lg font-bold">120</div>
              <div className="text-xs text-gray-400">
                Last 6 Months <span className="text-green-600 font-semibold">+10%</span>
              </div>
            </div>
          </div>
          {/* Line Chart SVG */}
          <div className="h-32 flex items-end mt-2">
            <svg width="100%" height="100%" viewBox="0 0 220 90" fill="none">
              <polyline
                fill="none"
                stroke="#4B5563"
                strokeWidth="3"
                points="0,70 30,60 60,72 90,35 120,45 150,70 180,40 210,60"
              />
            </svg>
          </div>
          {/* Months */}
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <h2 className="font-bold text-lg mb-3">Recent Activities</h2>
      <div className="bg-white border rounded-lg overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="text-left p-3 font-semibold">User</th>
              <th className="text-left p-3 font-semibold">Action</th>
              <th className="text-left p-3 font-semibold">Campaign</th>
              <th className="text-left p-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">{item.user}</td>
                <td className="p-3">{item.action}</td>
                <td className="p-3">{item.campaign}</td>
                <td className="p-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

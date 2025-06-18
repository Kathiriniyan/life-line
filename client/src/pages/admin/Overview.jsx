import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function Overview() {
  const { axios } = useAppContext();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const { data } = await axios.get('/api/admin/dashboard-stats');
        if (data.success) {
          setStats(data.stats);
        }
      } catch (e) {
        // handle error
      }
      setLoading(false);
    };
    fetchDashboardStats();
  }, [axios]);

  if (loading || !stats) {
    return <div className="p-10 text-center text-xl text-gray-400">Loading dashboard...</div>;
  }

  return (
    <div className="p-6 md:p-10">
      {/* Title */}
      <h1 className="font-bold text-2xl md:text-3xl mb-6">Admin Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatBox label="Total Campaigns" value={stats.totalCampaigns} />
        <StatBox label="Total Donations" value={`LKR ${stats.totalDonations?.toLocaleString()}`} />
        <StatBox label="Active Users" value={stats.activeUsers} />
        <StatBox label="New Campaigns This Month" value={stats.newCampaignsThisMonth} />
      </div>

      {/* Performance Section */}
      <h2 className="font-bold text-lg mb-3">Campaign Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Donations by Category */}
        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-lg font-bold">
                LKR {(stats.donationsByCategory?.reduce((sum, x) => sum + x.amount, 0) || 0).toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">
                Last Year <span className="text-green-600 font-semibold">+15%</span>
              </div>
            </div>
          </div>
          {/* Dynamic Bar Chart */}
          {/* Dynamic Bar Chart */}
<div className="flex items-end h-28 gap-4 mt-4">
  {(() => {
    // Find the max donation amount for scaling
    const maxAmount = Math.max(...stats.donationsByCategory.map(cat => cat.amount), 1);
    const chartHeight = 96; // in px
    return stats.donationsByCategory.map(cat => {
      const barHeight = Math.max((cat.amount / maxAmount) * chartHeight, 20); // min 20px
      return (
        <div key={cat.category} className="flex flex-col items-center">
          <div
            className="bg-gray-300 w-7 rounded transition-all"
            style={{ height: `${barHeight}px` }}
            title={cat.amount.toLocaleString()}
          />
          <div className="text-xs mt-1 text-gray-500">{cat.category}</div>
        </div>
      );
    });
  })()}
</div>

        </div>

        {/* Campaign Growth Chart */}
        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-lg font-bold">{stats.newCampaignsThisMonth}</div>
              <div className="text-xs text-gray-400">
                Last 6 Months <span className="text-green-600 font-semibold">+10%</span>
              </div>
            </div>
          </div>
          {/* Dynamic Line Chart */}
          <div className="h-32 flex items-end mt-2">
            <svg width="100%" height="100%" viewBox="0 0 220 90" fill="none">
              <polyline
                fill="none"
                stroke="#4B5563"
                strokeWidth="3"
                points={
                  stats.campaignGrowth
                    .map((item, i) =>
                      `${(220 / (stats.campaignGrowth.length - 1)) * i},${90 - (item.count * 2.5)}`
                    )
                    .join(" ")
                }
              />
            </svg>
          </div>
          {/* Months */}
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            {stats.campaignGrowth?.map(x => <span key={x.month}>{x.month}</span>)}
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
            {stats.recentActivities?.map((item, idx) => (
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

// Simple stat card
function StatBox({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-lg px-5 py-6 flex flex-col items-start">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="font-bold text-xl md:text-2xl mt-2">{value}</span>
    </div>
  );
}

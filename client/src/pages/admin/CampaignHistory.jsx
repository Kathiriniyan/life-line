import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
const CampaignHistory = () => {


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
      {/* Recent Activities */}
      <h2 className="font-bold text-lg mb-3">Recent Activities</h2>
      <div className="bg-white border w-full rounded-lg overflow-x-auto">
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
  )
}

export default CampaignHistory
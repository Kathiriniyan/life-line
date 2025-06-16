import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Over_view = () => {
    const { axios, navigate } = useAppContext();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatientCampaigns = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/campaign/by-patient');
                if (data.success) {
                    setCampaigns(data.campaigns);
                }
            } catch (error) {
                // Optionally handle error
            }
            setLoading(false);
        };
        fetchPatientCampaigns();
    }, [axios]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (campaigns.length === 0) return <div className="p-10 text-center">You haven’t created any campaigns yet.</div>;

    return (
        <div className="flex-1 w-full max-w-full md:ml-10 md:mr-30">
            <div className=" w-full mx-auto p-2 sm:p-4 md:py-8 md:px-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h1>
                {campaigns.map((campaign) => {
                    const percent = Math.round((campaign.collectedAmount / campaign.goalAmount) * 100);
                    return (
                        <div onClick={()=> {navigate(`patient/campaign-list/${campaign._id}`); scrollTo(0,0)}} key={campaign._id} className="border-primary/30 border-1 p-10 rounded-xl shadow-xl mb-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">Campaign</h3>
                                    <div className="font-bold mt-2">{campaign.title}</div>
                                    <p className="text-gray-500 text-sm mb-2">{campaign.description?.[0]}</p>
                                </div>
                                <img
                                    src={campaign.image?.[0]}
                                    alt="Campaign"
                                    className="w-40 h-32 object-cover rounded-lg shadow"
                                />
                            </div>
                            {/* Progress */}
                            <div className="mt-4 mb-4">
                                <div className="flex justify-between items-center text-sm mb-1">
                                    <span>
                                        LKR {campaign.collectedAmount?.toLocaleString()} raised of LKR {campaign.goalAmount?.toLocaleString()} goal
                                    </span>
                                    <span>{percent}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded">
                                    <div
                                        className="h-2 bg-black rounded transition-all"
                                        style={{ width: `${percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default Over_view;

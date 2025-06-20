import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Campaign_List = ({campaign}) => {
    const {campaigns, currency, axios, fetchCampaigns, navigate } = useAppContext()
    
    const toggleEmergency = async (id, isEmergency)=>{
        try {
            const { data } = await axios.post('/api/campaign/emergency', {id, isEmergency})
            if(data.success){
                fetchCampaigns();
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="no-scrollbar flex-1 overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Campaigns</h2>
                <div className="flex flex-col items-center  w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Campaign</th>
                                <th className="px-4 py-3 font-semibold truncate">Category</th>
                                <th className="px-4 py-3 font-semibold truncate hidden md:block">Goal</th>
                                <th className="px-4 py-3 font-semibold truncate">Emergency</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {campaigns.map((campaign) => (
                                <tr className="border-t border-gray-500/20">
                                    <td onClick={()=> {navigate(`admin/campaign-list/${campaign._id}`); scrollTo(0,0)}} key={campaign._id} className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate ">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={campaign.image[0]} alt="campaign" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{campaign.title}</span>
                                    </td>
                                    <td className="px-4 py-3">{campaign.category}</td>
                                    <td className="px-4 py-3 max-sm:hidden">{currency}{" "}{campaign.goalAmount}</td>
                                    <td className="px-4 py-3">
                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                            <input onClick={()=>toggleEmergency(campaign._id, !campaign.isEmergency)} checked={campaign.isEmergency} type="checkbox" className="sr-only peer" />
                                            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Campaign_List
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import { Link,useParams } from 'react-router-dom';

const Campaign_DetailPage = () => {

    const { campaigns, navigate, currency, addToCart } = useAppContext()
    const { id } = useParams()
    const [relatedCampaigns, setRelatedCampaigns] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [progress, setProgress] = useState(0);

    const campaign = campaigns.find((item) => item._id === id);

    // Animate progress bar
    useEffect(() => {
        let anim;
        if (progress < campaign.progress) {
            anim = setTimeout(() => setProgress((p) => {
                const next = p + 0.02;
                return next >= campaign.progress ? campaign.progress : next;
            }), 16);
        }
        return () => clearTimeout(anim);
    }, [progress, campaign.progress]);

    useEffect(() => {
        if (campaigns.length > 0) {
            let campaignsCopy = campaigns.slice();
            campaignsCopy = campaignsCopy.filter((item) => campaign.category === item.category)
        }
    }, [campaigns])

    useEffect(() => {
        setThumbnail(campaign?.image[0] ? campaign.image[0] : null)
    }, [campaign])

    return campaign && (
        <div className="mt-12 pl-5">
            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {campaign.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{campaign.title}</h1>

                    <div className="mt-6">
                        {/* <p className="text-gray-500/70 line-through">MRP: {currency}{campaign.price}</p> */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-gray-200 w-full h-2 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-2 rounded-full transition-all duration-700" style={{ width: `${progress * 100}%` }}></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-600">{Math.round(progress * 100)}%</span>
                        </div>

                        <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1 text-xl">
                                {/* Donor SVG (user icon) */}
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#64748b" /></svg>
                                {campaign.donors} Donors
                            </div>
                            <div className="flex items-center gap-1 text-xl">
                                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#64748b" strokeWidth="2" /></svg>
                                {campaign.daysLeft} days left
                            </div>
                        </div>




                        <p className="text-2xl font-medium">Goal: {currency}{campaign.goal_amount.toLocaleString()}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Campaign</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {campaign.description[0]}
                    </ul>
                </div>

            </div>

            <div className="flex flex-col items-center mt-10">
                <p className="text-base font-medium mt-6">Our Story</p>
                <ul className="list-disc ml-4 mt-6 text-gray-500/70">
                    {campaign.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

};

export default Campaign_DetailPage
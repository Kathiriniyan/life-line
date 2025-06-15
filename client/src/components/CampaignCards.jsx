import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const SHARE_OPTIONS = [
  // ... (your share options remain unchanged)
];

function getDaysLeft(endDate) {
  const now = new Date();
  const end = new Date(endDate);
  // If end date is at midnight, add 1 day for inclusivity if needed
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : 0;
}

const CampaignCards = ({ campaign }) => {
  const [progress, setProgress] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const { navigate } = useAppContext();

  // Calculate real progress
  const campaignProgress = campaign.goalAmount && campaign.collectedAmount
    ? Math.min(campaign.collectedAmount / campaign.goalAmount, 1)
    : 0;

  // Animate progress bar
  useEffect(() => {
    let anim;
    if (progress < campaignProgress) {
      anim = setTimeout(() => setProgress((p) => {
        const next = p + 0.02;
        return next >= campaignProgress ? campaignProgress : next;
      }), 16);
    }
    return () => clearTimeout(anim);
  }, [progress, campaignProgress]);

  // Calculate days left
  const daysLeft = getDaysLeft(campaign.endDate);

  if (!campaign.isApprove) return null;

  return (
    <div
      className="group border border-gray-300 rounded-xl bg-white shadow-md p-4 max-w-sm mx-auto relative"
      onClick={() => {
        navigate(`/donate/${campaign.category.toLowerCase()}/${campaign._id}`);
        scrollTo(0, 0);
      }}
    >
      {/* Emergency + Share/Fav Row */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          {campaign.isEmergency && (
            <>
              <span className="text-red-600">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fee2e2" />
                  <path d="M12 8v4m0 4h.01" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-xs text-red-600 font-semibold">Emergency</span>
            </>
          )}
        </div>
        <div
          className="flex items-center gap-2 relative"
          onMouseEnter={e => { e.stopPropagation(); setShowShare(true); }}
          onMouseLeave={e => { e.stopPropagation(); setShowShare(false); }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="hover:text-red-500"
            onClick={e => {
              e.stopPropagation();
              setIsFav(f => !f);
            }}
            aria-label="Favorite"
          >
            {isFav ? (
              <svg width="20" height="20" fill="#e11d48" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="#e11d48" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            )}
          </button>
          {/* Share Button (with hover) */}
          <div onClick={e => e.stopPropagation()}>
            <button className="hover:text-blue-500" aria-label="Share">
              <svg width="20" height="20" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" fill="#3b82f6" /><circle cx="6" cy="12" r="3" fill="#a7f3d0" /><circle cx="18" cy="19" r="3" fill="#fde68a" /><path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" stroke="#333" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
            {showShare && (
              <div className="absolute right-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg py-2 px-3 flex flex-row gap-2 animate-fade-in min-w-[120px]">
                {SHARE_OPTIONS.map(opt => (
                  <a
                    key={opt.name}
                    href={opt.url ? opt.url(window.location.href) : undefined}
                    onClick={opt.action ? (e) => { e.preventDefault(); opt.action(window.location.href); } : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
                    style={{ color: opt.color }}
                    title={opt.name}
                  >
                    {opt.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="group-hover:scale-106 transition flex justify-center items-center bg-gray-100 rounded-md h-36 mb-3">
        {campaign.image && campaign.image[0] ? (
          <img src={campaign.image[0]} alt="" className="object-cover w-full h-full rounded-md" />
        ) : (
          <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#f3f4f6" /><path d="M10 38L18 30l5 5 9-9 6 6" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="16" cy="18" r="3" stroke="#a1a1aa" strokeWidth="2" /></svg>
        )}
      </div>

      {/* Title, Category, Desc */}
      <h2 className="font-semibold text-primary text-base mb-1 line-clamp-2">{campaign.title}</h2>
      <p className="text-xs font-semibold text-indigo-600 mb-1 capitalize">{campaign.category}</p>
      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{campaign.description[0]}</p>

      {/* Goal + Location */}
      <div className="flex justify-between">
        <div className="mb-2">
          <span className="text-xs font-medium">Goal : </span>
          <span className="font-bold text-sm text-gray-800">LKR {campaign.goalAmount?.toLocaleString()}</span>
        </div>
        <div className="mb-2 flex gap-1 items-center">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#64748b" /></svg>
          <span className="font-bold text-sm text-gray-800">{campaign.address}</span>
        </div>
      </div>

      {/* Progress Bar Animated */}
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-gray-200 w-full h-2 rounded-full overflow-hidden">
          <div className="bg-red-500 h-2 rounded-full transition-all duration-700" style={{ width: `${progress * 100}%` }}></div>
        </div>
        <span className="text-xs font-semibold text-gray-600">{Math.round(progress * 100)}%</span>
      </div>

      {/* Donors & Days Left */}
      <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#64748b" /></svg>
          {campaign.donors || 0} Donors
        </div>
        <div className="flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#64748b" strokeWidth="2" /></svg>
          {daysLeft} days left
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={e => {
            e.stopPropagation();
            navigate(`/donate/${campaign.category.toLowerCase()}/${campaign._id}`);
            scrollTo(0, 0);
          }}
          className="flex-1 border-2 border-primary text-primary rounded-md py-1 font-medium hover:bg-primary/10 transition"
        >View Campaign</button>
        <button
          onClick={e => e.stopPropagation()}
          className="flex-1 bg-primary text-white rounded-md py-1 font-semibold hover:bg-primary-dull transition"
        >Donate Now</button>
      </div>
    </div>
  );
};

export default CampaignCards;

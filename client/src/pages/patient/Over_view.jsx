import React from "react";

// Dummy data (replace with props or context as needed)
const user = {
    name: "Sophia Carter",
    joined: "Joined 2021",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your image
};

const campaign = {
    title: "Help me fight cancer",
    description: "I'm raising funds to cover my medical expenses for cancer treatment. Your support means the world to me.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400", // Replace with your image
    raised: 6000,
    goal: 10000,
};

const transactions = [
    { date: "2023-08-15", amount: "$100", status: "Completed" },
    { date: "2023-08-10", amount: "$50", status: "Completed" },
    { date: "2023-08-05", amount: "$200", status: "Completed" },
];

const updates = [
    {
        icon: (
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
        ),
        text: "Thank you for your support!",
        date: "2023-08-15",
    },
    {
        icon: (
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 21V8h6v13M12 3v5m8 4h-1.5a2.5 2.5 0 01-5 0H8a2 2 0 000 4h8a2 2 0 000-4zm-6 9h2v2h-2v-2z"></path>
            </svg>
        ),
        text: "Campaign launched",
        date: "2023-08-01",
    },
];

const Over_view = () => {
    const percent = Math.round((campaign.raised / campaign.goal) * 100);

    return (
        <div className=" mx-auto p-4 md:py-8 md:px-6">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Dashboard</h1>

            <div className="border-primary/30 border-1 p-10 rounded-xl shadow-xl">
                {/* Campaign */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 border-">
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg">Campaign</h3>
                        <div className="font-bold mt-2">{campaign.title}</div>
                        <p className="text-gray-500 text-sm mb-2">{campaign.description}</p>
                    </div>
                    <img
                        src={campaign.image}
                        alt="Campaign"
                        className="w-40 h-32 object-cover rounded-lg shadow"
                    />
                </div>

                {/* Progress */}
                <div className="mt-4 mb-4">
                    <div className="flex justify-between items-center text-sm mb-1">
                        <span>
                            ${campaign.raised.toLocaleString()} raised of ${campaign.goal.toLocaleString()} goal
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

        </div>
    );
};

export default Over_view;

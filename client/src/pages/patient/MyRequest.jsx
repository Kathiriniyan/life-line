import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const MyRequest = () => {
  const { campaigns, patient, axios, fetchCampaigns } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ campaignId: '', amount: '', message: '' });
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load my requests
  React.useEffect(() => {
    const loadRequests = async () => {
      if (!patient) return;
      try {
        const { data } = await axios.get('/api/donationrequest/my-requests');
        if (data.success) setRequests(data.requests);
      } catch { }
    };
    loadRequests();
  }, [axios, patient]);

  // My campaigns only
  const myCampaigns = campaigns.filter(c => c.patientId === patient?._id);

  // Helper to get current request for a campaign (if any)
  const getCurrentRequest = campaignId =>
    requests.find(r => r.campaign._id === campaignId && r.status === "Pending");

  // Open form
  const openRequestForm = campaign => {
    setForm({
      campaignId: campaign._id,
      amount: '',
      message: '',
      maxAmount: campaign.collectedAmount
    });
    setShowForm(true);
  };

  // Submit request
  const submitRequest = async (e) => {
    e.preventDefault();
    if (Number(form.amount) > Number(form.maxAmount)) {
      toast.error('Amount exceeds collected amount');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post('/api/donationrequest/add', {
        campaignId: form.campaignId,
        amount: Number(form.amount),
        message: form.message,
      });
      if (data.success) {
        toast.success('Request submitted');
        setShowForm(false);
        // Refetch requests:
        const res = await axios.get('/api/donationrequest/my-requests');
        setRequests(res.data.requests || []);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error('Error submitting request');
    }
    setLoading(false);
  };

  // Cancel request
  const cancelRequest = async (id) => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/donationrequest/cancel', { id });
      if (data.success) {
        toast.success('Request cancelled');
        setRequests(reqs => reqs.filter(r => r._id !== id));
      } else {
        toast.error(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8">Withdrawal Requests</h2>

      {/* List campaigns */}
      <div className="space-y-8">
        {myCampaigns.length === 0 && (
          <div className="text-gray-400">You have not created any campaigns.</div>
        )}
        {myCampaigns.map(campaign => {
          const pending = getCurrentRequest(campaign._id);
          return (
            <div key={campaign._id} className="border rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between bg-white shadow">
              <div>
                <div className="font-bold text-lg">{campaign.title}</div>
                <div className="text-gray-500 text-sm mb-1">Collected: <b>LKR {campaign.collectedAmount?.toLocaleString()}</b></div>
                <div className="text-gray-500 text-sm">Goal: LKR {campaign.goalAmount?.toLocaleString()}</div>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                {!pending ? (
                  <button
                    onClick={() => openRequestForm(campaign)}
                    className="bg-primary px-4 py-2 text-white rounded hover:bg-primary-dull transition mt-3 md:mt-0"
                  >
                    Request Amount
                  </button>
                ) : (
                  <div className="flex flex-col items-end">
                    <span className="text-orange-600 font-bold mb-1">Pending Request: LKR {pending.amount}</span>
                    <span className="text-gray-700 mb-1">Reason: {pending.message}</span>
                    <button
                      disabled={loading}
                      onClick={() => cancelRequest(pending._id)}
                      className="text-xs px-3 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                    >
                      Cancel Request
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center">
          <form
            className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full flex flex-col gap-5"
            onSubmit={submitRequest}
          >
            <h3 className="text-lg font-bold mb-1">Request Withdrawal</h3>
            <div>
              <label className="font-semibold">Amount (max LKR {form.maxAmount?.toLocaleString()}):</label>
              <input
                type="number"
                min="1"
                max={form.maxAmount}
                required
                value={form.amount}
                onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">Reason:</label>
              <textarea
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                rows={2}
              />
            </div>
            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white font-bold px-5 py-2 rounded hover:bg-primary-dull transition"
              >
                Submit
              </button>
              <button
                type="button"
                disabled={loading}
                className="px-5 py-2 rounded border"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyRequest;

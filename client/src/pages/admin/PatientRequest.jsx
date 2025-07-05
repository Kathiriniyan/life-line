import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAppContext } from '../../context/AppContext'

const PatientRequest = () => {
  const [requests, setRequests] = useState([])
  const { navigate } = useAppContext()

  useEffect(() => {
    const fetchRequests = async () => {
      const { data } = await axios.get('/api/donation-request/list')
      if (data.success) setRequests(data.requests)
    }
    fetchRequests()
  }, [])

  // Handle reject
  const handleReject = async (id) => {
    const adminReply = prompt("Enter reason for rejection:")
    if (!adminReply) return
    const { data } = await axios.post('/api/donation-request/reject', { id, adminReply })
    if (data.success) {
      toast.success("Request rejected")
      setRequests(reqs => reqs.map(r => r._id === id ? { ...r, status: 'Rejected', adminReply } : r))
    } else toast.error(data.message)
  }

  // Handle send amount
  const handleSend = async (id) => {
    const { data } = await axios.post('/api/donation-request/send', { id })
    if (data.success) {
      toast.success(data.message)
      setRequests(reqs => reqs.map(r => r._id === id ? { ...r, status: 'Sended', adminReply: 'Amount will be credited soon' } : r))
    } else toast.error(data.message)
  }

  return (
    <div className="p-6 w-5xl max-w-full mx-auto">
      <h2 className="text-2xl mb-6">Patient Withdrawal Requests</h2>
      <div className="grid gap-6">
        {requests.map(req => (
          <div key={req._id} className="bg-white shadow p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <div className="font-bold text-primary">Campaign: {req.campaign?.title}</div>
              <div>Requested Amount: <b>LKR {req.amount}</b></div>
              <div>Status: <span className={
                req.status === "Pending" ? "text-yellow-600" :
                req.status === "Rejected" ? "text-red-600" :
                "text-green-600"
              }>{req.status}</span></div>
              {req.status === "Rejected" && <div>Reason: {req.adminReply}</div>}
              <div>Patient: {req.patientId?.name} ({req.patientId?.email})</div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              {req.status === "Pending" && (
                <>
                  <button onClick={() => handleSend(req._id)} className="bg-green-500 px-4 py-2 rounded text-white">Send Amount</button>
                  <button onClick={() => handleReject(req._id)} className="bg-red-500 px-4 py-2 rounded text-white">Reject</button>
                </>
              )}
              {req.status === "Sended" && (
                <span className="bg-blue-200 px-4 py-2 rounded text-blue-900">Amount Will Be Sent</span>
              )}
              {req.status === "Rejected" && (
                <span className="bg-gray-200 px-4 py-2 rounded text-gray-900">Rejected</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientRequest

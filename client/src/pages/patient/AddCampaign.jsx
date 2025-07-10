import React, { useState, useEffect } from 'react'
import { assets, categories } from '../../assets/assets';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const AddCampaign = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [endDate, setEndDate] = useState('');
    const [addresses, setAddresses] = useState([])
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [account, setAccount] = useState([])
    const [showAccount, setShowAccount] = useState(false)
    const [selectedAccount, setSelectedAccount] = useState(null)

    const { axios, navigate, patient } = useAppContext()

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            const campaignData = {
                title,
                description: description.split('\n'),
                category,
                goalAmount,
                endDate,
                address: selectedAddress?._id,   
                account: selectedAccount?._id
            }

            const formData = new FormData();
            formData.append('campaignData', JSON.stringify(campaignData));
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i])
            }

            const { data } = await axios.post('/api/campaign/add', formData)

            if (data.success) {
                toast.success(data.message);
                setTitle('')
                setDescription('')
                setCategory('')
                setGoalAmount('')
                setEndDate('')
                setFiles([])
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    const getPatientAddress = async ()=>{
        try {
            const { data } = await axios.get('/api/address/get');
            if(data.success){
                setAddresses(data.addresses)
                if(data.addresses.length > 0){
                    setSelectedAddress(data.addresses[0])
                }
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getPatientAccount = async ()=>{
    try {
        const { data } = await axios.get('/api/account/get');
        if(data.success){
            setAccount(data.accounts)         
            if(data.accounts.length > 0){     
                setSelectedAccount(data.accounts[0])
            }
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}


    useEffect(()=>{
    if(patient){
        getPatientAddress();
        getPatientAccount();
    }
},[patient])


    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Medical Document & Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>

                                <input
                                    onChange={(e) => {
                                        const updatedFiles = [...files]
                                        updatedFiles[index] = e.target.files[0]
                                        setFiles(updatedFiles)
                                    }}
                                    type="file" id={`image${index}`} hidden />

                                <img className="max-w-24 cursor-pointer" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="campaign-title">Campaign Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title}
                        id="campaign-title" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="campaign-description">Campaign Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description}
                        id="campaign-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} value={category}
                        id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {categories.map((item, index) => (
                            <option key={index} value={item.path}>{item.path}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="goal-amount">Goal Amount</label>
                        <input onChange={(e) => setGoalAmount(e.target.value)} value={goalAmount}
                            id="goal-amount" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="end-date">End Date</label>
                        <input onChange={(e) => setEndDate(e.target.value)} value={endDate}
                            id="end-date" type="date" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>

                <div className="w-full rounded p-5 max-md:mt-16 border border-gray-300/70">

                    <div className="mb-6">
                        <p className="text-sm font-medium uppercase">Select Address</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-500">
                                    {selectedAddress
                                        ? `${selectedAddress.street},${selectedAddress.city},${selectedAddress.province}`
                                        : "No address found"}
                                </p>
                                <button
                                    onClick={() => setShowAddress(!showAddress)}
                                    className="text-primary hover:underline cursor-pointer"
                                >
                                    Change
                                </button>
                            </div>
                            {/* Dropdown now inline, not absolute */}
                            {showAddress && (
                                <div className="py-1 bg-white border border-gray-300 text-sm w-full rounded mt-2">
                                    {addresses.map((address, index) => (
                                        <p
                                            key={index}
                                            onClick={() => {
                                                setSelectedAddress(address);
                                                setShowAddress(false);
                                            }}
                                            className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {address.street},{address.city},{address.province}
                                        </p>
                                    ))}
                                    <p
                                        onClick={() => navigate("/patient/add-address")}
                                        className="text-primary text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                                    >
                                        Add address
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <hr className="border-gray-300 mb-5" />

                    {/* Repeat same logic for bank details below... */}
                    <div className="mb-6">
                        <p className="text-sm font-medium uppercase">Bank details</p>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex justify-between items-start">
                                <p className="text-gray-500">
                                    {selectedAccount
                                        ? `${selectedAccount.fullName},${selectedAccount.bankName},${selectedAccount.accNumber},${selectedAccount.branch}`
                                        : "No Bank Details found"}
                                </p>
                                <button
                                    onClick={() => setShowAccount(!showAccount)}
                                    className="text-primary hover:underline cursor-pointer"
                                >
                                    Change
                                </button>
                            </div>
                            {showAccount && (
                                <div className="py-1 bg-white border border-gray-300 text-sm w-full rounded mt-2">
                                    {account.map((accounts, index) => (
                                        <p
                                            key={index}
                                            onClick={() => {
                                                setSelectedAccount(accounts);
                                                setShowAccount(false);
                                            }}
                                            className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {accounts.fullName},{accounts.bankName},{accounts.accNumber},{accounts.branch}
                                        </p>
                                    ))}
                                    <p
                                        onClick={() => navigate("/patient/add-bank")}
                                        className="text-primary text-center cursor-pointer p-2 hover:bg-indigo-500/10"
                                    >
                                        Add Bank Account
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <hr className="border-gray-300" />
                </div>


                <button className="px-8 w-full flex flex-col gap-1 py-2.5 bg-primary text-white font-medium rounded cursor-pointer hover:bg-primary-dull">ADD</button>
            </form>
        </div>
    )
}

export default AddCampaign
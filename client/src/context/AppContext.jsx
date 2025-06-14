import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyCampaigns, dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    
    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isPatient, setIsPatient] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [showPatientLogin, setShowPatientLogin] = useState(false)
    const [campaigns, setCampaigns] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})
    const [favouriteCampaigns, setFavouriteCampaigns] = useState({})


    // Fetch Admin Status
    const fetchPatient = async ()=>{
        try {
            const {data} = await axios.get('/api/patient/is-auth');
            if(data.success){
                setIsPatient(true)
            }else{
                setIsPatient(false)
            }
        } catch (error) {
            setIsPatient(false)
        }
    }

    const fetchAdmin = async ()=>{
        try {
            const {data} = await axios.get('/api/admin/is-auth');
            if(data.success){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
        } catch (error) {
            setIsAdmin(false)
        }
    }

    // Fetch user auth Status, userData and Cart Items
    const fetchUser = async ()=>{
        try {
            const { data } = await axios.get('/api/user/is-auth');
            if(data.success){
                setUser(data.user)
                setCartItems(data.user.cartItems)
            }
        } catch (error) {
            setUser(null)
        }
    }


    // //Featch all campaign
    // const fetchCampaigns = async ()=>{
    //     // try {
    //     //     const {data } = await axios.get('/api/campaign/list')
    //     //     if(data.success){
    //     //         setCampaigns(data.campaigns)
    //     //     }else{
    //     //         toast.error(data.message)
    //     //     }
    //     // } catch (error) {
    //     //     toast.error(error.message)
    //     // }
    // }

    //Featch all campaign
    const fetchCampaign = async ()=>{
        setCampaigns(dummyCampaigns)
    }

    



    //Get Cart Item Count
    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    


    useEffect(()=>{
        //fetchUser()
        //fetchAdmin()
        //fetchCampaigns()
        fetchCampaign()
    },[])


   

    const value = {navigate, user, setUser, setIsPatient, isPatient, showUserLogin, setShowUserLogin, campaigns, currency, cartItems, searchQuery, setSearchQuery,axios,fetchCampaign, setCartItems,isAdmin, setIsAdmin}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}
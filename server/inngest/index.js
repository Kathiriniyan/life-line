import { Inngest } from "inngest";
import Donor from "../models/Donor.js";


// Create a client to send and receive events
export const inngest = new Inngest({ id: "Life-Line" });

//Inngest Function to save user data to a database
const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created' },
    async ({ event })=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const donorData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await Donor.create(donorData)
    }
    
)

// Inngest Function  to delete user from database
const syncUserDeletion = inngest.createFunction(
    {id: 'delet-user-with-clerk'},
    {event: 'clerk/user.deleted' },
    async ({ event })=>{
        const {id} = event.data
        await Donor.findOneAndDelete(id)
    }  
)

// Inngest Function  to update user data from database
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated' },
    async ({ event })=>{
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const donorData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await Donor.findByIdAndUpdate(id, donorData)
    }  
)

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation, 
    syncUserDeletion,
    syncUserUpdation
];
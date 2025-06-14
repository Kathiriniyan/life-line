import { Inngest } from "inngest";
import Donor from "../models/Donor.js";
import connectDB from '../configs/db.js'; // Make sure to import your connection utility

export const inngest = new Inngest({ id: "Life-Line" });

// Create user
const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        await connectDB();  // <-- Connect to MongoDB first!
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const donorData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await Donor.create(donorData)
    }
);

// Delete user
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        await connectDB();  // <-- Connect!
        const { id } = event.data;
        await Donor.findByIdAndDelete(id);
    }
);

// Update user
const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        await connectDB();  // <-- Connect!
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const donorData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await Donor.findByIdAndUpdate(id, donorData);
    }
);

export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];

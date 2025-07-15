// server/utils/mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS, 
  },
});

export const sendDonationReceipt = async ({ to, name, amount, campaignTitle }) => {
  return transporter.sendMail({
    from: `"LifeLine" <${process.env.GMAIL_USER}>`,
    to,
    subject: "Donation Receipt - LifeLine",
    html: `
      <h2>Thank you for your donation!</h2>
      <p>Hi ${name || "Donor"},</p>
      <p>Your donation of <b>LKR ${Number(amount).toLocaleString()}</b> to <b>${campaignTitle}</b> was successful.</p>
      <p>We are grateful for your generosity.</p>
      <br/>
      <p>- LifeLine Team</p>
    `,
  });
};

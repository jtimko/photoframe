import { NextApiRequest, NextApiResponse } from "next";
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;

    const client = twilio(accountSid, token);

    const data = req.body;

    const supportedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (data.MediaContentType0 && supportedMimes.includes(data.MediaContentType0)) {
        console.log("True");
    } else {
        console.log("Nope");
    }
}
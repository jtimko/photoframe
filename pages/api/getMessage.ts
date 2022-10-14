import { NextApiRequest, NextApiResponse } from "next";
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const token = process.env.TWILIO_AUTH_TOKEN;

    const client = twilio(accountSid, token);

    const {body} = req.body;

    console.log(JSON.stringify(body));
}
import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, writeFileSync } from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    const supportedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (data.MediaContentType0 && supportedMimes.includes(data.MediaContentType0)) {
        const file = await fetch(data.MediaUrl0);
        console.log(JSON.stringify(file));
        // const image = readFileSync(file.);
        // writeFileSync('../../public/', image);

    } else {
        console.log("Nope");
    }
}
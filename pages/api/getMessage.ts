import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, writeFileSync } from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    const supportedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (data.MediaContentType0 && supportedMimes.includes(data.MediaContentType0)) {
        await fetch(data)
        .then(d => d.json())
        .then(json => console.log(json));
    } else {
        console.log("Nope");
    }
}
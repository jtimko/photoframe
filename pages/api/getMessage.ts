import { NextApiRequest, NextApiResponse } from "next";
import { saveAs } from "file-saver";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    const supportedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (data.MediaContentType0 && supportedMimes.includes(data.MediaContentType0)) {
        // const file = await fetch(data.MediaUrl0).then(async d => {
        //     const s = await d;
        //     console.log(JSON.stringify(d));
        // })
        saveAs(data.MediaUrl0, "poster.jpg");
    } else {
        console.log("Nope");
    }
}
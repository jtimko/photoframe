import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync, writeFileSync } from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;
    const supportedMimes = ["image/jpeg", "image/jpg", "image/png"];

    if (data.MediaContentType0 && supportedMimes.includes(data.MediaContentType0)) {
        await fetch(data)
        .then(d => d.json())
        .then(json => console.log(json, getCircularReplacer()));
    } else {
        console.log("Nope");
    }
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
import connectDB from "@/lib/mongodb"

import Url from "@/models/Url";
import { nanoid } from "nanoid";

export async function GET() {
  await connectDB();
  const urls = await Url.find();
  return Response.json({ success: true, data: urls });
}

export async function POST(req: { json: () => PromiseLike<{ url: any; name: any; }> | { url: any; name: any; }; }) {
  await connectDB();
  const { url, name } = await req.json();
  if (!url) return Response.json({ success: false, message: "Missing URL" }, { status: 400 });
  if (!name) return Response.json({ success: false, message: "Missing New URL Name" }, { status: 400 });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const newUrl = await Url.create({id: nanoid(6), url: url, name: name});

  return Response.json({
    success: true,
    data: {
      ...newUrl._doc,            
      shortLink: `${baseUrl}/${newUrl.name}` 
    },
  });
}

export async function PUT(req: { json: () => any; }){
  await connectDB();
  const  data  = await req.json()
  if (!data._id) {
    return Response.json({ success: false, message: "Missing id" }, { status: 400 });
  }
  const updated = await Url.findByIdAndUpdate(
    data._id,
    { $inc: { clicks: 1 } }, 
    { new: true }            
  );

  if (!updated) {
    return Response.json({ success: false, message: "URL not found" }, { status: 404 });
  }
  return Response.json({ success: true, data: updated });
}
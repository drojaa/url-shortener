import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Url from "@/models/Url";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  await connectDB();


  const record = await Url.findOne({ name: params.name });

  if (!record) {
    return new Response("Not found", { status: 404 });
  }

 
  record.clicks += 1;
  await record.save();

  
  return redirect(record.url);
}

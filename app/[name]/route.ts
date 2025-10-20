import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Url from "@/models/Url";

export async function GET(
  _request: Request,
  context: { params: Promise<{ name: string }> } // 👈 params is now a Promise
) {
  const { name } = await context.params; // ✅ await before use

  await connectDB();

  const record = await Url.findOne({ name });

  if (!record) {
    return new Response("Not found", { status: 404 });
  }

  record.clicks += 1;
  await record.save();

  return redirect(record.url);
}

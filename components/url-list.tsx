import Link from "next/link";
import { Button } from "./ui/button";
import { Copy, EyeIcon } from "lucide-react";
import { useState, useEffect } from "react";



export default function UrlList({ urls }: { urls: any[] }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(baseUrl, "!!!!!!!!!!!!!!!")
  if (!urls || urls.length === 0)
    return <p className="text-stone-500">No URLs yet.</p>;
 
  
  const handleClick = (u: any) => {
     fetch("/api/shorten/urls", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: u._id }),
    });

   


  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-600 mb-3">Recent URLs</h2>

      <ul className="space-y-2">
        {urls.map((u) => (
   
          <li
          
            key={u._id}
            className="flex items-center justify-between  p-3 rounded"
          >
            {/* Left side: original link */}
            <Link
              href={`/${u.name}`}
              className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(u)}
            >
              {`${baseUrl}/${u.name}`}
            </Link>

            {/* Right side: buttons and views */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
               
             
              </Button>

              <div className="flex items-center gap-2 text-sm text-stone-600">
                <EyeIcon size={16} className="h-4 w-4" />
                <p>{u.clicks ?? 0} views</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

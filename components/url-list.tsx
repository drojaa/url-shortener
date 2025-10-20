import Link from "next/link";
import { Button } from "./ui/button";
import { Copy, Eye } from "lucide-react";

export default function UrlList() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-600 mb-3">Recent URLs</h2>
      <ul className=" space-y-2">
        <div className=" border flex space-between"> 
        <li className=" border border-solid p-2 rounded">
          {/* Left side */}
          <div className="ml-auto">
            <Link
              href="https://www.summerwalkermusic.com"
              className="truncate text-blue-600 hover:underline block"
            >
              https://www.summerwalkermusic.com
            </Link>
          </div>
          </li>
          {/* Right side */}
          <div >
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          
          </div>
          </div>
      </ul>
    </div>
  );
}
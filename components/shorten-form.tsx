import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react";
export default function ShortenForm(){
const [url, setUrl] = useState("")

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        console.log(url)
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="space-y-2">
            <Input 
            type="url" 
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL to shorten" 
            required
            />
            <Button className="w-full p-2 bg-stone-400" type="submit">Shorten URL</Button>
            </div>
        </form>
    )
}
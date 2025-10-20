import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState, useEffect, use } from "react";

export default function ShortenForm({
    onUrlAdded,
}: {
    onUrlAdded: () => void
}){

    const [url, setUrl] = useState("");
    const [name, setName] = useState("");


    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('/api/shorten/urls', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url, name })
            })
            setUrl(""); // reset 
            setName("")
            onUrlAdded();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="space-y-2">
            <Input 
            type="url" 
            placeholder="Enter URL to shorten" 
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
             <Input 
            type="text" 
            placeholder="Enter new URL name" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <Button className="w-full p-2 bg-stone-400" type="submit">Shorten URL</Button>
            </div>
        </form>
    )
}
import ShortenForm from "./shorten-form"
import UrlList from "./url-list"
import { useState , useEffect} from "react"
export default function UrlShortenerContainer(){
    const [urls, setUrls] = useState([])
    // Fetch all DB
    const fetchItems = async () => {
        try {
          const res = await fetch("/api/shorten/urls");
          const data = await res.json();
          setUrls(data.data); 
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        
      fetchItems();
     
    }, []);
    
    return (<div>
        <ShortenForm onUrlAdded={fetchItems} />
        <UrlList urls={urls} />
    </div>
    )
}
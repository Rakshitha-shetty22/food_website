import { useState, useEffect } from 'react'
import { CDNURL } from "../constants/const"

const useFetchinfo = (resId) => {
    const [resinfo, setResinfo] = useState(null);
    
    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async() => {
        const data = await fetch(CDNURL.MENU_URL + resId);
        const datajson =  await data.json();
        setResinfo(datajson);
    }
    return resinfo;

}

export default useFetchinfo;
import { useEffect, useState } from 'react';

 const useOnlinestatus = () => {
 const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=> {
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    }, [])  //here we used useffect becz this is we need to run once

    return onlineStatus;
 }

 export default useOnlinestatus; 
import React, { useEffect, useState } from "react";

function DigitalClock(){
    const [date,setDate]=useState(new Date());
    
    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=> {
        const timeId = setInterval(refreshClock,1000);
        return function cleanup(){
            clearInterval(timeId);
        };
    },[]);

    return(
        <span>
            {date.toLocaleTimeString()}
        </span>
    );
}

export default DigitalClock;
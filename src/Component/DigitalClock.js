import React, { useEffect, useState } from "react";

function DigitalClock({ hourRatio, minuteRatio, secondRatio }){
    const [date,setDate]=useState(new Date());

    let hr = Math.floor(hourRatio*12);
    let min = Math.floor(minuteRatio*60);
    let sec = Math.floor(secondRatio*60);
    // let hr_con ;
    // function hr_In(){
    //     if(hr<=9){
    //       hr_con = 0 + hr
    //     }else{}
    // }
    hr=(hr<10)?"0"+hr:hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

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
            {hr} : {min} : {sec}
        </span>
    );
}

export default DigitalClock;
import React,{useState,useEffect} from "react";

function DigitalClock(){
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(interval);
        }
    },[]);

    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let meridiem=hours>=12 ? "PM" : "AM";

        hours=hours%12 || 12;

        return `${Zero(hours)}:${Zero(minutes)}:${Zero(seconds)} ${Zero(meridiem)}`
    }

    function Zero(number){
        return(
            (number < 10 ? "0" : "") + number
        );
    }
    
    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock
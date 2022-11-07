import { useEffect, useState } from "react";

const useClock = () => {
  const [hours,set_hours]=useState<number>(1)
  const [minutes,set_minutes]=useState<number>(1)
  const [seconds,set_seconds]=useState<number>(1)
  const [start,setstart]=useState(false)

useEffect(()=>{
  let d=new Date()
  set_hours(d.getHours())
  set_minutes(d.getMinutes())
  set_seconds(d.getSeconds())
},[])

useEffect(()=>{
startClock()
},[])
function startClock(){

  if(seconds){
   let time;
   if(time){
    clearInterval(time)
   }
   setInterval(()=>{
    set_seconds(seconds=>seconds+1)
   },1000)
  }
  else{
let id;
if(id){
  clearTimeout(id)
}

    id=setInterval(()=>{
      setstart(true)
    },1500)
  }
}


if(seconds==60){
  set_seconds(1)
  if(minutes<60){
    set_minutes(min=>min+1)
  }
  else{
    set_minutes(0)
    set_hours(hour=>hour+1)
  }
}

return {hours, minutes, seconds}
};

export default useClock;

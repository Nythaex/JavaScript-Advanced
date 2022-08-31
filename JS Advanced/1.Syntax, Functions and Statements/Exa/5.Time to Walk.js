function calculateTime(stepsNeeded,lengthOfFoot,studentSpeed){
      
     
      let distanceMeters = stepsNeeded * lengthOfFoot;
      let time=Math.floor(distanceMeters/500)*60;
      let speedMetersSec = studentSpeed / 3.6;
      time += distanceMeters / speedMetersSec;
     
      let hour=Math.floor(time/3600).toFixed(0).padStart(2,'0');
      let min=Math.floor(time/60).toFixed(0).padStart(2,'0');
      let sec=Math.round(time%60).toFixed(0).padStart(2,'0');
      
      console.log(`${hour}:${min}:${sec}`)
}

calculateTime(4000,0.60,5)
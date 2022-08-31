function radar(speed, zone) {

    let speedLimit;
    switch (zone) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
        default: return 1;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let speedDiff = speed-speedLimit;
        let status;
       if (speedDiff<=20) {
        status = 'speeding';
           
       } else if (speedDiff<=40) {
        status = 'excessive speeding';
       }else{
        status = 'reckless driving';
       }
       
       
    

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

}

radar(40,'city')



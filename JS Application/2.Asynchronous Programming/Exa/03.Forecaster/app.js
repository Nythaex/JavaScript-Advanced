function attachEvents() {
    let locationElement=document.getElementById('location');
    let submitButtonElement=document.getElementById('submit');
    let forecastElement=document.getElementById('forecast');
    
    let conditions={
        'Sunny':'☀',
        'Partly sunny':'⛅',
        'Overcast':'☁',
        'Rain':'☂',
        'Degrees':'°',

    }

    submitButtonElement.addEventListener('click', async (e)=>{
        forecastElement.style.display='block'
        
        try{
            let code='';
            let locationsResponse=await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            let locations=await locationsResponse.json();
            for (const location of locations) {
                if(location.name===locationElement.value){
                   code=location.code;
                   break;
                }
            }
        

            let currentElement=document.getElementById('current');
            let upcomingElement=document.getElementById('upcoming');
    
          let responseToday=await fetch('http://localhost:3030/jsonstore/forecaster/today/'+code);
            let today=await responseToday.json();
             let topDivElement=document.createElement('div');
             topDivElement.classList.add('forecasts');


             let conditionSymbolSpanElement=document.createElement('span');
             conditionSymbolSpanElement.classList.add("condition&nbsp;symbol");
             conditionSymbolSpanElement.textContent=conditions[today.forecast.condition];

             let topSpanElement=document.createElement('span');
             topSpanElement.classList.add('condition');

             let firstSpanElement=document.createElement('span');
             firstSpanElement.classList.add('forecast-data');
             firstSpanElement.textContent=today.name;

             let secondSpanElement=document.createElement('span');
             secondSpanElement.classList.add('forecast-data');
             secondSpanElement.textContent=`${today.forecast.low}°/${today.forecast.high}°`;
          
             let thirdSpanElement=document.createElement('span');
             thirdSpanElement.classList.add('forecast-data');
             thirdSpanElement.textContent=today.forecast.condition;


             topSpanElement.appendChild(firstSpanElement);
             topSpanElement.appendChild(secondSpanElement);
             topSpanElement.appendChild(thirdSpanElement);
             topDivElement.appendChild(conditionSymbolSpanElement);
             topDivElement.appendChild(topSpanElement);

             currentElement.appendChild(topDivElement);

            let responseUpcoming=await fetch('http://localhost:3030/jsonstore/forecaster/upcoming/'+code);
            let upcoming=await responseUpcoming.json();

            topDivElement=document.createElement('div');
            topDivElement.classList.add('forecast-info');

            for (const weather of upcoming.forecast) {
            topSpanElement=document.createElement('span');
            topSpanElement.classList.add('upcoming');

             firstSpanElement=document.createElement('span');
            firstSpanElement.classList.add('symbol');
            firstSpanElement.textContent=conditions[weather.condition]

            secondSpanElement=document.createElement('span');
            secondSpanElement.classList.add('forecast-data');
            secondSpanElement.textContent=`${weather.low}°/${weather.high}°`;
         
             thirdSpanElement=document.createElement('span');
            thirdSpanElement.classList.add('forecast-data');
            thirdSpanElement.textContent=weather.condition;   

            topSpanElement.appendChild(firstSpanElement);
            topSpanElement.appendChild(secondSpanElement);
            topSpanElement.appendChild(thirdSpanElement);
            topDivElement.appendChild(topSpanElement);
            upcomingElement.appendChild(topDivElement)
            }


        }catch(error){
           
           console.log(error);
           forecastElement.textContent='Error'


        }
    })

}

attachEvents();
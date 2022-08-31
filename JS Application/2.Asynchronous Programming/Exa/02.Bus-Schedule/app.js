function solve() {

    let departInputElement=document.getElementById('depart');
    let arriveinputElement=document.getElementById('arrive');
    let textElement=document.querySelector('#info span')

    let stop={
        next:'depot'
    }

   async function depart() {
          
    try{
        let response=await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`)
        
        let result=await response.json();
        console.log(result);
        textElement.textContent=`Next stop ${stop.next}`;
        stop=result;
        
       departInputElement.setAttribute('disabled',true);
       arriveinputElement.removeAttribute('disabled');
    }
    catch{
        textElement.textContent=`Error`;
        
        arriveinputElement.setAttribute('disabled',true);
        departInputElement.setAttribute('disabled',true);
    }

   }

    function arrive() {
        textElement.textContent=`Arriving at ${stop.name}`;
        arriveinputElement.setAttribute('disabled',true);
        departInputElement.removeAttribute('disabled');
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
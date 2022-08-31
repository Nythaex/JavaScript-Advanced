function getInfo() {
    let inputIdElement=document.getElementById('stopId');

    let stopNameElement=document.getElementById('stopName');
    stopNameElement.textContent='Loading...';
    let busesElement=document.getElementById('buses');
      busesElement.innerHTML='';

      fetch('http://localhost:3030/jsonstore/bus/businfo/'+inputIdElement.value)
      .then(response=>response.json())
      .then(result=>{
        stopNameElement.textContent=result.name;
       
        Object.keys(result.buses).forEach(bus=>{
            let liElement=document.createElement('li');
              liElement.textContent=`Bus ${bus} arrives in ${result.buses[bus]} minutes`
             busesElement.appendChild(liElement);
        })

         

      }).catch(error=>{
        stopNameElement.textContent='Error';
      });


}
function filter(data, criteria) {

    let [prop,value] = criteria.split('-')

    let people = JSON.parse(data);
   
  
    if (criteria === 'all'){
        console.log(people.map((p,i)=> `${i}. ${p.first_name} ${p.last_name} - ${p.email}`).join('\n'));

    }else{
    
        console.log(people.filter(p=>p[prop]===value).map((p,i)=> `${i}. ${p.first_name} ${p.last_name} - ${p.email}`).join('\n'));
    }

} 

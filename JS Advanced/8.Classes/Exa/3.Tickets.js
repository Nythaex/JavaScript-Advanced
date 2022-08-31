function creatTickets(tickets,criteria){

    class Ticket{
        constructor( destination,price,status){
           this.destination=destination;
           this.price=parseFloat(price);
           this.status=status;
        }       
    }

    
    let objects=tickets.map(s=>{
           let [destination,price,status]=s.split('|');
           return new Ticket(destination,price,status)
    }).sort((t1,t2)=>{
        if(typeof t1[criteria]=='number'){
          return  t1[criteria]<t2[criteria]
        }
      return  t1[criteria].localeCompare(t2[criteria]) 
    })

    console.log(objects);
 return objects

}

creatTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
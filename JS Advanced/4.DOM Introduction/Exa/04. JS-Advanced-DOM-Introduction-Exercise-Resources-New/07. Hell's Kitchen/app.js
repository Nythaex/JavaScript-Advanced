function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputElements = JSON.parse(document.querySelector('#inputs textarea').value);
      let regex = /"[\w\s-,]+"/;

      let restaurants = [];


      for (let row of inputElements) {
         let restaurant = {
            workers: []
         };

         let prop = row.split(' - ');
         let name = prop[0];
         let people = prop[1].split(', ');
         let same=false;
         restaurant.name = name;

         if (restaurants.some(r => r.name === name)) {
            restaurant = restaurants.find(r => r.name === name);
            same=true;
         
         }

         for (const person of people) {
            let personAttr = person.split(' ');

            restaurant.workers.push({
               name: personAttr[0],
               salary: Number(personAttr[1])
            })
         }
         if(!same){
            restaurants.push(restaurant)
         }
             

      }
      let averageSalary = 0;
      let name;
      let bestSalary = 0;


      for (let restaurant of restaurants) {
         console.log(restaurant);

         let highest = -11110;
         let sum = 0;
         for (const person of restaurant.workers) {
            sum += person.salary;
            if (person.salary > highest) {
               highest = person.salary;
            }
         }
         let average = sum / restaurant.workers.length;
         console.log(sum);
         if (average > averageSalary) {
            averageSalary = average;
            bestSalary = highest;
            name = restaurant.name;
         }

      }
      document.querySelector('#bestRestaurant p').textContent = `Name: ${name} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

      let workers = restaurants.find(r => r.name === name).workers;
      workers.sort((w1, w2) => w2.salary > w1.salary);

      let output = '';
      for (const worker of workers) {
         output += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      document.querySelector('#workers p').textContent = output;
   }
}

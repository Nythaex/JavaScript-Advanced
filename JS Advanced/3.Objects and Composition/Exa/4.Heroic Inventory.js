function createHeroes(heroes){
       let allHeroes=[];
      heroes.forEach(hero => {
         let heroInfo=hero.split(' / ');
         let items=heroInfo[2]?heroInfo[2].split(', '):[];

         allHeroes.push({name:heroInfo[0],level:Number(heroInfo[1]),items})

      });
      console.log(JSON.stringify(allHeroes));
}



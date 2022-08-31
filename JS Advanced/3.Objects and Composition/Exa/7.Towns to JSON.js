function toJson(table){

 
    let towns=[];

    for (let index = 1; index < table.length; index++) {
      let  prop=table[index].split(' | ')

      let longitude=Number(prop[2].substring(0,prop[2].length-1)).toFixed(2)
            towns.push({
                Town:prop[0].substring(2),
                Latitude:Number(Number(prop[1]).toFixed(2)),
                Longitude:Number(longitude)
            })
    }
    console.log(JSON.stringify(towns));

}


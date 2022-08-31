function wordsUppercase(str){
   let regex=new RegExp(/\W+/);

   let arr=str.split(regex);

   for (let index = 0; index < arr.length; index++) {
    arr[index]=arr[index].toUpperCase();
   }
      let result=arr.join(', ');
      if (result.charAt(result.length-2)===',') {
          result=result.slice(0,-2)
      }

   console.log(result);
}
wordsUppercase('Functions in JS can be nested, i.e. hold other functions.')
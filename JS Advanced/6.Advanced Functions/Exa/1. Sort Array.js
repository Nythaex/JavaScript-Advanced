function sort(array, type) {
    if (type === 'asc') {
         array.sort((a,b)=>a-b)
    } else if (type === 'desc') {

        array.sort((a,b)=>b-a)
    }
   return array;
}
function rotate(arr,steps){
      for (let index = 0; index < steps; index++) {
        let num=arr.pop();
        arr.unshift(num)

      }
    console.log(arr.join(' '));
}

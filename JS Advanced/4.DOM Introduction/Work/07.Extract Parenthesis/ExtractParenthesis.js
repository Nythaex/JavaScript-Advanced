function extract(content) {
      let str=document.getElementById(content).textContent;
      let regex=/\(([^)]+)\)/g;

      let result=[];
      
      let match=regex.exec(str)
      while(match){
         result.push(match[1])
        match=regex.exec(str)
      }
      return(result.join('; '));

}


function search() {
   let search = document.getElementById('searchText').value;
   let towns =Array.from(document.querySelectorAll('#towns li'));
   let count = 0;

     for (let town of towns) {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = "underline";
         count++;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = "none";
      }

     }

   document.getElementById('result').textContent = count+' matches found';
}

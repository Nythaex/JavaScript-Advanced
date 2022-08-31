function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
  

   let rows = document.querySelectorAll('tbody tr')

   function onClick() {
      let searchText = document.getElementById('searchField').value;

      for (const row of rows) {
         if (searchText.value !== '' && row.textContent.includes(searchText)) {
            row.className = 'select'

         } else {
            row.className = ''
         }

      }

   }
}

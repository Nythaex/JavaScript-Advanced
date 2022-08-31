let sectionsElements=document.querySelectorAll('section');
let year;
const mountNumber={
    Jan:1,
    Feb:2,
    Mar:3,
    Apr:4,
    May:5,
    Jun:6,
    Jul:7,
    Aug:8,
    Sept:9,
    Oct:10,
    Nov:11,
    Dec:12,

}

Array.from(sectionsElements).forEach(section=>{
     section.style.display='none';
})

let yearsElements=document.getElementById('years');
yearsElements.style.display='block';

yearsElements.addEventListener('click',(e)=>{
 if(e.target.tagName==='TD'){
    yearsElements.style.display='none';
   let month=document.getElementById('year-'+e.target.textContent.trim());
   year=e.target.textContent.trim()
    month.style.display='block';
     month.addEventListener('click',getDays)
 }
})

function getDays(e){
    if(e.target.tagName==='TD'){
        e.target.parentNode.parentNode.style.display='none';
       let days=document.getElementById(`month-${year}-${mountNumber[e.target.children[0].textContent.trim()]}`);
       console.log(`month-${year}-${e.target.children[0].textContent.trim()}`);
        days.style.display='block';
     }
}
function solve() {

  let text = document.getElementById('input').value;
  let sentencesArray = text.split('.').filter(e=>e!=='');

  while(sentencesArray.length>0){
    let sentences =sentencesArray.splice(0,3).join('. ')+'.';
    let paragraph=document.createElement('p');
    paragraph.textContent=sentences;
    document.getElementById('output').appendChild(paragraph)
  }




}
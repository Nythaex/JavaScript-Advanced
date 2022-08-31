function calculateDate(year,month,day){
  let date= new Date(year+'-'+month+'-'+day);
  date.setDate(date.getDate()-1)
return date.getFullYear()+'-'+Number(date.getMonth()+1)+'-'+date.getDate();
}
console.log(calculateDate(2016,9,30));

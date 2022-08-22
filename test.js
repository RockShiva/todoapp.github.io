const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 

const date = new Date();
const cMonth = month[date.getMonth()]; 
const cDate = date.getDate();
const cYear = date.getFullYear();
 
console.log(cMonth); // month
console.log(cDate); // date 
console.log(cYear); // year


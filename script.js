 document.querySelector(".cal-btn").addEventListener("click",()=>{
    let inputDate = document.querySelector(".date").value;
if(! inputDate){
    alert("please! Enter the date?")
}
 });
let dateSelected = new Date(inputDate);
  let todayDate =  new Date();



  let years = todayDate.getFullYear() - dateSelected.getFullYear();
  let months = todayDate.getMonth() - dateSelected.getMonth();
  let days = todayDate.getDate() - dateSelected.getDate();



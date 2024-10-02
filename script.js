let inputDate = document.querySelector(".date").value;
let dateSelected = new Date(inputDate);
  let todayDate =  new Date();



  let years = todayDate.getFullYear() - dateSelected.getFullYear();
  let months = todayDate.getMonth() - dateSelected.getMonth();
  let days = todayDate.getDate() - dateSelected.getDate();
  console.log(years,days,months)

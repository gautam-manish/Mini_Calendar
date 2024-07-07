const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

day.innerHTML = weekDays[today.getDay()];
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
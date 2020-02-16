// Set the date we're counting down to
let countDownDate = new Date("Feb 6, 2021 12:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // distance is in Milliseconds * 1000 gets seconds * 60 gets minutes * 60 gets hours, * 24 gets the days   
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cdTableDays").innerHTML = days;
  document.getElementById("cdTableHours").innerHTML = hours;
  document.getElementById("cdTableMinutes").innerHTML = minutes;
  document.getElementById("cdTableSeconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cdTableDays").innerHTML = "EXPIRED";
    document.getElementById("cdTableHours").innerHTML = "EXPIRED";
    document.getElementById("cdTableMinutes").innerHTML = "EXPIRED";
    document.getElementById("cdTableSeconds").innerHTML = "EXPIRED";
  }
}, 1000);
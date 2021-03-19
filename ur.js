// Set the date we're counting down to
var countDownDate = new Date("May 16, 2021 00:00:00").getTime();
var outdatedDate =  new Date("Jul 15, 2021 23:59:00").getTime();
const jagtNotStarted = "Bukkejagten starter om: "
const jagtStarted = "Bukkejagten er startet!"
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    var outdatedDistance = outdatedDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "t "
  + minutes + "m " + seconds + "s ";
  document.getElementById("countdownText").innerHTML = jagtNotStarted;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdownText").innerHTML = jagtStarted;
  }

  if (now >= outdatedDate){
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countdownText").innerHTML = "Bukkejagten er SLUT";
  }
}, 1000);


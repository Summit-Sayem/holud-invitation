//Mobile Menu Toggle

const menuButton = document.getElementById('menuButton');

const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('menuMobile');
  menuButton.classList.toggle('closeButton');

  return;
})

//RSVP Event

const attendingButton = document.getElementById('attending');
const regretsButton = document.getElementById('regrets');

let userName = document.getElementById('name');
let userMessage = document.getElementById('message');

attendingButton.addEventListener('click', function(event) {
  addResponse(new Date(), userName.value, userMessage.value, "Yes");

  return;
})

regretsButton.addEventListener('click', function(event) {
  addResponse(new Date(), userName.value, userMessage.value, "No");

  return;
})

function addResponse(t, n, m, r) {
  if (n === "") {
    alert("Please enter your name");

    userName.focus();
    return;
  }

  else if (n === "Summit Sayem") {
    alert("Hello World!");

    //userName.value = "";
    userName.focus();
    return;
  }

  else {
    let response = {
      time: t,
      name: n,
      message: m,
      attending: r
    };

    console.log(response);
    localStorage.setItem("response", JSON.stringify(response));

    if (r === "Yes") {
      alert("Look forward to seeing you!");
    }

    else if (r === "No") {
      alert("We will miss you!");
    }

    else {
      alert("Response Recorded");
    }

    //userName.value = "";
    //userMessage.value = "";
    userName.focus();
    return;
  }
}

//Countdown Timer

var countDownDate = new Date("May 13, 2022 15:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "May 15, 2022 7 PM";
  }
}, 1000);
var backToMichDate = new Date(2020, 6, 3, 17);
var backToMichTime = backToMichDate.getTime();

// const dateString = backToMich.toLocaleDateString();
let dateSpan = document.getElementById('returnDate');
dateSpan.innerHTML = backToMichDate.toLocaleDateString();

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = backToMichTime - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById('timer').innerHTML =
    '<div class="days"> \
  <div class="numbers">' +
    days +
    '</div>days</div> \
<div class="hours"> \
  <div class="numbers">' +
    hours +
    '</div>hours</div> \
<div class="minutes"> \
  <div class="numbers">' +
    minutes +
    '</div>minutes</div> \
<div class="seconds"> \
  <div class="numbers">' +
    seconds +
    '</div>seconds</div> \
</div>';
}, 1000);

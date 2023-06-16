let donutCounter = 0;

let clicks = 0;
let clickCost = 100;








function buyCursor() {
  if (donutCounter >= clickCost) {
    donutCounter = donutCounter - clickCost;
    clicks++;
    clickCost = Math.round(clickCost * 1.15);

    document.getElementById("donutCounter").innerHTML =  donutCounter;
    document.getElementById("clickCost").innerHTML =  clickCost;
    document.getElementById("clicks").innerHTML =  clicks;
  }
}

// Adds increments of 1.
function addToScore() {
  donutCounter++
  document.getElementById("donutCounter").innerHTML =  donutCounter;
}


// Sets interval of autoclicks per second.
setInterval(function() {
  donutCounter = donutCounter + clicks;
  document.getElementById("donutCounter").innerHTML = donutCounter;
}, 1000); // 1000ms per second


// Resets values to default
function reset() {
  donutCounter = 0;
  clicks = 0;
  clickCost = 100;

  document.getElementById("clickCost").innerHTML =  clickCost;
  document.getElementById("clicks").innerHTML =  clicks;
}


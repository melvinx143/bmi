let wt = document.querySelector(".wt");
let ht = document.querySelector(".ht");
let uw = document.querySelector(".under_weight");
let nw = document.querySelector(".normal_weight");
let ow = document.querySelector(".over_weight");
let obesity = document.querySelector(".obesity");

let bmiresult = document.querySelector(".bmiresult");
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (ht.value == "" || wt.value == "") {
    document.querySelector(".bmiresult").innerHTML = "Please Choose a value";
  } else {
    ow.style.backgroundColor = " ";
    uw.style.backgroundColor = " ";
    nw.style.backgroundColor = " ";
    obesity.style.backgroundColor = " ";

    let resultsfound = ([wt.value / (ht.value * ht.value)] * 10000).toFixed(1);
    document.querySelector(".bmiresult").innerHTML = resultsfound;

    if (resultsfound < 18.5) {
      uw.style.backgroundColor = "green";
    } else if (18.5 < resultsfound && resultsfound <= 24.9) {
      nw.style.backgroundColor = "yellow";
    } else if (25 < resultsfound && resultsfound <= 29.9) {
      ow.style.backgroundColor = "orange";
    } else {
      obesity.style.backgroundColor = "red";
    }
    wt.disabled = true;
    ht.disabled = true;
    submitButton.disabled = true;
  }
});

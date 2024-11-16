let weight = document.querySelector(".wt");
let height = document.querySelector(".ht");

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  height = height.value / 100;
  weight = weight.value;
  let result = weight / (height * height);
  document.querySelector(".resultbmi").innerHTML = result.toFixed(1);
  let bstatus = "";
  document.querySelector(".Overweight").style.backgroundColor = "none";
  document.querySelector(".underweightbmi").style.backgroundColor = "none";
  document.querySelector(".healthy").style.backgroundColor = "none";
  document.querySelector(".Obesity").style.backgroundColor = "none";

  if (result <= 18.5) {
    bstatus = "underweightbmi";
    document.querySelector(".underweightbmi").style.backgroundColor = "Green";
    document.querySelector(".Obesity").style.color="white";
  } else if (result >= 18.5 && result <= 24.9) {
    bstatus = "healthy";
    document.querySelector(".healthy").style.backgroundColor = "yellow";
    document.querySelector(".Obesity").style.color="white";
  } else if (result >= 25 && result <= 29.9) {
    bstatus = "Overweight";
    document.querySelector(".Overweight").style.backgroundColor = "orange";
    document.querySelector(".Obesity").style.color="white";
  } else if (result >= 30) {
    bstatus = "Obesity";
    document.querySelector(".Obesity").style.backgroundColor = "red";
    document.querySelector(".Obesity").style.color="white";
    console.log(4);

    console.log(4);
  }
});

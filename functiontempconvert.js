var unit = prompt("For temperature conversion, enter 1 for fahrenheit or 2 for celcius");
var temp = prompt("Enter temperature to be converted");
var tempCal = tempConvert(unit, temp);

function tempConvert(unit, temp) {
  if (unit == "1") {
    tempCal = ((temp-32) * (5/9));
    console.log(tempCal);
  } else if (unit == "2") {
    tempCal = ((temp * (9/5) + 32));
    console.log(tempCal);
  } else {
    console.log("invalid")
  }
}

// Speed test buton from DOM
const speedTest = document.querySelector('#speedTest-btn')
// Add a click event listener to the speed test button
speedTest.addEventListener("click", function () {
    const speedInput = document.querySelector('#speed');
    const speed = parseInt(speedInput.value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;
    if (speed <= speedLimit) {
      alert("Ok");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      alert(`SLOW DOWN!
      Demerit Points: ${demeritPoints}`);
      if (demeritPoints >= 12) {
        alert("License suspended");
      }
    }
  });
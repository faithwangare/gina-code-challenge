// Get the grader button element from the DOM
const grader = document.querySelector('#grader-btn')
// Adding vent listeners to grade generator
grader.addEventListener('click', function(){
    const marksInput = document.querySelector('#marks');
    const marks = parseInt(marksInput.value);
    let grade = "";
    //Determine grae using if-else statements
    if (marks >= 79 && marks <= 100) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 50 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else if (marks >= 0 && marks <= 39 ){
        grade = "E";
      } else {
        grade = "INVALID INPUT";
      }
        alert(`Grade: ${grade}`);
});
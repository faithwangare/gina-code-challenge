//seleting relevant HTML ELEMENTS.
const payeeCalc = document.querySelector("#paye-btn");
const nhifCalc = document.querySelector("#nhif-btn");
const nssfCalc = document.querySelector("#nssf-btn");
const netSalaryCalc = document.querySelector("#netSalary-btn");
// This event listener calculates the Pay As You Earn.
payeeCalc.addEventListener("click", function() {
    const bscSalaryInput = document.querySelector("#bscSalary");
    let basicSalary = parseInt(bscSalaryInput.value);
    const personalRelief = 2800;
    const taxablePay = basicSalary - personalRelief;
    let payeeTax = 0;
    if (taxablePay > 0 && taxablePay <= 24000) {
      payeeTax = taxablePay * 0.1;
    } else if (taxablePay > 24001 && taxablePay <= 32333) {
      payeeTax = taxablePay * 0.25;
    } else if (taxablePay > 32333 ) {
      payeeTax = taxablePay * 0.3;
    } else {
      payeeTax = "NIL";
    }
     alert("Payee Tax: Ksh " + payeeTax);
     return payeeTax;
  });
  // This event listener calculates the National Hospital Insurance Fund.
  nhifCalc.addEventListener("click", function(){
    const bscSalaryInput = document.querySelector("#bscSalary");
    let basicSalary = parseInt(bscSalaryInput.value);
    let nhifDeduction = 0;
    if (basicSalary <= 5999) {
      nhifDeduction = 150;
    } else if (basicSalary > 5999 && basicSalary <=7999) {
      nhifDeduction = 300;
    }  else if (basicSalary > 7999 && basicSalary <=11999) {
      nhifDeduction = 400;
    }  else if (basicSalary > 11999 && basicSalary <=14999) {
      nhifDeduction = 500;
    }  else if (basicSalary > 14999 && basicSalary <=19999) {
      nhifDeduction = 600;
    } else if (basicSalary > 19999 && basicSalary <=24999) {
      nhifDeduction = 750;
    } else if (basicSalary > 24999 && basicSalary <=29999) {
      nhifDeduction = 300;
    } else if (basicSalary > 29999 && basicSalary <=34999) {
      nhifDeduction = 300;
    } else if (basicSalary > 34999 && basicSalary <=39999) {
      nhifDeduction = 300;
    } else if (basicSalary > 39999 && basicSalary <=44999) {
      nhifDeduction = 300;
    } else if (basicSalary > 44999 && basicSalary <=49999) {
      nhifDeduction = 300;
    } else if (basicSalary > 49999 && basicSalary <=59999) {
      nhifDeduction = 300;
    } else if (basicSalary > 59999 && basicSalary <=69999) {
      nhifDeduction = 300;
    } else if (basicSalary > 69999 && basicSalary <=79999) {
      nhifDeduction = 300;
    } else if (basicSalary > 79999 && basicSalary <=89999) {
      nhifDeduction = 300;
    } else if (basicSalary > 89999 && basicSalary <=99999) {
      nhifDeduction = 300;
    } else if (basicSalary > 99999) {
      nhifDeduction = 300;
    } else {
      nhifDeduction = 0;
    }
   alert(`The NHIF Deduction is KSH: ${nhifDeduction} `);
   return nhifDeduction;
  })
  // This event listener calculates the National Social Security Fund .
  nssfCalc.addEventListener('click', function() {
     const bscSalaryInput = document.querySelector("#bscSalary")
     let pensionablePay = parseInt(bscSalaryInput.value);
     let nssfDeduction = pensionablePay * 0.06;
     alert(`The NSSF deduction is KSH: ${nssfDeduction}`);
     return nssfDeduction;
  })
  // This event listener calculates the net salary by subtracting the sum of the payee tax, NHIF deduction, and NSSF deduction from the basic salary
  netSalaryCalc.addEventListener("click", function(){
  let netSalary = 0;
    netSalary = basicSalary - (payeeTax+nhifDeduction+nssfDeduction);
    alert(`The net salary is KSH: ${netSalary}`)
  })
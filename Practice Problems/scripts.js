/**************** Coding Challenge 3
 ****************************************************************/
// let bills = [100, 40, 300];
// let finalTip = [];
// let finalBill = [];

// bills.forEach(function(bill) {
//   if (bill < 50) {
//     bill *= 0.2;
//   } else if (bill >= 50 && bill <= 200) {
//     bill *= 0.15;
//   } else {
//     bill *= 0.1;
//   }
//   finalTip.push(bill);
// });

// var sum = bills.map(function(num, idx) {
//   debugger;
//   finalBill.push(num + finalTip[idx]);
// });

// console.log(finalTip);
// console.log(finalBill);

/**************** Coding Challenge 4
 ****************************************************************/

// let mark = {
//   name: "Mark Stokes",
//   mass: 50,
//   height: 1.5,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// let john = {
//   name: "Mark Cole",
//   mass: 60,
//   height: 1.8,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
// mark.calcBMI();
// john.calcBMI();

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark.name + " has the highest BMI. His BMI is " + mark.bmi);
// } else if (mark.bmi < john.bmi) {
//   console.log(john.name + " has the highest BMI. His BMI is " + john.bmi);
// } else {
//   console.log("They have the same BMI");
// }

/**************** Coding Challenge 5
 ****************************************************************/

let john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalBill: [],
  tipCalc: function() {
    this.bills.forEach(bill => {
      let percentage;
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips.push(bill * percentage);
      this.finalBill.push(bill + bill * percentage);
    });
  }
};

let mark = {
  fullName: "Mark Smith",
  bills: [77, 375, 110, 45],
  tips: [],
  finalBill: [],
  tipCalc: function() {
    this.bills.forEach(bill => {
      let percentage;
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill <= 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips.push(bill * percentage);
      this.finalBill.push(bill + bill * percentage);
    });
  }
};

function calcAverage(tips) {
  return tips.reduce((a, b) => a + b / tips.length);
  // let sum = 0;
  // tips.forEach(bill => {
  //   sum += bill;
  // });
  // return sum / tips.length;
}

john.tipCalc();
mark.tipCalc();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(mark, john);

if (mark.average > john.average) {
  console.log(
    "I told you mark was the better tipper with an average tip of " +
      mark.average
  );
} else if (mar
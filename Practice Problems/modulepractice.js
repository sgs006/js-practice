/////////////////////////////////////
//////The Module Pattern

var budgetController = (function() {
  var x = 23;

  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var UIController = (function() {
  // Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);

//Seperation of concerns: each operation works independently.
//Created 3 modules that each work and control different things. We have the UIController which
//controls the UI. The budgetController that does all the calculations. And the controller
//which will act as the go between for the other two. This way all the operations are seperate
//and if you need to make significant changes to one you will not have to mess up your code in
//the other sections. This makes your code easier to modify later and also easier to read and understand.

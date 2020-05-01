//const submitButton = document.getElementById('submit');

//submitButton.addEventListener('click', function(event) {

//  let peopleNumber = document.getElementById('people').value;
//  let pizzaNumber = document.getElementById('pizzas').value;
//  let sliceNumber = document.getElementById('slices').value;

//  let pizzaSlices = sliceNumber * pizzaNumber;
//  let fullTotal = pizzaSlices / peopleNumber;
//  let sharedSlices = Math.floor(fullTotal);
//  let sharedTotal = sharedSlices * peopleNumber;
//  let reminderSlices = pizzaSlices - sharedTotal;

//  let result = `You have ${sharedSlices} each and ${reminderSlices} left to fight over!`;
//  const target = document.getElementById('answer');
//  target.innerHTML = result;
//});


(function () {

  let userInterface = {
    _submitButton: document.getElementById('submit'),
    people: document.getElementById('people'),
    pizza: document.getElementById('pizzas'),
    slice: document.getElementById('slices'),
    _displayTarget: document.getElementById('answer'),
    clickStart () {
      this._submitButton.addEventListener('click', event => {

        pizzaDivider._divideSlices(this.people.value, this.pizza.value, this.slice.value);
        this.displayResults(pizzaDivider.sharedSlices, pizzaDivider.reminderSlices);

      });
    },

    displayResults (sliceEach, sliceLeft) {
      this._displayTarget.textContent = `You have ${sliceEach} each and ${sliceLeft} left to fight over!`;
    }
  };


  let pizzaDivider = {
    sharedSlices: 0,
    reminderSlices: 0,
    _divideSlices (peopleNumber, pizzaNumber, sliceNumber) {

      let pizzaSlices = sliceNumber * pizzaNumber,
      fullTotal = pizzaSlices / peopleNumber;

      this.sharedSlices = Math.floor(fullTotal);
      let sharedTotal = this.sharedSlices * peopleNumber;
      this.reminderSlices = pizzaSlices - sharedTotal;
    },
  };

  userInterface.clickStart();

})();

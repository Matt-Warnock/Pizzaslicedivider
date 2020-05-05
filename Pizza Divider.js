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
    submitButton: document.getElementById('submit'),
    _people: document.getElementById('people'),
    _pizza: document.getElementById('pizzas'),
    _slice: document.getElementById('slices'),
    displayTarget: document.getElementById('answer'),
    get people () {
      return this._people.value;
    },
    get pizza () {
      return this._pizza.value;
    },
    get slice () {
      return this._slice.value;
    },
    clickStart () {
      this.submitButton.addEventListener('click', event => {

        pizzaDivider.divideSlices(this.people, this.pizza, this.slice);
        this._displayResults(pizzaDivider._sharedSlices, pizzaDivider._reminderSlices);

      });
    },

    _displayResults (sliceEach, sliceLeft) {
      this.displayTarget.textContent = `You have ${sliceEach} each and ${sliceLeft} left to fight over!`;
    }
  };


  let pizzaDivider = {
    _sharedSlices: 0,
    _reminderSlices: 0,
    divideSlices (peopleNumber, pizzaNumber, sliceNumber) {

      let pizzaSlices = sliceNumber * pizzaNumber,
      fullTotal = pizzaSlices / peopleNumber;

      this._sharedSlices = Math.floor(fullTotal);
      let sharedTotal = this._sharedSlices * peopleNumber;
      this._reminderSlices = pizzaSlices - sharedTotal;
    },
  };

  userInterface.clickStart();

})();

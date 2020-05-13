(function () {
  class UserInterface {
    constructor(ids) {
      this._people = document.getElementById(ids.people);
      this._pizza = document.getElementById(ids.pizza);
      this._slice = document.getElementById(ids.slices);
      this.submitButton = document.getElementById(ids.button);
      this.displayTarget = document.getElementById(ids.display);
    }
    get people () {
      return this._people.value;
    }
    get pizza () {
      return this._pizza.value;
    }
    get slice () {
      return this._slice.value;
    }
    clickStart () {
      this.submitButton.addEventListener('click', event => {

        pizzaDivider.divideSlices(this.people, this.pizza, this.slice);
        this._displayResults(pizzaDivider._sharedSlices, pizzaDivider._reminderSlices);

      });
    }

    _displayResults (sliceEach, sliceLeft) {
      this.displayTarget.textContent = `You have ${sliceEach} each and ${sliceLeft} left to fight over!`;
    }
  }

  class PizzaCalculator {
    constructor() {
      this._sharedSlices = 0;
      this._reminderSlices = 0;
    }
    divideSlices (peopleNumber, pizzaNumber, sliceNumber) {

      let pizzaSlices = sliceNumber * pizzaNumber,
      fullTotal = pizzaSlices / peopleNumber;

      this._sharedSlices = Math.floor(fullTotal);
      let sharedTotal = this._sharedSlices * peopleNumber;
      this._reminderSlices = pizzaSlices - sharedTotal;
    }
  }

  var ids = {
    people: 'people',
    slices: 'slices',
    pizza: 'pizzas',
    button: 'submit',
    display: 'answer'
  };

  const pizzaDivider = new PizzaCalculator();
  const pizzaUi = new UserInterface(ids);
  pizzaUi.clickStart();

})();

(function () {
  class UserInterface {
    constructor(peopleId, pizzaId, sliceId ,buttonId, answerId) {
    this._people = document.getElementById(peopleId);
    this._pizza = document.getElementById(pizzaId);
    this._slice = document.getElementById(sliceId);
    this.submitButton = document.getElementById(buttonId);
    this.displayTarget = document.getElementById(answerId);
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

const pizzaDivider = new PizzaCalculator();
const pizzaUi = new UserInterface('people', 'pizzas', 'slices', 'submit', 'answer');
pizzaUi.clickStart();

})();

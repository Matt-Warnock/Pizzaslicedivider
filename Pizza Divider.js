const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(event) {
  let peopleNumber = document.getElementById('people').value;
  let pizzaNumber = document.getElementById('pizzas').value;
  let sliceNumber = document.getElementById('slices').value;
  let pizzaSlices = sliceNumber * pizzaNumber;
  let fullTotal = pizzaSlices / peopleNumber;
  let sharedSlices = Math.floor(fullTotal);
  let reminderSlices = fullTotal - sharedSlices;
  Math.round(reminderSlices *= peopleNumber);
  let result = `You have ${sharedSlices} each and ${reminderSlices} left to fight over!`;
  const target = document.getElementById('answer');
  target.innerHTML = result;
});

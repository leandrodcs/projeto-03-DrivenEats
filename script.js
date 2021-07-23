function SelectFood(typeOfFood, food) {
  if (document.querySelector("." + typeOfFood + ".selected")) {
    let oldFood = document.querySelector("." + typeOfFood + ".selected");
    oldFood.classList.remove("selected");
    let oldCheck = document.querySelector(".appear." + typeOfFood);
    oldCheck.classList.remove("appear");
  }

  let card = document.querySelector("." + food);
  card.classList.add("selected");
  let check = document.querySelector(".check." + food);
  check.classList.add("appear");

  if (
    document.querySelector(".food.selected") &&
    document.querySelector(".drink.selected") &&
    document.querySelector(".dessert.selected")
  ) {
    let confirmButton = document.querySelector(".confirmation");
    confirmButton.classList.add("appear");
  }
}

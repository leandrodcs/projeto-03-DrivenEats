let finalPrice = 0;

function SelectFood(typeOfFood, food) {
  if (document.querySelector("." + typeOfFood + ".selected")) {
    let oldFood = document.querySelector("." + typeOfFood + ".selected");
    oldFood.classList.remove("selected");
    let oldCheck = document.querySelector(".appear." + typeOfFood);
    oldCheck.classList.remove("appear");
    let oldPrice = document.querySelector(".final-price." + typeOfFood);
    oldPrice.classList.remove("final-price");
    let oldFinalOption = document.querySelector(".final-option." + typeOfFood);
    oldFinalOption.classList.remove("final-option");
  }

  let card = document.querySelector("." + food);
  card.classList.add("selected");
  let check = document.querySelector(".check." + food);
  check.classList.add("appear");
  let price = document.querySelector(".price." + food);
  price.classList.add("final-price");
  let finalOption = document.querySelector(".option-name." + food);
  finalOption.classList.add("final-option");

  if (
    document.querySelector(".food.selected") &&
    document.querySelector(".drink.selected") &&
    document.querySelector(".dessert.selected")
  ) {
    let confirmButton = document.querySelector(".confirmation");
    confirmButton.classList.add("appear");
  }
}

function PriceSum() {
  let foodPrice = document.querySelector(".final-price.food").innerHTML;
  foodPrice = foodPrice.replace(",", ".");
  foodPrice = Number(foodPrice);
  let drinkPrice = document.querySelector(".final-price.drink").innerHTML;
  drinkPrice = drinkPrice.replace(",", ".");
  drinkPrice = Number(drinkPrice);
  let dessertPrice = document.querySelector(".final-price.dessert").innerHTML;
  dessertPrice = dessertPrice.replace(",", ".");
  dessertPrice = Number(dessertPrice);
  finalPrice = (foodPrice + drinkPrice + dessertPrice).toFixed(2);
  finalPrice = String(finalPrice);
  finalPrice = finalPrice.replace(".", ",");
}
function whatsappMessage() {
  const finalFood = document.querySelector(".final-option.food").innerHTML;
  const finalDrink = document.querySelector(".final-option.drink").innerHTML;
  const finalDessert = document.querySelector(
    ".final-option.dessert"
  ).innerHTML;

  alert(
    "Olá, gostaria de fazer o pedido:\n- Prato: " +
      finalFood +
      "\n- Bebida: " +
      finalDrink +
      "\n- Sobremesa: " +
      finalDessert +
      "\nTotal: R$ " +
      finalPrice
  );
}

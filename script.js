let finalPrice = 0;
let finalFood = "";
let finalDrink = "";
let finalDessert = "";
let client = "";
let adress = "";
let foodPrice = "";
let drinkPrice = "";
let dessertPrice = "";

function DeselectFood(typeOfFood) {
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
}

function SelectFood(typeOfFood, food) {
  DeselectFood(typeOfFood);
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
  foodPrice = document.querySelector(".final-price.food").innerHTML;
  foodPrice = foodPrice.replace(",", ".");
  foodPrice = Number(foodPrice);
  drinkPrice = document.querySelector(".final-price.drink").innerHTML;
  drinkPrice = drinkPrice.replace(",", ".");
  drinkPrice = Number(drinkPrice);
  dessertPrice = document.querySelector(".final-price.dessert").innerHTML;
  dessertPrice = dessertPrice.replace(",", ".");
  dessertPrice = Number(dessertPrice);
  finalPrice = (foodPrice + drinkPrice + dessertPrice).toFixed(2);
  finalPrice = String(finalPrice);
  finalPrice = finalPrice.replace(".", ",");
  foodPrice = foodPrice.toFixed(2);
  foodPrice = String(foodPrice);
  foodPrice = foodPrice.replace(".", ",");
  drinkPrice = drinkPrice.toFixed(2);
  drinkPrice = String(drinkPrice);
  drinkPrice = drinkPrice.replace(".", ",");
  dessertPrice = dessertPrice.toFixed(2);
  dessertPrice = String(dessertPrice);
  dessertPrice = dessertPrice.replace(".", ",");
}

function orderData() {
  finalFood = document.querySelector(".final-option.food").innerHTML;
  finalDrink = document.querySelector(".final-option.drink").innerHTML;
  finalDessert = document.querySelector(".final-option.dessert").innerHTML;
  document.querySelector(".confirm.food").innerHTML = finalFood;
  document.querySelector(".confirm.food.price").innerHTML = foodPrice;
  document.querySelector(".confirm.drink").innerHTML = finalDrink;
  document.querySelector(".confirm.drink.price").innerHTML = drinkPrice;
  document.querySelector(".confirm.dessert").innerHTML = finalDessert;
  document.querySelector(".confirm.dessert.price").innerHTML = dessertPrice;
  document.querySelector(".final.price").innerHTML = "R$ " + finalPrice;
}
function confirmScreen() {
  PriceSum();
  orderData();
  let confirmPage = document.querySelector(".confirm-page");
  confirmPage.classList.add("appear");
}
function cancelButton() {
  let confirmPage = document.querySelector(".confirm-page");
  confirmPage.classList.remove("appear");
}
function whatsappMessage() {
  client = prompt("Qual é seu nome?");
  adress = prompt("Qual é seu endereço?");
  let message =
    "Olá,%20gostaria%20de%20fazer%20o%20pedido:%0a-%20Prato:%20" +
    finalFood +
    "%0a-%20Bebida:%20" +
    finalDrink +
    "%0a-%20Sobremesa:%20" +
    finalDessert +
    "%0aTotal:%20R$%20" +
    finalPrice +
    "%0a%0aNome:%20" +
    client +
    "%0aEndereço:%20" +
    adress;
  window.location.replace("https://wa.me/5545998022472?text=" + message);
}

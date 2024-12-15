let btnLike = Array.from(document.getElementsByClassName("like"));

function addToFavorite(array) {
  for (let i in array) {
    array[i].addEventListener("click", function () {
      if (array[i].style.color === "red") {
        array[i].style.color = "black";
      } else array[i].style.color = "red";
    });
  }
}
// end change color

// plus btn or increment a product

let plusBtn = Array.from(document.getElementsByClassName("plus-btn"));

function incrementValue(array) {
  let quantity = Array.from(document.getElementsByClassName("Quant"));
  for (let i in array) {
    array[i].addEventListener("click", function () {
      quantity[i].value++;
      totalPrice();
    });
  }
}
// end increment
// minus product
let minBtn = Array.from(document.getElementsByClassName("minus-btn"));
function decrementValue(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
      if (array[i].nextElementSibling.value > 1) {
        array[i].nextElementSibling.value--;
        totalPrice();
      }
    });
  }
}

//end
// delete item
let itemProduct = document.getElementsByClassName("Item");
let delBtn = Array.from(document.querySelectorAll(".delete"));
// so we have difference between HTMLCollection and NodeList
// HTMLCollection always stay static array meaning if the table initialized as 3 elements will stay seeing 3 elements
// NodeList it will be changing when we have any modifications in HTML
function deleteItem(array) {
  for (let i in array) {
    array[i].addEventListener("click", function () {
      //itemProduct[i].style.display = "none"
      // other way to delete item
      array[i].parentElement.remove();
      totalPrice();
    });
  }
}
//end item
//total Price
var finalPrice = document.getElementById("finalPrice");
function totalPrice() {
  var Quant = Array.from(document.getElementsByClassName("Quant"));
  var priceUnit = Array.from(document.getElementsByClassName("price"));

  let result = 0;

  for (let i = 0; i < Quant.length; i++) {
    result += parseFloat(priceUnit[i].innerHTML) * parseInt(Quant[i].value);
  }

  finalPrice.value = result.toFixed(2);

}
// call all functions
decrementValue(minBtn);
deleteItem(delBtn);

incrementValue(plusBtn);

addToFavorite(btnLike);

// end call functions
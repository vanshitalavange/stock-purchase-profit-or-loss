var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocksquantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    outputEl.textContent =
      "You lost " + lossPercentage + "%. Your total loss is " + loss;
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    outputEl.textContent =
      "You gained " + profitPercentage + "%. Your total profit is " + profit;
  } else {
    outputEl.textContent = "No profit no loss";
  }
}
function checkProfitOrLoss() {
  var initial = Number(initialPrice.value);
  var quantity = Number(stocksQuantity.value);
  var current = Number(currentPrice.value);
  calculateProfitAndLoss(initial, quantity, current);
}

submitBtn.addEventListener("click", checkProfitOrLoss);

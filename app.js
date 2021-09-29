var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocksquantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");

// function calculateProfitAndLoss(initial, quantity, current) {

//   if(initial === 0 && quantity === 0 && current === 0){
//     outputEl.textContent="";
//   }
//   else{
//   if(initial === 0||quantity === 0||current === 0)
//   outputEl.textContent="All fields are mandatory 😑";
//   else{
//     outputEl.textContent = "You gained "+percent+"%. Your total profit is "+result+"😇";
//     outputEl.textContent = "You lost "+percent+"%. Your total loss is "+result+"😟";
//     outputEl.textContent = "No Profit, No Loss 😉";
    
   
//   }
// }

// }
// function checkProfitOrLoss() {
//   var initial = Number(initialPrice.value);
//   var quantity = Number(stocksQuantity.value);
//   var current = Number(currentPrice.value);
//   calculateProfitAndLoss(initial, quantity, current);
// }

// submitBtn.addEventListener("click", checkProfitOrLoss);


submitBtn.addEventListener("click", function calculate() {

  if (Number(initialPrice.value) === 0 || Number(stocksQuantity.value) === 0 || Number(currentPrice.value) === 0) {
    outputEl.textContent = "All fields are mandatory 😑";
  } else {

      const prevalue = Number(initialPrice.value) * Number(stocksQuantity.value);

      const currvalue =  Number(currentPrice.value)* Number(stocksQuantity.value);

      const result = currvalue - prevalue;
      console.log(result);
      const percent = (Math.abs(result)/prevalue) *100;

      if (result > 0) {
          outputEl.textContent = "You gained "+percent+"%. Your total profit is "+result+"😇";
      } 
      else {
          if(result < 0){

            outputEl.textContent = "You lost "+percent+"%. Your total loss is "+Math.abs(result)+"😟";
          }
          else{
            outputEl.textContent = "No Profit, No Loss 😉";
          }
          
      }

  }


});

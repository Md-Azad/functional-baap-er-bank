// fetch data from input data

function getUserInputById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValueString = inputElement.value;
    const NumberValue = parseFloat(inputValueString);
    inputElement.value = '';
    return NumberValue;

}

//fetch intial deposit, withdraw, and total balance value;
function getUserInputTextById(inputTextId){
    const inputTextElement = document.getElementById(inputTextId);
    const inputTextValue = inputTextElement.innerText;
    const numberValue = parseFloat(inputTextValue);
    inputTextElement.value = '';
    return numberValue;

}

// set the values to their position 

function setInputs(locationId, newValue){
    const location = document.getElementById(locationId);
    location.innerText = newValue;
}


// // const userGivenDeposit = getUserInputById('depositInput-field');
// // console.log(userGivenDeposit);
// document.getElementById("deposit-btn").addEventListener("click",function(){
//     const userGivenDeposit = getUserInputById('depositInput-field');
//     const currentDeposit = getUserInputTextById('deposit-zero');
//     const totalDeposit = userGivenDeposit+currentDeposit;
//     currentDeposit.innerText = setInputs('deposit-zero',totalDeposit);
//     const currentTotalBalance = getUserInputTextById('initial-total');
//     const newTotal = currentTotalBalance+userGivenDeposit;
//     currentTotalBalance.innerText = setInputs('initial-total',newTotal);
// })
// document.getElementById("withdraw-btn").addEventListener("click",function(){
//     const userGivenWithdraw = getUserInputById('WithdrawInput-field');
//     const currentWithdraw = getUserInputTextById('withdraw-zero');
//     const totalWithdraw = userGivenWithdraw+currentWithdraw;
//      currentWithdraw.innerText = setInputs('withdraw-zero',totalWithdraw);
//     const currentTotalBalanceElement = getUserInputTextById('initial-total');
//     const remainTotal = currentTotalBalanceElement - userGivenWithdraw;
//     currentTotalBalanceElement.innerText = setInputs('initial-total',remainTotal);
// })
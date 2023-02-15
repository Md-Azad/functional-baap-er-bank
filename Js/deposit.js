document.getElementById("deposit-btn").addEventListener("click",function(){
    const userGivenDeposit = getUserInputById('depositInput-field');
    const currentDeposit = getUserInputTextById('deposit-zero');
    const totalDeposit = userGivenDeposit+currentDeposit;
    currentDeposit.innerText = setInputs('deposit-zero',totalDeposit);
    const currentTotalBalance = getUserInputTextById('initial-total');
    const newTotal = currentTotalBalance+userGivenDeposit;
    currentTotalBalance.innerText = setInputs('initial-total',newTotal);
})
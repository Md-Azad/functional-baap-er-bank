document.getElementById("withdraw-btn").addEventListener("click",function(){
    const userGivenWithdraw = getUserInputById('WithdrawInput-field');
    const currentWithdraw = getUserInputTextById('withdraw-zero');
    const totalWithdraw = userGivenWithdraw+currentWithdraw;
     currentWithdraw.innerText = setInputs('withdraw-zero',totalWithdraw);
    const currentTotalBalanceElement = getUserInputTextById('initial-total');
    const remainTotal = currentTotalBalanceElement - userGivenWithdraw;
    currentTotalBalanceElement.innerText = setInputs('initial-total',remainTotal);
})
// getInputValue
function getInputValue(id){
    const inputIdField = document.getElementById(id);
    const inputIdText = inputIdField.value;
    const inputValue = parseFloat(inputIdText);
    inputIdField.value = '';
    return inputValue;
}
// updateBalance
function getUpdated(id, amountValue){
    const textField = document.getElementById(id);
    const amountText = textField.innerText;
    const amount = parseFloat(amountText);
    const totalValue = amount + amountValue;
    textField.innerText = totalValue;
    // return totalValue;
}
// updateTotalBalance or remainingBalance
function updateTotalBalance(amount, isAdding){
    const textField = document.getElementById('balance-total');
    const amountText = textField.innerText;
    const previousAmount = parseFloat(amountText);
    
    /*
    if(isAdding == true){
        const newTotalAmount = previousAmount + amount;
        textField.innerText = newTotalAmount;
    }
    else if(isAdding == false){
        const newTotalAmount = previousAmount - amount;
        textField.innerText = newTotalAmount;
    }
    */

    // anotherOption-JM
    let newTotalAmount;
    if(isAdding == true){
        newTotalAmount = previousAmount + amount;
    }
    else if(isAdding == false){
        newTotalAmount = previousAmount - amount;
    }
    textField.innerText = newTotalAmount;
}

// update deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    getUpdated('deposit-total', depositAmount);
    updateTotalBalance(depositAmount, true);
})
// update withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    getUpdated('withdraw-total', withdrawAmount);
    updateTotalBalance(withdrawAmount, false)
})
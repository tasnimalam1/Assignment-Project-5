
// donation and history button function
function showDonationAndHistory(id){
    document.getElementById('history-info').classList.add('hidden')
    document.getElementById('donate-card').classList.add('hidden')
    // show section
    document.getElementById(id).classList.remove('hidden')   
}

// get input value function
function donationMoney(id){
    const inputValue=document.getElementById(id).value;
    // const inputNumber=parseFloat(inputValue);
    return inputValue;
}

// clear input value function
function clearInputValue(id){
    const clear=document.getElementById(id).value='';
    return clear;
}


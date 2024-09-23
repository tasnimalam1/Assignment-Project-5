function showDonationAndHistory(id){
    document.getElementById('history-info').classList.add('hidden')
    document.getElementById('donate-card').classList.add('hidden')
    // show section
    document.getElementById(id).classList.remove('hidden')
}
function donationMoney(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}



// donation button function
document.getElementById('btn-donation-card').addEventListener('click',function(){
    showDonationAndHistory('donate-card')
})
// history button function
document.getElementById('btn-history').addEventListener('click',function(){
    showDonationAndHistory('history-info')
})
// donation card function
document.getElementById('btn-donate-card-1').addEventListener('click',function(){
    const inputValue=donationMoney('input-card-1');

    // Validation 
    if(inputValue <= 0 || isNaN(inputValue)){
        return alert('Invalid Donation Amount')
    }   
    


    const accountBalance=document.getElementById('account-balance').innerText;
    const accountNumber=parseFloat(accountBalance);
    const newBalance= accountNumber - inputValue;
    document.getElementById('account-balance').innerText = newBalance;

    // add amount into card section
    const donationAmount=document.getElementById('card-amount-add').innerText;
    const donationAmountNumber=parseFloat(donationAmount);
    const addDonationAmount= donationAmountNumber + inputValue;
    document.getElementById('card-amount-add').innerText = addDonationAmount.toFixed(2);

    // add history
    const donateHistory=document.getElementById('history-info')
    const historyInfo= document.createElement("div")
    historyInfo.className = 'rounded-xl shadow-2xl py-4 px-8 bg-white mb-2'
    historyInfo.innerHTML +=`
            <p>
            ${inputValue} Taka is Donated for donate for Flood at
            Noakhali,Bangladesh
            </p>
            <p>Date: ${new Date().toString('en-GB')}</p>
        
    `
    donateHistory.appendChild(historyInfo);
    
})


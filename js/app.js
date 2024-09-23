
const modal=document.getElementById('my_modal_1');
// donation button function
document.getElementById('btn-donation-card').addEventListener('click',function(){
    showDonationAndHistory('donate-card')
    document.getElementById('btn-donation-card').classList.add('bg-primary')
    document.getElementById('btn-history').classList.remove('bg-primary','text-white')
})
// history button function
document.getElementById('btn-history').addEventListener('click',function(){
    showDonationAndHistory('history-info')
    document.getElementById('btn-history').classList.add('bg-primary','text-white')
    document.getElementById('btn-donation-card').classList.remove('bg-primary')
})
// donation card function-1
document.getElementById('btn-donate-card-1').addEventListener('click',function(){
    const inputValue=donationMoney('input-card-1');

    // Validation 
    if(inputValue <= 0 || isNaN(inputValue)){
        return alert('Invalid Donation Amount')
    }   
    


    const accountBalance=document.getElementById('account-balance').innerText;
    const accountNumber=parseFloat(accountBalance);

    if(inputValue > accountNumber){
        return alert('Your Donation Amount Cannot exceed your Balance');
    }

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
    modal.showModal();
})

// donation card function-2
document.getElementById('btn-donate-card-2').addEventListener('click',function(){
    const inputValue=donationMoney('input-card-2');
    
    // Validation 
    if(inputValue <= 0 || isNaN(inputValue)){
        return alert('Invalid Donation Amount')
    }

    const accountBalance=document.getElementById('account-balance').innerText;
    const accountNumber=parseFloat(accountBalance);

    if(inputValue > accountNumber){
        return alert('Your Donation Amount Cannot exceed your Balance');
    }

    const newBalance= accountNumber - inputValue;
    document.getElementById('account-balance').innerText = newBalance;

    // add amount into card section
    const donationAmount=document.getElementById('card-amount-add-2').innerText;
    const donationAmountNumber=parseFloat(donationAmount);
    const addDonationAmount= donationAmountNumber + inputValue;
    document.getElementById('card-amount-add-2').innerText = addDonationAmount.toFixed(2);

    // add history
    const donateHistory=document.getElementById('history-info')
    const historyInfo= document.createElement("div")
    historyInfo.className = 'rounded-xl shadow-2xl py-4 px-8 bg-white mb-2'
    historyInfo.innerHTML +=`
            <p>
            ${inputValue} Taka is Donate for Flood Relief in Feni,Bangladesh
            </p>
            <p>Date: ${new Date().toString('en-GB')}</p>
        
    `
    donateHistory.appendChild(historyInfo);
    modal.showModal();

})

// donation card function-3
document.getElementById('btn-donate-card-3').addEventListener('click',function(){
    const inputValue=donationMoney('input-card-3');
    
    // Validation 
    if(inputValue <= 0 || isNaN(inputValue)){
        return alert('Invalid Donation Amount')
    }

    const accountBalance=document.getElementById('account-balance').innerText;
    const accountNumber=parseFloat(accountBalance);

    if(inputValue > accountNumber){
        return alert('Your Donation Amount Cannot exceed your Balance');
    }

    const newBalance= accountNumber - inputValue;
    document.getElementById('account-balance').innerText = newBalance;

    // add amount into card section
    const donationAmount=document.getElementById('card-amount-add-3').innerText;
    const donationAmountNumber=parseFloat(donationAmount);
    const addDonationAmount= donationAmountNumber + inputValue;
    document.getElementById('card-amount-add-3').innerText = addDonationAmount.toFixed(2);
    modal.showModal();

    // add history
    const donateHistory=document.getElementById('history-info')
    const historyInfo= document.createElement("div")
    historyInfo.className = 'rounded-xl shadow-2xl py-4 px-8 bg-white mb-2'
    historyInfo.innerHTML +=`
            <p>
            ${inputValue} Taka is Aid for Injured in the Quota Movement,Bangladesh
            </p>
            <p>Date: ${new Date().toString('en-GB')}</p>
        
    `
    donateHistory.appendChild(historyInfo);
    modal.showModal();

    // modal button function


})


//    
document.getElementById('btn-clear').addEventListener('click',function(){
    clearInputValue('input-card-1')
    clearInputValue('input-card-2')
    clearInputValue('input-card-3')
})

// blog button function
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = './blog.html'
})

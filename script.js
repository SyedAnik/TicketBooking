function handleProduct(isIncrise, product){
    const input = document.getElementById(product + '-input');
    const inputNum = parseInt(input.value);
    let totalTicket = inputNum;
    if (isIncrise === true){
        totalTicket = inputNum + 1;
    }
    if (isIncrise === false && totalTicket > 0){
        totalTicket = inputNum - 1;
    }

    document.getElementById(product + '-input').value = totalTicket;

    let totalTicketPrice = 0;

    if (product === 'firstClass'){
        totalTicketPrice = 150 * totalTicket;
    }
    if (product === 'ecoClass'){
        totalTicketPrice = 100 * totalTicket; 
    }
    const total =  totalTicketPrice;
    document.getElementById('subtotal').innerText = total;
    const tax = Math.floor(total * 0.1);
    document.getElementById('tax').innerText = tax;

    const subtotal = total + tax;
    document.getElementById('total').innerText = subtotal;

}
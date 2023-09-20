console.log("ticket page")

function checkForm() {
    // let's get the values from the html page
    let ticketType = document.getElementById("ticketType").value;
    let ticketQuantity = parseInt(document.getElementById("ticketQuantity").value, 10);
    let creditCard = document.getElementById("creditCard").value;

    if (ticketQuantity < 1) {
        document.getElementById("errorText").textContent = "You must select a minimum of 1 ticket!";
        // document.getElementById("errorMessage").style.display = "block";
        // document.getElementById("orderSummary").style.display = "none";
    } else if (!/^\d{6}$/.test(creditCard)) {
        // here we will use regex to identify if its a valid number or not
        document.getElementById("errorText").textContent = "Credit card number must be exactly 6 digits!";
        // document.getElementById("errorMessage").style.display = "block";
        // document.getElementById("orderSummary").style.display = "none";
    } else {
        document.getElementById("errorText").textContent = ""; 
        // document.getElementById("errorMessage").style.display = "none";

        // Calculate the prices
        let pricePerTicket;
        switch (ticketType) {
            case "student":
                pricePerTicket = 0.00; //tickets are free for students
                break;
            case "allday":
                pricePerTicket = 300.00;
                break;
            case "premium":
                pricePerTicket = 350.00;
                break;
            default:
                pricePerTicket = 300.00; 
                break;
        }

        const subtotal = (ticketQuantity * pricePerTicket).toFixed(2);
        const taxRate = 0.13;
        const tax = (subtotal * taxRate).toFixed(2);
        const finalPrice = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

        // Display the order summary
        document.getElementById("summaryTicketType").textContent = ticketType;
        document.getElementById("summaryQuantity").textContent = ticketQuantity;
        document.getElementById("summaryPricePerTicket").textContent = "$" + pricePerTicket.toFixed(2);
        document.getElementById("summarySubtotal").textContent = "$" + subtotal;
        document.getElementById("summaryTax").textContent = "$" + tax;
        document.getElementById("summaryFinalPrice").textContent = "$" + finalPrice;
        document.getElementById("orderSummary").style.display = "block";
    }
}

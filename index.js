// 1️⃣ Select all the plus buttons, minus buttons, delete buttons, heart icons, and quantity & price displays
let plusButtons = document.querySelectorAll(".fa-plus-circle");
let minusButtons = document.querySelectorAll(".fa-minus-circle");
let deleteButtons = document.querySelectorAll(".fa-trash-alt");
let heartButtons = document.querySelectorAll(".fa-heart");
let totalDisplay = document.querySelector(".total");


plusButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Find the quantity span next to the clicked button
        let quantitySpan = btn.nextElementSibling;
        // Increase the quantity by 1
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;

        // Update total price
        calculateTotal();
    });
});

// 3️⃣ Add event listeners for the MINUS buttons
minusButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Find the quantity span next to the clicked button
        let quantitySpan = btn.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);

        // Only decrease if quantity is above 0
        if (quantity > 0) {
            quantity--;
            quantitySpan.textContent = quantity;
        }

        // Update total price
        calculateTotal();
    });
});

// 4️⃣ Add event listeners for the DELETE (trash) buttons
deleteButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // The product card is the grandparent of the delete icon
        // (icon -> div -> card-body -> card container)
        let productCard = btn.closest(".card-body");
        // Remove the product from the page
        productCard.remove();

        // Recalculate total after deleting
        calculateTotal();
    });
});

// 5️⃣ Add event listeners for the HEART (like) buttons
heartButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // Toggle a red color on the heart when clicked
        if (btn.style.color === "red") {
            btn.style.color = "black";
        } else {
            btn.style.color = "red";
        }
    });
});

// 6️⃣ Function to calculate the total price
function calculateTotal() {
    let unitPrices = document.querySelectorAll(".unit-price");
    let quantities = document.querySelectorAll(".quantity");
    let total = 0;

    // Loop through each product
    for (let i = 0; i < unitPrices.length; i++) {
        // Remove the dollar sign and convert to number
        let price = parseFloat(unitPrices[i].textContent.replace("$", ""));
        let quantity = parseInt(quantities[i].textContent);

        total += price * quantity;
    }

    // Display the total in the total span
    totalDisplay.textContent = total + " $";
}
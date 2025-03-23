document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    
    const updateCart = () => {
        console.log("Current cart:", cart);
    };
    
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productDiv = event.target.closest(".product");
            const productId = productDiv.getAttribute("data-id");
            const productName = productDiv.querySelector("h3").innerText;
            const productPrice = productDiv.querySelector("p").innerText.split("$")[1];
            
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });
});
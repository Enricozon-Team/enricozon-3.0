let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Totale: €${totalPrice.toFixed(2)}`;
}




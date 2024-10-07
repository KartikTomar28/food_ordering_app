document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const cartItemsList = document.getElementById('cart-items');

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const restaurantDiv = event.target.parentElement;
            const restaurantName = restaurantDiv.querySelector('h3').innerText;

            const listItem = document.createElement('li');
            listItem.textContent = restaurantName;
            cartItemsList.appendChild(listItem);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout!');
    });
});

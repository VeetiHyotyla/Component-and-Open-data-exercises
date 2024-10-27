const headerData = {
    title: "Welcome to the Product Page!",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
};

const products = ['CPU', 'GPU', 'RAM', 'Motherboard', 'Power Supply'];
const prices = [250, 500, 150, 200, 100];

function renderHeader() {
    const headerElement = document.getElementById('header');
    const title = `<h1>${headerData.title}</h1>`;
    const image = `<img src="${headerData.imageUrl}" alt="Header Image">`;

    headerElement.innerHTML = title + image;
}

function populateProductDropdown() {
    const selectElement = document.getElementById('select');
    products.forEach((product, index) => {
        const option = document.createElement('option');
        option.value = index; 
        option.text = product;
        selectElement.add(option);
    });
}

function updatePriceDisplay() {
    const productSelect = document.getElementById('select');
    const priceElement = document.getElementById('price');
    const selectedIndex = productSelect.value;
    const selectedPrice = prices[selectedIndex];

    priceElement.textContent = `€${selectedPrice}`;
}

let quantity = 0;
function updateQuantityDisplay() {
    const quantityElement = document.getElementById('quantity');
    quantityElement.textContent = quantity;
    updateOrderInfo();
}

function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
    }
    updateQuantityDisplay();
}

function updateOrderInfo() {
    const productSelect = document.getElementById('select');
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    
    orderList.innerHTML = '';

    if (quantity > 0) {
        const selectedIndex = productSelect.value;
        const selectedProduct = products[selectedIndex];
        const selectedPrice = prices[selectedIndex];
        const totalPrice = selectedPrice * quantity;

        const listItem = document.createElement('li');
        listItem.textContent = `${selectedProduct}: €${selectedPrice} x ${quantity} = €${totalPrice}`;
        orderList.appendChild(listItem);
        
        totalPriceElement.textContent = `Total Price: €${totalPrice}`;
    } else {
        totalPriceElement.textContent = `Total Price: €0`;
    }
}

document.getElementById('select').addEventListener('change', () => {
    updatePriceDisplay();
    updateOrderInfo();
});
document.getElementById('increase-btn').addEventListener('click', increaseQuantity);
document.getElementById('decrease-btn').addEventListener('click', decreaseQuantity);

renderHeader();
populateProductDropdown();
updateQuantityDisplay();
updatePriceDisplay();

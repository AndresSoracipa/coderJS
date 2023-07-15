let ageInput = document.getElementById('age');
let submitAgeBtn = document.getElementById('submitAge');
let messageContainer = document.getElementById('messageContainer');

submitAgeBtn.addEventListener('click', function () {
    let age = parseInt(ageInput.value);

    // Verificar si el usuario es mayor de 10 años
    if (age < 7) {
        messageContainer.textContent = "Debes tener entre 7 y 12 años para aplicar a las clases de Kids.";
    } else if (age <= 10) {
        messageContainer.textContent = "Puedes acceder al contenido de clase Kids.";
    } else {
        messageContainer.textContent = "Escoge los temas que creas conocer.";
    }

    // Guardar el mensaje en el Local Storage
    localStorage.setItem('message', messageContainer.textContent);
});

// Obtener el mensaje del Local Storage al cargar la página
let savedMessage = localStorage.getItem('message');
if (savedMessage) {
    messageContainer.textContent = savedMessage;
}



// Obtener referencias a los elementos de la lista
let item1 = document.getElementById('15min');
let item2 = document.getElementById('30min');
let item3 = document.getElementById('45min');
let item4 = document.getElementById('60min');
let item5 = document.getElementById('90min');

function handleItemClick(item) {
    if (item.checked) {
        item1.checked = item === item1;
        item2.checked = item === item2;
        item3.checked = item === item3;
        item4.checked = item === item4;
        item5.checked = item === item5;
    }
}

// Cargar los valores almacenados en el Local Storage
item1.checked = localStorage.getItem('15min') === 'true';
item2.checked = localStorage.getItem('30min') === 'true';
item3.checked = localStorage.getItem('45min') === 'true';
item4.checked = localStorage.getItem('60min') === 'true';
item5.checked = localStorage.getItem('90min') === 'true';

// Asignar el manejador de eventos a cada elemento
item1.addEventListener('click', function () {
    handleItemClick(item1);
});

item2.addEventListener('click', function () {
    handleItemClick(item2);
});

item3.addEventListener('click', function () {
    handleItemClick(item3);
});

item4.addEventListener('click', function () {
    handleItemClick(item4);
});

item5.addEventListener('click', function () {
    handleItemClick(item5);
});

// Guardar el valor del elemento seleccionado en el Local Storage
function saveItems() {
    let selectedItem = item1.checked ? item1 :
        item2.checked ? item2 :
            item3.checked ? item3 :
                item4.checked ? item4 :
                    item5.checked ? item5 :
                        null;

    if (selectedItem) {
        localStorage.setItem('selectedItem', selectedItem.id);
    }
}

// Cargar el elemento seleccionado del Local Storage y deseleccionar los demás
let selectedItem = localStorage.getItem('selectedItem');
if (selectedItem) {
    document.getElementById(selectedItem).checked = true;
    handleItemClick(document.getElementById(selectedItem));
}




document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento donde se mostrarán los productos
    let productList = document.getElementById('product-list');
    // Obtener el carrito desde Local Storage o inicializarlo vacío
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Definir los productos disponibles
    let products = [
        { id: 1, name: 'Clase Topic, Gramtical, Simple Present', price: 3 },
        { id: 2, name: 'Clase Topic, Gramtical, Simple Past', price: 5 },
        { id: 3, name: 'Clase Topic, Gramtical, Present Perfect', price: 7 },
        { id: 4, name: 'Clase Skills, Listening', price: 10 },
        { id: 5, name: 'Clase Skills, Speaking', price: 12 },
        { id: 6, name: 'Clase Skills, Writing', price: 15 },
        { id: 7, name: 'Clase Skills, Reading', price: 8 },
        { id: 8, name: 'Conversational Club, Intermediate', price: 5 },
        { id: 9, name: 'Conversational Club, Advanced', price: 5 },
        { id: 10, name: 'Activity, Intermediate', price: 5 },
        { id: 11, name: 'Activity, Advanced', price: 5 },
        { id: 12, name: 'Situations, Intermediate', price: 5 },
        { id: 13, name: 'Situations, Advanced', price: 5 }
    ];

    // Mostrar los productos disponibles en la página
    products.forEach(product => {
        let productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.price}</span>
        <button class="add-to-cart-btn" data-id="${product.id}">Agregar al carrito</button>
      `;
        productList.appendChild(productItem);
    });

    // Obtener los botones de "Agregar al carrito"
    let addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener('click', function (event) {
            let productId = event.target.getAttribute('data-id');
            let product = products.find(item => item.id === parseInt(productId));
            if (product) {
                cartItems.push(product);
                // Actualizar el carrito en Local Storage
                localStorage.setItem('cart', JSON.stringify(cartItems));
                // Actualizar la visualización del carrito
                renderCartItems();
            }
        });
    }

    // Mostrar los productos en el carrito
    function renderCartItems() {
        // Limpiar el carrito antes de volver a mostrar los productos
        document.getElementById('cart').innerHTML = '';

        cartItems.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
          <span>${item.name}</span>
          <span>$${item.price}</span>
        `;
            document.getElementById('cart').appendChild(cartItem);
        });
    }

    // Mostrar los productos del carrito al cargar la página
    renderCartItems();
    updateCheckoutButton();


    // Evento para realizar la compra
    document.getElementById('checkout-btn').addEventListener('click', function () {
        // Realizar acciones necesarias al momento de la compra
        // ...

        // Vaciar el carrito y actualizar Local Storage
        cartItems.length = 0;
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Actualizar la visualización del carrito
        renderCartItems();
        alert('¡Compra realizada con éxito!');

    });
    document.getElementById('clear-cart-btn').addEventListener('click', function () {
        // Vaciar el carrito y actualizar Local Storage
        cartItems.length = 0;
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // Actualizar la visualización del carrito
        renderCartItems();
        updateCheckoutButton();
    });
    // Evento para borrar el carrito
    document.getElementById('clear-cart-btn').addEventListener('click', function () {
        // ...
        updateCheckoutButton();
    });

    // Actualizar el estado del botón de "Realizar compra"
    function updateCheckoutButton() {
        let checkoutButton = document.getElementById('checkout-btn');
        checkoutButton.disabled = cartItems.length === 0;
    }
});

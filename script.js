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

    localStorage.setItem('message', messageContainer.textContent);
});

let savedMessage = localStorage.getItem('message');
if (savedMessage) {
    messageContainer.textContent = savedMessage;
}



// Checklist de tiempos para las clases
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


item1.checked = localStorage.getItem('15min') === 'true';
item2.checked = localStorage.getItem('30min') === 'true';
item3.checked = localStorage.getItem('45min') === 'true';
item4.checked = localStorage.getItem('60min') === 'true';
item5.checked = localStorage.getItem('90min') === 'true';

// check para cada duracion
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

// Guardar el valor en el Local Storage
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

// Con este boton se carga el elemento seleccionado del Local Storage y deseleccionar los otros
let selectedItem = localStorage.getItem('selectedItem');
if (selectedItem) {
    document.getElementById(selectedItem).checked = true;
    handleItemClick(document.getElementById(selectedItem));
}




document.addEventListener('DOMContentLoaded', function () {
    let productList = document.getElementById('product-list');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // clases 
    fetch('./productos.json')
        .then(response => response.json())
        .then(products => {

            // Mostrar los productos disponibles en la página con JS
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

            // botones de "Agregar al carrito"
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
                  <button class="remove-from-cart-btn" data-id="${item.id}">Eliminar del carrito</button>
                `;
                    document.getElementById('cart').appendChild(cartItem);
                });
                let removeFromCartButtons = document.getElementsByClassName('remove-from-cart-btn');
                for (let i = 0; i < removeFromCartButtons.length; i++) {
                    removeFromCartButtons[i].addEventListener('click', function (event) {
                        let productId = event.target.getAttribute('data-id');
                        removeProductFromCart(productId);
                    });
                }
            }
            function removeProductFromCart(productId) {
                // Encontrar el índice del producto a eliminar
                let index = cartItems.findIndex(item => item.id === parseInt(productId));
            
                if (index !== -1) {
                    // Eliminar el producto del array
                    cartItems.splice(index, 1);
            
                    // Actualizar el carrito en Local Storage
                    localStorage.setItem('cart', JSON.stringify(cartItems));
            
                    // Actualizar la visualización del carrito
                    renderCartItems();
                    updateCheckoutButton();
                }
            }
            

            // Mostrar los productos del carrito al cargar la página
            renderCartItems();
            updateCheckoutButton();


            // realizar la compra
            document.getElementById('checkout-btn').addEventListener('click', function () {

                // Vaciar el carrito y actualizar Local Storage
                cartItems.length = 0;
                localStorage.setItem('cart', JSON.stringify(cartItems));

                // comprar
                renderCartItems();
                alert('¡Compra realizada con éxito!');

            });
            document.getElementById('clear-cart-btn').addEventListener('click', function () {
                // Vaciar el carrito y actualizar Local Storage
                cartItems.length = 0;
                localStorage.setItem('cart', JSON.stringify(cartItems));

                // Actualizar el carrito
                renderCartItems();
                updateCheckoutButton();
            });
            // borrar el carrito
            document.getElementById('clear-cart-btn').addEventListener('click', function () {

                updateCheckoutButton();
            });

            // boton Realizar compra
            function updateCheckoutButton() {
                let checkoutButton = document.getElementById('checkout-btn');
                checkoutButton.disabled = cartItems.length === 0;
            }
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
});

// Sample data for demonstration
const menuItems = [
    {
      id: 1,
      name: 'Tempting Tandoori Pizza',
      price: 12.99,
      image: '3.jpeg'
    },
    {
      id: 2,
      name: 'Sizzling Seafood Platter',
      price: 18.99,
      image: '4.jpg'
    }
  ];
  
  // Function to display cart items
  function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
  
    menuItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
  
      cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p class="price">$${item.price}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
  
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }
  
  // Function to add item to cart
  function addToCart(itemId) {
    // Logic to add item to cart
    console.log(`Item with ID ${itemId} added to cart.`);
  }
  
  // Display cart items when the page loads
  window.onload = function() {
    displayCartItems();
  };
  
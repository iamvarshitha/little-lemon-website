/* script.js */

// Example: Adding interactivity to the menu items
const menuItems = document.querySelectorAll('.menu-category ul li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Example: Display additional information about the clicked menu item
    alert(`You clicked on: ${item.textContent}`);
    // Additional functionality can be added here, such as showing details or adding items to a cart
  });
});

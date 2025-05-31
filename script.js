// script.js

// Function to handle like button toggle
function toggleLike(productName) {
    const likedProducts = JSON.parse(localStorage.getItem('favorites')) || [];
    const productIndex = likedProducts.indexOf(productName);

    if (productIndex > -1) {
        likedProducts.splice(productIndex, 1);
        alert(`${productName} removed from favorites.`);
    } else {
        likedProducts.push(productName);
        alert(`${productName} added to favorites.`);
    }

    localStorage.setItem('favorites', JSON.stringify(likedProducts));
    updateLikeButton(productName);
}

// Function to update like button text
function updateLikeButton(productName) {
    const likedProducts = JSON.parse(localStorage.getItem('favorites')) || [];
    const productIndex = likedProducts.indexOf(productName);
    const button = document.getElementById(`like-${productName}`);

    if (button) {
        button.textContent = productIndex > -1 ? 'Unlike' : 'Like';
    }
}

// Function to load favorites page
function loadFavorites() {
    const likedProducts = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    favoritesList.innerHTML = '';

    if (likedProducts.length === 0) {
        favoritesList.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }

    likedProducts.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        favoritesList.appendChild(listItem);
    });
}

// Function to clear all favorites
function clearFavorites() {
    localStorage.removeItem('favorites');
    loadFavorites();
}
// Load favorites from localStorage
document.addEventListener("DOMContentLoaded", function() {
  displayFavorites();
});

// Function to toggle favorite products
function toggleFavorite(productName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(productName)) {
    // Remove from favorites
    favorites = favorites.filter(item => item !== productName);
    alert(productName + " removed from favorites.");
  } else {
    // Add to favorites
    favorites.push(productName);
    alert(productName + " added to favorites.");
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to display favorites in favorites.html
function displayFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  if (!favoritesContainer) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorites yet.</p>";
  } else {
    favoritesContainer.innerHTML = `
      <ul>
        ${favorites.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
}
// script.js

// Load favorites from localStorage
document.addEventListener("DOMContentLoaded", function() {
  displayFavorites();
});

// Function to toggle favorite products
function toggleFavorite(productName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(productName)) {
    // Remove from favorites
    favorites = favorites.filter(item => item !== productName);
    alert(productName + " removed from favorites.");
  } else {
    // Add to favorites
    favorites.push(productName);
    alert(productName + " added to favorites.");
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to display favorites in favorites.html
function displayFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  if (!favoritesContainer) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorites yet.</p>";
  } else {
    favoritesContainer.innerHTML = `
      <ul>
        ${favorites.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }
}

// Function to clear all favorites
function clearFavorites() {
  if (confirm("Are you sure you want to clear all favorites?")) {
    localStorage.removeItem("favorites");
    displayFavorites();
    alert("All favorites cleared.");
  }
}
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
// Function to toggle favorite products
function toggleFavorite(productName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(productName)) {
    alert(`${productName} is already in favorites.`);
  } else {
    favorites.push(productName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${productName} added to favorites.`);
  }

  displayFavorites();
}

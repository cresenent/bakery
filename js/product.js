const products = [
  {
    id: 1,
    name: "Sourdough Bread",
    price: "1200",
    description: "Classic sourdough with a tangy flavor.",
    image: "images/products/sourdough.jpg",
    category: "top-selling",
    rating: 5,
  },
  {
    id: 2,
    name: "Croissant",
    price: "1500",
    description: "Flaky, buttery croissant perfect for breakfast.",
    image: "images/products/croissant.jpg",
    category: "morning-set",
    rating: 4,
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    price: "1300",
    description: "Soft muffin packed with juicy blueberries.",
    image: "images/products/blueberry-muffin.jpg",
    category: "baked-goodies",
    rating: 5,
  },
  {
    id: 4,
    name: "Whole Wheat Bread",
    price: "1000",
    description: "Healthy whole wheat bread, rich in fiber.",
    image: "images/products/whole-wheat.jpg",
    category: "staples",
    rating: 3,
  },
  {
    id: 5,
    name: "Gift Basket",
    price: "2000",
    description: "A delightful assortment of baked goods.",
    image: "images/products/gift-basket.jpg",
    category: "gifting",
    rating: 5,
  },
  // Add more products as needed
];

function generateStarRating(rating) {
  const fullStar = '<i class="fas fa-star"></i>';
  const halfStar = '<i class="fas fa-star-half-alt"></i>';
  const emptyStar = '<i class="far fa-star"></i>';

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += fullStar;
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars += halfStar;
    } else {
      stars += emptyStar;
    }
  }
  return stars;
}

function generateProductHTML(product) {
  const stars = generateStarRating(product.rating);

  return `
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="item">
                <div class="img-wrap mb-4">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}">
                    <button class="btn btn-primary   btn-addtocart d-none" data-id="${product.id}" data-price="${product.price}" data-name="${product.name}">
                        ADD TO CART
                    </button>
                </div>
                <div class="text-wrap">
                    <h5 class="text-center font-weight-bold">${product.name}</h5>
                    <p class="text-center">Rs.${product.price}</p>
                    <p class="text-center">${product.description}</p>
                    <p class="text-center review">
                        ${stars}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function populateProducts() {
  const categories = {
    "top-selling": document.getElementById("top-selling-products"),
    "morning-set": document.getElementById("morning-set-products"),
    "baked-goodies": document.getElementById("baked-goodies-products"),
    staples: document.getElementById("staples-products"),
    gifting: document.getElementById("gifting-products"),
  };

  products.forEach((product) => {
    const productHTML = generateProductHTML(product);
    if (categories[product.category]) {
      categories[product.category].innerHTML += productHTML;
    }
  });
}

// Call the function to populate products when the page loads
document.addEventListener("DOMContentLoaded", populateProducts);

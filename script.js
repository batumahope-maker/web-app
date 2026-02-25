/* ================================
   RWANDA HELPER PRO - PROFESSIONAL
   ================================ */

// ============ PRICE DATABASE ============
const priceData = {
    // Vegetables
    "tomato": {
        name: "Tomato 🍅",
        unit: "1 kg",
        prices: { kimironko: 900, nyabugogo: 850, remera: 1000 },
        category: "Vegetable"
    },
    "potato": {
        name: "Potato 🥔",
        unit: "1 kg",
        prices: { kimironko: 500, nyabugogo: 450, remera: 550 },
        category: "Vegetable"
    },
    "onion": {
        name: "Onion 🧅",
        unit: "1 kg",
        prices: { kimironko: 800, nyabugogo: 750, remera: 850 },
        category: "Vegetable"
    },
    "cabbage": {
        name: "Cabbage 🥬",
        unit: "1 piece",
        prices: { kimironko: 600, nyabugogo: 550, remera: 650 },
        category: "Vegetable"
    },
    "carrot": {
        name: "Carrot 🥕",
        unit: "1 kg",
        prices: { kimironko: 700, nyabugogo: 650, remera: 750 },
        category: "Vegetable"
    },
    "pepper": {
        name: "Pepper 🌶️",
        unit: "1 kg",
        prices: { kimironko: 1200, nyabugogo: 1100, remera: 1300 },
        category: "Vegetable"
    },
    "eggplant": {
        name: "Eggplant 🍆",
        unit: "1 kg",
        prices: { kimironko: 800, nyabugogo: 750, remera: 900 },
        category: "Vegetable"
    },
    
    // Fruits
    "banana": {
        name: "Banana 🍌",
        unit: "1 bunch",
        prices: { kimironko: 1800, nyabugogo: 1500, remera: 2000 },
        category: "Fruit"
    },
    "avocado": {
        name: "Avocado 🥑",
        unit: "1 piece",
        prices: { kimironko: 400, nyabugogo: 350, remera: 450 },
        category: "Fruit"
    },
    "pineapple": {
        name: "Pineapple 🍍",
        unit: "1 piece",
        prices: { kimironko: 1200, nyabugogo: 1000, remera: 1400 },
        category: "Fruit"
    },
    "mango": {
        name: "Mango 🥭",
        unit: "1 piece",
        prices: { kimironko: 600, nyabugogo: 500, remera: 700 },
        category: "Fruit"
    },
    "orange": {
        name: "Orange 🍊",
        unit: "1 kg",
        prices: { kimironko: 1800, nyabugogo: 1500, remera: 2000 },
        category: "Fruit"
    },
    "papaya": {
        name: "Papaya 🟠",
        unit: "1 piece",
        prices: { kimironko: 1500, nyabugogo: 1200, remera: 1700 },
        category: "Fruit"
    },
    "watermelon": {
        name: "Watermelon 🍉",
        unit: "1 piece",
        prices: { kimironko: 3000, nyabugogo: 2500, remera: 3500 },
        category: "Fruit"
    },
    
    // Grains
    "rice": {
        name: "Rice 🍚",
        unit: "1 kg",
        prices: { kimironko: 1200, nyabugogo: 1100, remera: 1300 },
        category: "Grains"
    },
    "beans": {
        name: "Beans",
        unit: "1 kg",
        prices: { kimironko: 1500, nyabugogo: 1400, remera: 1600 },
        category: "Grains"
    },
    "cassava": {
        name: "Cassava Flour",
        unit: "1 kg",
        prices: { kimironko: 800, nyabugogo: 750, remera: 900 },
        category: "Grains"
    },
    
    // Dairy
    "milk": {
        name: "Milk 🥛",
        unit: "1 liter",
        prices: { kimironko: 1000, nyabugogo: 900, remera: 1100 },
        category: "Dairy"
    },
    "eggs": {
        name: "Eggs 🥚",
        unit: "1 tray (30)",
        prices: { kimironko: 6000, nyabugogo: 5500, remera: 6500 },
        category: "Dairy"
    },
    
    // Meat
    "chicken": {
        name: "Chicken 🐔",
        unit: "1 kg",
        prices: { kimironko: 4500, nyabugogo: 4000, remera: 5000 },
        category: "Meat"
    },
    "beef": {
        name: "Beef 🥩",
        unit: "1 kg",
        prices: { kimironko: 5000, nyabugogo: 4500, remera: 5500 },
        category: "Meat"
    },
    
    // Seafood
    "fish": {
        name: "Fish 🐟",
        unit: "1 kg",
        prices: { kimironko: 3500, nyabugogo: 3000, remera: 4000 },
        category: "Seafood"
    },
    
    // Transport & Services
    "mototaxi": {
        name: "Mototaxi 🛵",
        unit: "per km",
        prices: { kimironko: 500, nyabugogo: 500, remera: 500 },
        category: "Transport"
    },
    "taxi": {
        name: "Taxi 🚖",
        unit: "Airport to City",
        prices: { kimironko: 15000, nyabugogo: 15000, remera: 15000 },
        category: "Transport"
    },
    "bus": {
        name: "Bus 🚌",
        unit: "per trip",
        prices: { kimironko: 250, nyabugogo: 250, remera: 250 },
        category: "Transport"
    }
};

// ============ NAVIGATION FUNCTIONS ============
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// ============ PRICE SEARCH FUNCTIONS ============
function searchPrice() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const market = document.getElementById('marketSelect').value;
    const resultsDiv = document.getElementById('results');
    
    if (!searchTerm) {
        resultsDiv.innerHTML = '<p class="hint">👆 Please enter a product name</p>';
        return;
    }
    
    const product = priceData[searchTerm];
    
    if (!product) {
        resultsDiv.innerHTML = `
            <div class="price-card">
                <h2>❌ Not Found</h2>
                <p>Sorry, we don't have price data for "${searchTerm}" yet.</p>
                <p style="margin-top: 15px; color: #667eea;">💡 Try: banana, tomato, potato, rice, chicken, mototaxi</p>
                <p style="margin-top: 10px;">
                    <a href="#contact" onclick="showSection('contact')" style="color: #667eea; text-decoration: underline;">
                        📧 Request this product
                    </a>
                </p>
            </div>
        `;
        return;
    }
    
    const prices = Object.values(product.prices);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    let html = `
        <div class="price-card">
            <h2>${product.name}</h2>
            <p><strong>Unit:</strong> ${product.unit} | <strong>Category:</strong> ${product.category}</p>
            
            <div class="price-main">
                ${formatPrice(minPrice)} - ${formatPrice(maxPrice)} RWF
            </div>
            
            <div class="price-details">
                <strong>📊 Price by Market:</strong><br>
                ${market === 'all' ? getAllMarketPrices(product) : getSingleMarketPrice(product, market)}
            </div>
            
            <div class="show-seller">
                💬 Show this to the seller!
            </div>
            
            <p style="margin-top: 15px; color: #999; font-size: 14px;">
                ⏰ Updated: Today • 💡 Prices may vary by ±10%
            </p>
        </div>
    `;
    
    resultsDiv.innerHTML = html;
}

function quickSearch(term) {
    document.getElementById('searchInput').value = term;
    searchPrice();
}

function formatPrice(price) {
    return price.toLocaleString();
}

function getAllMarketPrices(product) {
    let html = '';
    for (let market in product.prices) {
        html += `• ${capitalizeFirst(market)}: ${formatPrice(product.prices[market])} RWF<br>`;
    }
    return html;
}

function getSingleMarketPrice(product, market) {
    if (market === 'all') return getAllMarketPrices(product);
    const price = product.prices[market];
    return `• ${capitalizeFirst(market)}: ${formatPrice(price)} RWF`;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============ TRANSPORT FUNCTIONS ============
function calculateMotoFare() {
    const distance = parseFloat(document.getElementById('motoDistance').value);
    const resultDiv = document.getElementById('motoResult');
    
    if (!distance || distance <= 0) {
        resultDiv.innerHTML = '⚠️ Please enter a valid distance';
        resultDiv.classList.add('show');
        resultDiv.style.borderLeftColor = '#ff5252';
        resultDiv.style.color = '#ff5252';
        return;
    }
    
    const pricePerKm = 500;
    const totalFare = distance * pricePerKm;
    const minFare = totalFare * 0.9;
    const maxFare = totalFare * 1.1;
    
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 32px; color: #4caf50; margin-bottom: 10px;">
                ${formatPrice(Math.round(minFare))} - ${formatPrice(Math.round(maxFare))} RWF
            </div>
            <div style="font-size: 14px; color: #666;">
                Distance: ${distance} km × 500 RWF/km<br>
                💡 Always negotiate before riding!
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.style.borderLeftColor = '#4caf50';
    resultDiv.style.color = '#4caf50';
}

function setRoute(from, to, distance) {
    document.getElementById('motoFrom').value = from;
    document.getElementById('motoTo').value = to;
    document.getElementById('motoDistance').value = distance;
    calculateMotoFare();
}

// ============ PLACES FUNCTIONS ============
function showPlaces(placeType) {
    const contents = document.querySelectorAll('.places-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const tabs = document.querySelectorAll('.places-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(placeType).classList.add('active');
    
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

function getDirections(placeName) {
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(placeName + ' Kigali Rwanda')}`;
    window.open(googleMapsUrl, '_blank');
}

// ============ TOOLS FUNCTIONS ============
const exchangeRates = {
    USD: 1,
    EUR: 1.08,
    RWF: 1300,
    GBP: 1.27
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('currencyAmount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('currencyResult');
    
    if (!amount || amount <= 0) {
        resultDiv.innerHTML = '⚠️ Please enter a valid amount';
        resultDiv.classList.add('show');
        resultDiv.style.borderLeftColor = '#ff5252';
        return;
    }
    
    const amountInUSD = amount / exchangeRates[from];
    const convertedAmount = amountInUSD * exchangeRates[to];
    
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 28px; margin-bottom: 10px;">
                ${formatPrice(convertedAmount.toFixed(2))} ${to}
            </div>
            <div style="font-size: 14px; color: #666;">
                ${formatPrice(amount)} ${from} = ${formatPrice(convertedAmount.toFixed(2))} ${to}<br>
                ⏰ Rates updated: Today
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.style.borderLeftColor = '#4caf50';
    resultDiv.style.color = '#4caf50';
}

function addShoppingItem() {
    const shoppingList = document.getElementById('shoppingList');
    const newItem = document.createElement('div');
    newItem.className = 'shopping-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Item name" class="item-name">
        <input type="number" placeholder="Price" class="item-price" min="0">
        <button onclick="removeItem(this)">❌</button>
    `;
    shoppingList.appendChild(newItem);
}

function removeItem(button) {
    button.parentElement.remove();
}

function calculateTotal() {
    const prices = document.querySelectorAll('.item-price');
    let total = 0;
    let itemCount = 0;
    
    prices.forEach(input => {
        const price = parseFloat(input.value) || 0;
        if (price > 0) {
            total += price;
            itemCount++;
        }
    });
    
    const resultDiv = document.getElementById('shoppingTotal');
    
    if (itemCount === 0) {
        resultDiv.innerHTML = '⚠️ Please add items with prices';
        resultDiv.classList.add('show');
        resultDiv.style.borderLeftColor = '#ff5252';
        return;
    }
    
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 32px; margin-bottom: 10px;">
                ${formatPrice(total)} RWF
            </div>
            <div style="font-size: 14px; color: #666;">
                Total for ${itemCount} item${itemCount > 1 ? 's' : ''}
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.style.borderLeftColor = '#4caf50';
    resultDiv.style.color = '#4caf50';
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercent = parseInt(document.getElementById('tipPercent').value);
    const resultDiv = document.getElementById('tipResult');
    
    if (!billAmount || billAmount <= 0) {
        resultDiv.innerHTML = '⚠️ Please enter a valid bill amount';
        resultDiv.classList.add('show');
        resultDiv.style.borderLeftColor = '#ff5252';
        return;
    }
    
    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;
    
    resultDiv.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 14px; color: #666; margin-bottom: 10px;">
                Bill: ${formatPrice(billAmount)} RWF<br>
                Tip (${tipPercent}%): ${formatPrice(Math.round(tipAmount))} RWF
            </div>
            <div style="font-size: 32px; color: #4caf50;">
                Total: ${formatPrice(Math.round(totalAmount))} RWF
            </div>
        </div>
    `;
    resultDiv.classList.add('show');
    resultDiv.style.borderLeftColor = '#4caf50';
    resultDiv.style.color = '#4caf50';
}

// ============ CONTACT FORM ============
function submitContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Here you would normally send to a backend
    // For now, we'll use mailto
    const subject = encodeURIComponent('Rwanda Helper Pro - Contact');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:info@rwandahelper.com?subject=${subject}&body=${body}`;
    
    alert('Thank you for contacting us! Your default email client will open.');
    document.getElementById('contactForm').reset();
}

// ============ EVENT LISTENERS ============
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchPrice();
        });
    }
    
    const motoDistance = document.getElementById('motoDistance');
    if (motoDistance) {
        motoDistance.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') calculateMotoFare();
        });
    }
    
    console.log('🇷🇼 Rwanda Helper Pro - Professional Edition Loaded');
});
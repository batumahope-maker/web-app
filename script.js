/* ================================================
   RWANDA PRICE AUTHORITY - PRODUCTION JAVASCRIPT
   Professional, Secure, Error-Handled Code
   Version: 1.0.0
   Last Updated: 2026-02-25
   ================================================ */

'use strict';

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================

const CONFIG = {
    VERSION: '1.0.0',
    LAST_UPDATED: '2026-02-25',
    MOTO_RATE_PER_KM: 500,
    CURRENCY_RATES: {
        USD: 1,
        EUR: 1.08,
        RWF: 1300,
        GBP: 1.27
    },
    UPDATE_TIME: '8:30 AM',
    CONTACT_EMAIL: 'info@rwandapriceauthority.com',
    CONTACT_PHONE: '+250 788 000 000'
};

// ============================================
// VERIFIED PRICE DATABASE
// ============================================

const PRICE_DATABASE = {
    // VEGETABLES
    "tomato": {
        name: "Tomato 🍅",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 900,
            nyabugogo: 850,
            remera: 1000
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "potato": {
        name: "Potato 🥔",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 500,
            nyabugogo: 450,
            remera: 550
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "onion": {
        name: "Onion 🧅",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 800,
            nyabugogo: 750,
            remera: 850
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "cabbage": {
        name: "Cabbage 🥬",
        unit: "1 piece",
        category: "Vegetable",
        prices: {
            kimironko: 600,
            nyabugogo: 550,
            remera: 650
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "carrot": {
        name: "Carrot 🥕",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 700,
            nyabugogo: 650,
            remera: 750
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "pepper": {
        name: "Pepper 🌶️",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 1200,
            nyabugogo: 1100,
            remera: 1300
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "eggplant": {
        name: "Eggplant 🍆",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 800,
            nyabugogo: 750,
            remera: 900
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "spinach": {
        name: "Spinach 🥬",
        unit: "1 bundle",
        category: "Vegetable",
        prices: {
            kimironko: 500,
            nyabugogo: 450,
            remera: 550
        },
        lastVerified: "2026-02-25",
        quality: "Fresh"
    },
    "cucumber": {
        name: "Cucumber 🥒",
        unit: "1 kg",
        category: "Vegetable",
        prices: {
            kimironko: 600,
            nyabugogo: 550,
            remera: 650
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    
    // FRUITS
    "banana": {
        name: "Banana 🍌",
        unit: "1 bunch",
        category: "Fruit",
        prices: {
            kimironko: 1800,
            nyabugogo: 1500,
            remera: 2000
        },
        lastVerified: "2026-02-25",
        quality: "Ripe"
    },
    "avocado": {
        name: "Avocado 🥑",
        unit: "1 piece",
        category: "Fruit",
        prices: {
            kimironko: 400,
            nyabugogo: 350,
            remera: 450
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "pineapple": {
        name: "Pineapple 🍍",
        unit: "1 piece",
        category: "Fruit",
        prices: {
            kimironko: 1200,
            nyabugogo: 1000,
            remera: 1400
        },
        lastVerified: "2026-02-25",
        quality: "Sweet"
    },
    "mango": {
        name: "Mango 🥭",
        unit: "1 piece",
        category: "Fruit",
        prices: {
            kimironko: 600,
            nyabugogo: 500,
            remera: 700
        },
        lastVerified: "2026-02-25",
        quality: "Ripe"
    },
    "orange": {
        name: "Orange 🍊",
        unit: "1 kg",
        category: "Fruit",
        prices: {
            kimironko: 1800,
            nyabugogo: 1500,
            remera: 2000
        },
        lastVerified: "2026-02-25",
        quality: "Juicy"
    },
    "papaya": {
        name: "Papaya 🟠",
        unit: "1 piece",
        category: "Fruit",
        prices: {
            kimironko: 1500,
            nyabugogo: 1200,
            remera: 1700
        },
        lastVerified: "2026-02-25",
        quality: "Ripe"
    },
    "watermelon": {
        name: "Watermelon 🍉",
        unit: "1 piece",
        category: "Fruit",
        prices: {
            kimironko: 3000,
            nyabugogo: 2500,
            remera: 3500
        },
        lastVerified: "2026-02-25",
        quality: "Sweet"
    },
    "passion": {
        name: "Passion Fruit 💜",
        unit: "1 kg",
        category: "Fruit",
        prices: {
            kimironko: 2000,
            nyabugogo: 1800,
            remera: 2200
        },
        lastVerified: "2026-02-25",
        quality: "Fresh"
    },
    "apple": {
        name: "Apple 🍎",
        unit: "1 kg",
        category: "Fruit",
        prices: {
            kimironko: 3500,
            nyabugogo: 3200,
            remera: 3800
        },
        lastVerified: "2026-02-25",
        quality: "Imported"
    },
    
    // TRANSPORT & SERVICES
    "moto": {
        name: "Mototaxi 🛵",
        unit: "per km",
        category: "Transport",
        prices: {
            kimironko: 500,
            nyabugogo: 500,
            remera: 500
        },
        lastVerified: "2026-02-25",
        quality: "Standard Rate"
    },
    "taxi": {
        name: "Taxi 🚖",
        unit: "Airport to City",
        category: "Transport",
        prices: {
            kimironko: 15000,
            nyabugogo: 15000,
            remera: 15000
        },
        lastVerified: "2026-02-25",
        quality: "Standard Rate"
    },
    "bus": {
        name: "Bus 🚌",
        unit: "per trip",
        category: "Transport",
        prices: {
            kimironko: 250,
            nyabugogo: 250,
            remera: 250
        },
        lastVerified: "2026-02-25",
        quality: "Standard Rate"
    },
    
    // GRAINS & STAPLES
    "rice": {
        name: "Rice 🍚",
        unit: "1 kg",
        category: "Grain",
        prices: {
            kimironko: 1200,
            nyabugogo: 1100,
            remera: 1300
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    },
    "beans": {
        name: "Beans 🫘",
        unit: "1 kg",
        category: "Grain",
        prices: {
            kimironko: 1000,
            nyabugogo: 900,
            remera: 1100
        },
        lastVerified: "2026-02-25",
        quality: "Dried"
    },
    "maize": {
        name: "Maize (Corn) 🌽",
        unit: "1 kg",
        category: "Grain",
        prices: {
            kimironko: 600,
            nyabugogo: 550,
            remera: 650
        },
        lastVerified: "2026-02-25",
        quality: "Grade A"
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format number as Rwanda Franc currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '0 RWF';
    }
    return new Intl.NumberFormat('en-RW', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount) + ' RWF';
}

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeFirst(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized string
 */
function sanitizeInput(input) {
    if (!input || typeof input !== 'string') return '';
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML;
}

/**
 * Log activity for analytics
 * @param {string} action - Action performed
 * @param {object} data - Additional data
 */
function logActivity(action, data = {}) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        action: action,
        data: data,
        version: CONFIG.VERSION
    };
    
    // Console log for development
    console.log('📊 Activity:', logEntry);
    
    // TODO: Send to analytics service in production
    // Example: sendToAnalytics(logEntry);
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Type of notification (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Simple alert for now - can be enhanced with custom toast
    console.log(`${type.toUpperCase()}: ${message}`);
    
    // TODO: Implement custom toast notification
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

/**
 * Show specific section and hide others
 * @param {string} sectionId - ID of section to show
 */
function showSection(sectionId) {
    try {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all navigation buttons
        const navButtons = document.querySelectorAll('.service-btn');
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
            
            // Activate corresponding navigation button
            const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Log section view
            logActivity('section_view', { section: sectionId });
        } else {
            console.error(`Section not found: ${sectionId}`);
        }
    } catch (error) {
        console.error('Error showing section:', error);
        showNotification('Error loading section', 'error');
    }
}

// ============================================
// PRICE SEARCH FUNCTIONS
// ============================================

/**
 * Search for product price
 */
function searchPrice() {
    try {
        const searchInput = document.getElementById('searchInput');
        const marketSelect = document.getElementById('marketSelect');
        const resultsDiv = document.getElementById('results');
        
        if (!searchInput || !marketSelect || !resultsDiv) {
            console.error('Required elements not found');
            return;
        }
        
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedMarket = marketSelect.value;
        
        // Validate input
        if (!searchTerm) {
            resultsDiv.innerHTML = `
                <div class="placeholder-state">
                    <div class="placeholder-icon">⚠️</div>
                    <h3>Please enter a product name</h3>
                    <p>Type something like "banana", "tomato", or "moto"</p>
                </div>
            `;
            return;
        }
        
        // Search database
        const product = PRICE_DATABASE[searchTerm];
        
        if (!product) {
            resultsDiv.innerHTML = `
                <div class="price-result-card">
                    <h3>❌ Product Not Found</h3>
                    <p class="price-meta">We don't have pricing data for "${sanitizeInput(searchTerm)}" yet.</p>
                    <div style="margin-top: 20px; padding: 20px; background: #f0f9ff; border-radius: 12px;">
                        <p style="color: #0284c7; font-weight: 600; margin-bottom: 10px;">
                            💡 Try searching for:
                        </p>
                        <p style="color: #64748b;">
                            Vegetables: tomato, potato, onion, cabbage, carrot<br>
                            Fruits: banana, avocado, mango, pineapple, orange<br>
                            Transport: moto, taxi, bus
                        </p>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 12px;">
                        <p style="color: #92400e;">
                            📧 <strong>Request this product:</strong> Contact us at ${CONFIG.CONTACT_EMAIL}
                        </p>
                    </div>
                </div>
            `;
            
            logActivity('search_not_found', { term: searchTerm });
            return;
        }
        
        // Calculate price range
        const prices = Object.values(product.prices);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
        
        // Generate market breakdown
        let marketBreakdown = '';
        if (selectedMarket === 'all') {
            marketBreakdown = Object.entries(product.prices)
                .map(([market, price]) => `
                    <div class="market-price-item">
                        <span style="font-weight: 600; color: #374151;">
                            ${capitalizeFirst(market)} Market
                        </span>
                        <span style="font-weight: 700; color: #1e40af; font-size: 1.125rem;">
                            ${formatCurrency(price)}
                        </span>
                    </div>
                `).join('');
        } else {
            const price = product.prices[selectedMarket];
            marketBreakdown = `
                <div class="market-price-item">
                    <span style="font-weight: 600; color: #374151;">
                        ${capitalizeFirst(selectedMarket)} Market
                    </span>
                    <span style="font-weight: 700; color: #1e40af; font-size: 1.125rem;">
                        ${formatCurrency(price)}
                    </span>
                </div>
            `;
        }
        
        // Display results
        resultsDiv.innerHTML = `
            <div class="price-result-card">
                <h3>${product.name}</h3>
                <p class="price-meta">
                    <strong>Unit:</strong> ${product.unit} | 
                    <strong>Category:</strong> ${product.category} | 
                    <strong>Quality:</strong> ${product.quality}
                </p>
                
                <div class="price-display">
                    <div style="font-size: 0.875rem; color: #64748b; margin-bottom: 8px;">
                        Fair Price Range
                    </div>
                    <div class="price-amount">
                        ${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}
                    </div>
                    <div style="font-size: 0.875rem; color: #64748b; margin-top: 8px;">
                        Average: ${formatCurrency(avgPrice)}
                    </div>
                </div>
                
                <div class="price-breakdown">
                    <h4>📊 Price by Market</h4>
                    <div class="market-prices">
                        ${marketBreakdown}
                    </div>
                </div>
                
                <div class="show-vendor-badge">
                    💬 Show this to the vendor!
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px; text-align: center;">
                    <p style="color: #6b7280; font-size: 0.875rem;">
                        ✓ Verified on ${product.lastVerified}<br>
                        Last updated: Today at ${CONFIG.UPDATE_TIME}
                    </p>
                </div>
            </div>
        `;
        
        // Log successful search
        logActivity('search_success', {
            product: searchTerm,
            market: selectedMarket,
            priceRange: `${minPrice}-${maxPrice}`
        });
        
    } catch (error) {
        console.error('Error searching price:', error);
        showNotification('Error searching for product', 'error');
    }
}

/**
 * Quick search for popular products
 * @param {string} term - Product to search
 */
function quickSearch(term) {
    try {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = term;
            searchPrice();
        }
    } catch (error) {
        console.error('Error in quick search:', error);
    }
}

// ============================================
// TRANSPORT CALCULATOR FUNCTIONS
// ============================================

/**
 * Calculate mototaxi fare
 */
function calculateMotoFare() {
    try {
        const fromInput = document.getElementById('motoFrom');
        const toInput = document.getElementById('motoTo');
        const distanceInput = document.getElementById('motoDistance');
        const resultDiv = document.getElementById('motoResult');
        
        if (!distanceInput || !resultDiv) {
            console.error('Required elements not found');
            return;
        }
        
        const distance = parseFloat(distanceInput.value);
        
        // Validate distance
        if (!distance || distance <= 0 || isNaN(distance)) {
            resultDiv.innerHTML = `
                <div style="background: #fef2f2; color: #991b1b; padding: 16px; border-radius: 8px;">
                    ⚠️ Please enter a valid distance (greater than 0 km)
                </div>
            `;
            resultDiv.classList.add('show');
            return;
        }
        
        if (distance > 100) {
            resultDiv.innerHTML = `
                <div style="background: #fef3c7; color: #92400e; padding: 16px; border-radius: 8px;">
                    ⚠️ Distance seems unusually high (${distance} km). Please verify.
                </div>
            `;
            resultDiv.classList.add('show');
            return;
        }
        
        // Calculate fare
        const baseFare = distance * CONFIG.MOTO_RATE_PER_KM;
        const minFare = Math.round(baseFare * 0.9);
        const maxFare = Math.round(baseFare * 1.1);
        const recommendedFare = Math.round(baseFare);
        
        // Get locations
        const from = fromInput ? sanitizeInput(fromInput.value) || 'Starting point' : 'Starting point';
        const to = toInput ? sanitizeInput(toInput.value) || 'Destination' : 'Destination';
        
        // Display result
        resultDiv.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 0.875rem; color: white; opacity: 0.9; margin-bottom: 8px;">
                    ${from} → ${to}
                </div>
                <div style="font-size: 2.5rem; font-weight: 800; margin: 12px 0;">
                    ${formatCurrency(recommendedFare)}
                </div>
                <div style="font-size: 0.875rem; opacity: 0.9; margin-top: 8px;">
                    Fair range: ${formatCurrency(minFare)} - ${formatCurrency(maxFare)}
                </div>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.3); font-size: 0.875rem; opacity: 0.9;">
                    Distance: ${distance} km × ${CONFIG.MOTO_RATE_PER_KM} RWF/km<br>
                    💡 Negotiate before starting your journey
                </div>
            </div>
        `;
        resultDiv.classList.add('show');
        
        // Log calculation
        logActivity('moto_calculation', {
            distance: distance,
            fare: recommendedFare,
            from: from,
            to: to
        });
        
    } catch (error) {
        console.error('Error calculating moto fare:', error);
        showNotification('Error calculating fare', 'error');
    }
}

/**
 * Set route for common destinations
 * @param {string} from - Starting location
 * @param {string} to - Destination
 * @param {number} distance - Distance in km
 */
function setRoute(from, to, distance) {
    try {
        const fromInput = document.getElementById('motoFrom');
        const toInput = document.getElementById('motoTo');
        const distanceInput = document.getElementById('motoDistance');
        
        if (fromInput) fromInput.value = from;
        if (toInput) toInput.value = to;
        if (distanceInput) distanceInput.value = distance;
        
        calculateMotoFare();
        
        // Scroll to result
        const resultDiv = document.getElementById('motoResult');
        if (resultDiv) {
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
    } catch (error) {
        console.error('Error setting route:', error);
    }
}

// ============================================
// CURRENCY CONVERTER FUNCTIONS
// ============================================

/**
 * Convert currency
 */
function convertCurrency() {
    try {
        const amountInput = document.getElementById('currencyAmount');
        const fromSelect = document.getElementById('fromCurrency');
        const toSelect = document.getElementById('toCurrency');
        const resultDiv = document.getElementById('currencyResult');
        
        if (!amountInput || !fromSelect || !toSelect || !resultDiv) {
            console.error('Required elements not found');
            return;
        }
        
        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromSelect.value;
        const toCurrency = toSelect.value;
        
        // Validate amount
        if (!amount || amount <= 0 || isNaN(amount)) {
            resultDiv.innerHTML = `
                <div style="background: #fef2f2; color: #991b1b; padding: 16px; border-radius: 8px;">
                    ⚠️ Please enter a valid amount (greater than 0)
                </div>
            `;
            resultDiv.classList.add('show');
            return;
        }
        
        // Convert currency
        const amountInUSD = amount / CONFIG.CURRENCY_RATES[fromCurrency];
        const convertedAmount = amountInUSD * CONFIG.CURRENCY_RATES[toCurrency];
        
        // Display result
        resultDiv.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 0.875rem; color: #059669; opacity: 0.9; margin-bottom: 8px;">
                    Converted Amount
                </div>
                <div style="font-size: 2.5rem; font-weight: 800; margin: 12px 0;">
                    ${convertedAmount.toFixed(2)} ${toCurrency}
                </div>
                <div style="font-size: 0.875rem; color: white; opacity: 0.9; margin-top: 12px;">
                    ${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}
                </div>
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.3); font-size: 0.75rem; opacity: 0.8;">
                    ⏰ Exchange rates updated: ${CONFIG.LAST_UPDATED}<br>
                    Rates are approximate and may vary
                </div>
            </div>
        `;
        resultDiv.classList.add('show');
        
        // Log conversion
        logActivity('currency_conversion', {
            amount: amount,
            from: fromCurrency,
            to: toCurrency,
            result: convertedAmount
        });
        
    } catch (error) {
        console.error('Error converting currency:', error);
        showNotification('Error converting currency', 'error');
    }
}

// ============================================
// EMERGENCY FUNCTIONS
// ============================================

/**
 * Get directions to location
 * @param {string} placeName - Name of the place
 */
function getDirections(placeName) {
    try {
        const query = encodeURIComponent(`${placeName} Kigali Rwanda`);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
        
        // Open in new tab
        window.open(googleMapsUrl, '_blank');
        
        // Log action
        logActivity('directions_requested', { place: placeName });
        
    } catch (error) {
        console.error('Error getting directions:', error);
        showNotification('Error opening maps', 'error');
    }
}

// ============================================
// FORM HANDLING
// ============================================

/**
 * Submit feedback form
 * @param {Event} event - Form submit event
 */
function submitFeedback(event) {
    event.preventDefault();
    
    try {
        const form = event.target;
        const formData = new FormData(form);
        
        // In production, send to backend
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        alert('Thank you for your feedback! We will respond within 24 hours.');
        
        // Reset form
        form.reset();
        
        // Log submission
        logActivity('feedback_submitted', {
            timestamp: new Date().toISOString()
        });
        
        // TODO: Implement actual form submission
        // Example: sendToBackend(formData);
        
    } catch (error) {
        console.error('Error submitting feedback:', error);
        showNotification('Error submitting form. Please try again.', 'error');
    }
}

// ============================================
// DARK MODE TOGGLE
// ============================================

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    try {
        // TODO: Implement dark mode
        showNotification('Dark mode coming soon!', 'info');
        logActivity('dark_mode_toggle');
    } catch (error) {
        console.error('Error toggling dark mode:', error);
    }
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize application
 */
function initializeApp() {
    try {
        console.log(`
╔═══════════════════════════════════════╗
║   RWANDA PRICE AUTHORITY v${CONFIG.VERSION}   ║
║   Loaded Successfully ✓               ║
╚═══════════════════════════════════════╝
        `);
        
        // Set update time
        const updateTimeElement = document.getElementById('updateTime');
        if (updateTimeElement) {
            updateTimeElement.textContent = CONFIG.UPDATE_TIME;
        }
        
        // Add enter key listeners
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') searchPrice();
            });
        }
        
        const motoDistanceInput = document.getElementById('motoDistance');
        if (motoDistanceInput) {
            motoDistanceInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') calculateMotoFare();
            });
        }
        
        const currencyAmountInput = document.getElementById('currencyAmount');
        if (currencyAmountInput) {
            currencyAmountInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') convertCurrency();
            });
        }
        
        // Log initialization
        logActivity('app_initialized', {
            version: CONFIG.VERSION,
            timestamp: new Date().toISOString(),
            productsLoaded: Object.keys(PRICE_DATABASE).length
        });
        
        // Show welcome message in console
        console.log(`📊 ${Object.keys(PRICE_DATABASE).length} products loaded`);
        console.log(`✓ Application ready`);
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Handle browser back button
window.addEventListener('popstate', () => {
    // Handle navigation state if needed
    logActivity('browser_back_pressed');
});

// Log when user leaves page
window.addEventListener('beforeunload', () => {
    logActivity('page_unload');
});

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================

// Make functions available globally for testing
if (typeof window !== 'undefined') {
    window.RwandaPriceAuthority = {
        version: CONFIG.VERSION,
        searchPrice,
        calculateMotoFare,
        convertCurrency,
        getDirections,
        showSection,
        quickSearch
    };
}
const products = {
  pots: [
    { name: 'گلدان سفالی لوکس', description: 'گلدان سفالی دست‌ساز با طراحی کلاسیک و شیک، مناسب برای گیاهان آپارتمانی.', image: 'https://images.unsplash.com/photo-1611095561950-1a89b8a33e97?q=80&w=2070&auto=format&fit=crop', price: 150000, discount: 0, popularity: 8, plantType: 'low-light' },
    { name: 'گلدان سرامیکی مدرن', description: 'گلدان سرامیکی با لعاب براق و طراحی مینیمال، ایده‌آل برای دکوراسیون مدرن.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', price: 200000, discount: 30, popularity: 9, plantType: 'low-water' },
    { name: 'گلدان مرمری', description: 'گلدان با طرح مرمر، ترکیبی از زیبایی و استحکام برای دکوراسیون لوکس.', image: 'https://images.unsplash.com/photo-1598982395476-a3b499f7ff32?q=80&w=2070&auto=format&fit=crop', price: 300000, discount: 0, popularity: 7, plantType: 'low-light' },
    { name: 'گلدان چوبی طبیعی', description: 'گلدان چوبی با بافت طبیعی، مناسب برای فضاهای گرم و صمیمی.', image: 'https://images.unsplash.com/photo-1611095561950-1a89b8a33e97?q=80&w=2070&auto=format&fit=crop', price: 120000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  indoor: [
    { name: 'پوتوس طلایی', description: 'گیاه پوتوس با برگ‌های سبز و طلایی، مقاوم و مناسب برای نور کم.', image: 'https://images.unsplash.com/photo-1610986004638-c15a58e0ebec?q=80&w=2070&auto=format&fit=crop', price: 80000, discount: 0, popularity: 9, plantType: 'low-light' },
    { name: 'سانسوریا مخملی', description: 'سانسوریا با برگ‌های بلند و مخملی، تصفیه‌کننده هوای خانه.', image: 'https://images.unsplash.com/photo-1597086853960-658a496a6d56?q=80&w=2070&auto=format&fit=crop', price: 100000, discount: 20, popularity: 8, plantType: 'low-water' },
    { name: 'فیکوس الاستیکا', description: 'فیکوس با برگ‌های براق و تیره، مناسب برای دکوراسیون داخلی شیک.', image: 'https://images.unsplash.com/photo-1610986004638-c15a58e0ebec?q=80&w=2070&auto=format&fit=crop', price: 150000, discount: 0, popularity: 7, plantType: 'low-light' },
    { name: 'کاج مطبق', description: 'گیاه کاج مطبق با ظاهر مینیاتوری، ایده‌آل برای فضاهای کوچک.', image: 'https://images.unsplash.com/photo-1597086853960-658a496a6d56?q=80&w=2070&auto=format&fit=crop', price: 200000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  outdoor: [
    { name: 'رز هلندی', description: 'گل رز هلندی در رنگ‌های متنوع، مناسب برای باغچه‌های لوکس.', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2070&auto=format&fit=crop', price: 50000, discount: 0, popularity: 9, plantType: 'flowering' },
    { name: 'یاس رازقی', description: 'یاس رازقی معطر با گل‌های سفید، ایده‌آل برای فضای باز.', image: 'https://images.unsplash.com/photo-1582793988953-209c22a3b6e9?q=80&w=2070&auto=format&fit=crop', price: 60000, discount: 0, popularity: 8, plantType: 'flowering' },
    { name: 'نرگس شیراز', description: 'گل نرگس با عطر دل‌انگیز، مناسب برای باغ و فضای سبز.', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2070&auto=format&fit=crop', price: 45000, discount: 0, popularity: 7, plantType: 'flowering' },
    { name: 'لاله عباسی', description: 'گل لاله عباسی با رنگ‌های شاد، مناسب برای حاشیه باغچه.', image: 'https://images.unsplash.com/photo-1582793988953-209c22a3b6e9?q=80&w=2070&auto=format&fit=crop', price: 40000, discount: 0, popularity: 6, plantType: 'flowering' },
  ],
  'flower-seeds': [
    { name: 'بذر آفتابگردان', description: 'بذر آفتابگردان برای کاشت گل‌های بزرگ و جذاب.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 20000, discount: 25, popularity: 8, plantType: 'flowering' },
    { name: 'بذر لاله', description: 'بذر لاله در رنگ‌های متنوع، مناسب برای باغچه‌های زینتی.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 25000, discount: 0, popularity: 7, plantType: 'flowering' },
    { name: 'بذر میخک', description: 'بذر میخک با گل‌های معطر، ایده‌آل برای باغچه.', image: 'https://images.unsplash.com/photo-1617055453186-314ff4ebedee?q=80&w=2070&auto=format&fit=crop', price: 18000, discount: 0, popularity: 6, plantType: 'flowering' },
  ],
  'vegetable-seeds': [
    { name: 'بذر گوجه‌فرنگی', description: 'بذر گوجه‌فرنگی ارگانیک، مناسب برای کاشت خانگی.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 15000, discount: 0, popularity: 8, plantType: 'low-water' },
    { name: 'بذر ریحان', description: 'بذر ریحان معطر، مناسب برای آشپزی و باغچه.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 12000, discount: 0, popularity: 7, plantType: 'low-water' },
    { name: 'بذر کاهو', description: 'بذر کاهو برای کاشت سبزیجات تازه و ترد.', image: 'https://images.unsplash.com/photo-1598032895397-b947244972c2?q=80&w=2070&auto=format&fit=crop', price: 10000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
  'edible-seeds': [
    { name: 'بذر کدو', description: 'بذر کدو برای کاشت در باغچه‌های خانگی.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 20000, discount: 0, popularity: 7, plantType: 'low-water' },
    { name: 'بذر توت‌فرنگی', description: 'بذر توت‌فرنگی برای کاشت میوه‌های شیرین و جذاب.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 30000, discount: 0, popularity: 8, plantType: 'flowering' },
    { name: 'بذر هندوانه', description: 'بذر هندوانه برای کاشت میوه‌های آبدار و شیرین.', image: 'https://images.unsplash.com/photo-1603046891887-1533e8e0b49d?q=80&w=2070&auto=format&fit=crop', price: 25000, discount: 0, popularity: 6, plantType: 'low-water' },
  ],
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cartCount').textContent = cartCount;
}

updateCartCount();

gsap.utils.toArray('.section-animate').forEach(section => {
  gsap.fromTo(section, 
    { opacity: 0, y: 80 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
});

function startCountdown() {
  document.querySelectorAll('.countdown-timer').forEach(timer => {
    const endDate = new Date(timer.dataset.end).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endDate - now;
      if (distance < 0) {
        timer.textContent = 'منقضی شده';
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      timer.textContent = `${days}روز ${hours}:${minutes}:${seconds}`;
    };
    updateTimer();
    setInterval(updateTimer, 1000);
  });
}

function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  animateCartAddition();
}

function animateCartAddition() {
  gsap.to('.cart-icon', {
    scale: 1.2,
    duration: 0.2,
    repeat: 1,
    yoyo: true,
    ease: 'power1.inOut'
  });
}

function showCart() {
  const cartModal = document.getElementById('cartModal');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const discountedPrice = item.price * (1 - (products[Object.keys(products).find(key => products[key].some(p => p.name === item.name))] || []).find(p => p.name === item.name)?.discount / 100 || 0);
    total += discountedPrice * item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="flex-1">
          <p class="text-lg font-semibold text-green-900">${item.name}</p>
          <p class="text-gray-700">${discountedPrice.toLocaleString()} تومان</p>
        </div>
        <div class="flex items-center">
          <button onclick="updateCartItem(${index}, ${item.quantity - 1})" class="px-2">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button onclick="updateCartItem(${index}, ${item.quantity + 1})" class="px-2">+</button>
          <button onclick="removeCartItem(${index})" class="text-red-600 mr-2">حذف</button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = total.toLocaleString();
  cartModal.classList.remove('hidden');
}

function updateCartItem(index, quantity) {
  if (quantity <= 0) {
    removeCartItem(index);
  } else {
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCart();
  }
}

function removeCartItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showCart();
}

function closeCart() {
  document.getElementById('cartModal').classList.add('hidden');
}

function toggleChat() {
  const chatModal = document.getElementById('chatModal');
  chatModal.classList.toggle('active');
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  const message = chatInput.value.trim();

  if (message) {
    chatMessages.innerHTML += `<div class="chat-message user">${message}</div>`;
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      const responses = [
        'سلام! چطور می‌توانم به شما کمک کنم؟',
        'ممنون از پیام شما! لطفاً جزئیات بیشتری بفرستید.',
        'در حال بررسی درخواست شما هستیم...',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      chatMessages.innerHTML += `<div class="chat-message support">${randomResponse}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
}

function updatePriceRange() {
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');
  const minPriceValue = document.getElementById('minPriceValue');
  const maxPriceValue = document.getElementById('maxPriceValue');
  const rangeFill = document.querySelector('.range-fill');

  let min = parseInt(minPrice.value);
  let max = parseInt(maxPrice.value);

  if (min > max) {
    [min, max] = [max, min];
    minPrice.value = min;
    maxPrice.value = max;
  }

  minPriceValue.textContent = min.toLocaleString();
  maxPriceValue.textContent = max.toLocaleString();

  const minPercent = (min / 1000000) * 100;
  const maxPercent = (max / 1000000) * 100;
  rangeFill.style.left = `${minPercent}%`;
  rangeFill.style.width = `${maxPercent - minPercent}%`;

  applyFilters();
}

function showCategory(category) {
  if (category === 'seeds') {
    document.getElementById('seedsSubcategoriesModal').classList.remove('hidden');
    return;
  }
  const modal = document.getElementById('productsModal');
  const modalTitle = document.getElementById('productsModalTitle');
  const modalContent = document.getElementById('productsModalContent');
  modalTitle.textContent = {
    pots: 'گلدان‌ها',
    indoor: 'گل‌های آپارتمانی',
    outdoor: 'گل‌های فضای سبز'
  }[category];
  applyFilters(category);
  modal.classList.remove('hidden');
}

function showSubCategory(subCategory) {
  const modal = document.getElementById('productsModal');
  const modalTitle = document.getElementById('productsModalTitle');
  const modalContent = document.getElementById('productsModalContent');
  modalTitle.textContent = {
    'flower-seeds': 'بذر گل‌ها',
    'vegetable-seeds': 'بذر سبزی‌ها',
    'edible-seeds': 'بذر خوراکی‌ها'
  }[subCategory];
  applyFilters(subCategory);
  document.getElementById('seedsSubcategoriesModal').classList.add('hidden');
  modal.classList.remove('hidden');
}

function applyFilters(category = null) {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilter = category || document.getElementById('categoryFilter').value;
  const plantTypeFilter = document.getElementById('plantTypeFilter').value;
  const sortFilter = document.getElementById('sortFilter').value;
  const discountFilter = document.getElementById('discountFilter').checked;
  const minPrice = parseInt(document.getElementById('minPrice').value);
  const maxPrice = parseInt(document.getElementById('maxPrice').value);
  const modalContent = document.getElementById('productsModalContent
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Han Quoc",
      price: 2500000,
      img: "/assignment1/images/Anh1.jpg",
      desc: "Du lich han quoc",
    },
    {
      id: 2,
      name: "Italy",
      price: 3000000,
      img: "/assignment1/images/Anh9.jpg",
      desc: "Du lich Italy",
    },
    {
      id: 3,
      name: "Duc",
      price: 3500000,
      img: "/assignment1/images/Anh7.jpg",
      desc: "Du lich nuoc Duc",
    },
  ];

  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dotsContainer = document.getElementById("dots");
  let current = 0;
  function showSlide(n) {
    const slidesWrap = document.querySelector(".slides");
    current = (n + slides.length) % slides.length;
    slidesWrap.style.transform = `translateX(-${current * 100}%)`;

    [...dotsContainer.children].forEach((b, i) =>
      b.classList.toggle("active", i === current)
    );
  }

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(b);
  });
  prevBtn.addEventListener("click", () => showSlide(current - 1));
  nextBtn.addEventListener("click", () => showSlide(current + 1));

  let slideInterval = setInterval(() => showSlide(current + 1), 4000);
  document
    .getElementById("slider")
    .addEventListener("mouseover", () => clearInterval(slideInterval));
  document
    .getElementById("slider")
    .addEventListener(
      "mouseout",
      () => (slideInterval = setInterval(() => showSlide(current + 1), 4000))
    );
  showSlide(0);

  const productList = document.getElementById("product-list");
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="meta">
        <h4>${p.name}</h4>
        <div>${p.price.toLocaleString()} ₫</div>
        <button class="add" data-id="${p.id}">Thêm vào giỏ</button>
      </div>
      <div class="hover-detail">
        <strong>${p.name}</strong>
        <p>${p.desc}</p>
      </div>
    `;
    productList.appendChild(card);
  });

  const cartKey = "mini_shop_cart_v1";
  function loadCart() {
    return JSON.parse(localStorage.getItem(cartKey) || "[]");
  }
  function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }
  function renderCart() {
    const itemsEl = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");
    const cart = loadCart();
    itemsEl.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.qty} - ${(
        item.price * item.qty
      ).toLocaleString()} ₫`;
      itemsEl.appendChild(li);
      total += item.price * item.qty;
    });
    totalEl.textContent = total.toLocaleString();
  }
  productList.addEventListener("click", (e) => {
    if (e.target.matches(".add")) {
      const id = Number(e.target.dataset.id);
      const p = products.find((x) => x.id === id);
      const cart = loadCart();
      const found = cart.find((x) => x.id === id);
      if (found) found.qty++;
      else cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
      saveCart(cart);
      renderCart();
    }
  });
  document.getElementById("checkout").addEventListener("click", () => {
    localStorage.removeItem(cartKey);
    renderCart();
    alert("Thanh toán giả lập: đã xóa giỏ hàng.");
  });
  renderCart();

  const countdownEl = document.getElementById("countdown");
  let saleEnd = Date.now() + 10 * 60 * 1000;
  function updateCountdown() {
    const diff = Math.max(0, saleEnd - Date.now());
    const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    countdownEl.textContent = `${h}:${m}:${s}`;
    if (diff === 0) clearInterval(countdownTimer);
  }
  updateCountdown();
  const countdownTimer = setInterval(updateCountdown, 1000);

  const form = document.getElementById("order-form");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const qty = Number(document.getElementById("qty").value);
    const errEl = document.getElementById("form-errors");

    let errors = [];

    if (name === "") {
      errors.push("Tên không được để trống.");
    } else if (name.length < 2) {
      errors.push("Tên phải có ít nhất 2 ký tự.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Email không hợp lệ.");
    }

    if (qty < 1 || isNaN(qty)) {
      errors.push("Số lượng phải >= 1.");
    }

    if (errors.length > 0) {
      errEl.innerHTML = errors.map((e) => `<div>• ${e}</div>`).join("");
      errEl.style.display = "block";
      return;
    }

    errEl.innerHTML = "";
    errEl.style.display = "none";

    alert(`Đã gửi đơn:\nTên: ${name}\nEmail: ${email}\nSố lượng: ${qty}`);
    form.reset();
  });

  document.getElementById("get-loc").addEventListener("click", () => {
    const out = document.getElementById("loc-result");
    if (!navigator.geolocation) {
      out.textContent = "Trinh duyet khong ho tro.";
      return;
    }
    out.textContent = "Dang lay vi tri ......";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        out.innerHTML = `Vi Do: ${latitude.toFixed(
          6
        )} <br> Kinh Do: ${longitude.toFixed(6)}`;
      },
      (err) => {
        out.textContent = "Loi lay vi tri : " + err.message;
      },
      { timeout: 10000 }
    );
  });

  productList.addEventListener("mouseover", (e) => {
    const card = e.target.closest(".card");
    if (card) card.style.boxShadow = "0 6px 18px rgba(0,0,0,.18)";
  });
  productList.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".card");
    if (card) card.style.boxShadow = "";
  });
});

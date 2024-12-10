// Menambahkan event listener untuk semua tombol plus dan minus
document.querySelectorAll(".btn-quantity").forEach(button => {
  button.addEventListener("click", function () {
    const menuItem = this.closest(".menu-item"); // Ambil elemen menu-item terdekat
    const quantitySpan = menuItem.querySelector(".quantity"); // Ambil span quantity dalam konteks menu-item ini
    let quantity = parseInt(quantitySpan.textContent);

    if (this.textContent === "+") { // Jika tombol yang diklik adalah "+"
      quantity++; // Tambah 1
    } else if (this.textContent === "-" && quantity > 0) { // Jika tombol yang diklik adalah "-" dan quantity lebih dari 0
      quantity--; // Kurangi 1
    }

    quantitySpan.textContent = quantity; // Update tampilan quantity
  });
});

document.getElementById("btn-plus").addEventListener("click", function () {
  const quantitySpan = document.querySelector(".quantity");
  let quantity = parseInt(quantitySpan.textContent);
  quantity++;
  quantitySpan.textContent = quantity;
});

document.getElementById("btn-minus").addEventListener("click", function () {
  const quantitySpan = document.querySelector(".quantity");
  let quantity = parseInt(quantitySpan.textContent);
  if (quantity > 0) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
});

let orderItem = '';
let orderPrice = 0;

function updateOrder(item, price) {
  document.getElementById(
    "order-summary"
  ).textContent = `${item} x1 - Rp${price}`;
  document.getElementById("total-price").textContent = `Total: Rp${price}`;

  document.getElementById("checkout-modal").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkout-modal").style.display = "none";
}

function redirectToWhatsApp(orderItem, orderPrice) {
  const message = `Halo, saya ingin memesan ${orderItem} seharga Rp${orderPrice}`;
  const whatsappURL = `https://wa.me/628?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}
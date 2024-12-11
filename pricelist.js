// Array untuk menyimpan cart (keranjang)
let cart = [];

// Menambahkan event listener pada tombol "Add to Cart"
document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const menuItem = this.closest(".menu-item"); // Menemukan elemen menu-item terdekat
    const itemName = menuItem.querySelector(".item-name").textContent.trim(); // Nama item
    const itemPrice = parseInt(
      menuItem.querySelector(".item-price").textContent.replace("Rp", "").trim()
    ); // Harga item (asumsi ada prefix Rp)
    const quantity = 1; // Ketika item pertama kali ditambahkan, quantity = 1

    // Update cart (keranjang) berdasarkan item yang ada
    const existingItem = cart.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += 1; // Jika item sudah ada, tambahkan quantity
    } else {
      cart.push({ name: itemName, quantity: quantity, price: itemPrice }); // Tambah item baru jika belum ada
    }

    updateOrderSummary(); // Update order summary setiap kali cart berubah
    redirectToWhatsApp(); // Arahkan ke WhatsApp untuk checkout
  });
});

// Fungsi untuk mengupdate tampilan order summary
function updateOrderSummary() {
  let orderSummary = "";
  let totalPrice = 0;

  // Loop untuk menampilkan semua item yang ada di cart
  if (cart.length === 0) {
    orderSummary = "Keranjang Anda kosong!";
    totalPrice = 0;
  } else {
    cart.forEach((item) => {
      orderSummary += `${item.name} x${item.quantity} - Rp${
        item.price * item.quantity
      }\n`;
      totalPrice += item.price * item.quantity;
    });
  }

  document.getElementById("order-summary").textContent = orderSummary; // Menampilkan item summary
  document.getElementById("total-price").textContent = `Total: Rp${totalPrice}`; // Menampilkan total harga
}
document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol minus dan plus
  const btnMinus = document.querySelectorAll(".btn-minus");
  const btnPlus = document.querySelectorAll(".btn-plus");
  const quantities = document.querySelectorAll(".quantity");

  // Menangani klik tombol minus
  btnMinus.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantities[index].textContent);
      if (quantity > 0) {
        quantity--;
        quantities[index].textContent = quantity;
      }
    });
  });

  // Menangani klik tombol plus
  btnPlus.forEach((button, index) => {
    button.addEventListener("click", () => {
      let quantity = parseInt(quantities[index].textContent);
      quantity++;
      quantities[index].textContent = quantity;
    });
  });
});
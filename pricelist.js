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

// Event listener untuk tombol checkout
document.getElementById("checkout-button").addEventListener("click", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  let orderMessage = "";

  menuItems.forEach(item => {
    const itemName = item.querySelector(".menu-name").textContent;
    const quantity = parseInt(item.querySelector(".quantity").textContent);

    if (quantity > 0) {
      orderMessage += `Saya ingin memesan ${quantity} ${itemName}.\n`;
    }
  });

  if (orderMessage) {
    const phoneNumber = "6289627063933"; // Ganti dengan nomor WhatsApp Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, "_blank");
  } else {
    alert("Silakan pilih jumlah item sebelum checkout.");
  }
});
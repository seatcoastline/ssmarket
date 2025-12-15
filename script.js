// =======================
// LOGIN
// =======================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        localStorage.setItem("growinidLogin", "true");
        window.location.href = "index.html";
    });
}

// =======================
// CEK LOGIN (INDEX & ORDER)
// =======================
if (
    location.pathname.includes("index.html") ||
    location.pathname.includes("order.html")
) {
    if (localStorage.getItem("growinidLogin") !== "true") {
        alert("Silakan login terlebih dahulu");
        window.location.href = "login.html";
    }
}

// =======================
// LOGOUT
// =======================
function logout() {
    localStorage.removeItem("growinidLogin");
    alert("Logout berhasil");
    window.location.href = "login.html";
}

// =======================
// ORDER FORM
// =======================
const orderForm = document.querySelector(".order-form");
if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert(
            "Pesanan berhasil dikirim!\nTim GrowinID akan menghubungi Anda via WhatsApp."
        );

        orderForm.reset();
    });
}

const form = document.getElementById("loginForm");
if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        localStorage.setItem("growinidLogin", "true");
        window.location.href = "index.html";
    });
}

if (location.pathname.includes("index.html")) {
    if (localStorage.getItem("growinidLogin") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("growinidLogin");
    alert("Logout berhasil");
    window.location.href = "login.html";
}

// ORDER FORM
const orderForm = document.querySelector(".order-form");
if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Pesanan berhasil dikirim! Tim GrowinID akan menghubungi Anda.");
        orderForm.reset();
    });
}

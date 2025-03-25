document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const loginButton = document.querySelector(".login-button");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    errorMessage.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    loginButton.classList.remove("shake");

    let isValid = true;

    if (!email) {
        emailError.textContent = "Будь ласка, введіть email.";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Невірний формат email.";
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Будь ласка, введіть пароль.";
        isValid = false;
    }

    if (!isValid) {
        loginButton.classList.add("shake");
        return;
    }

    if (email === "test@example.com" && password === "password") {
        loginButton.textContent = "⏳ Вхід...";
        loginButton.style.opacity = "0.7";

        setTimeout(() => {
            alert("✅ Вхід успішний!");
            window.location.href = "dashboard.html";
        }, 1500);
    } else {
        errorMessage.textContent = "❌ Невірний email або пароль.";
        loginButton.classList.add("shake");
    }
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    .shake {
        animation: shake 0.3s ease-in-out;
    }
`, styleSheet.cssRules.length);
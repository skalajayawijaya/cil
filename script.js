// ===============================
// LOGIN PIN
// ===============================
const CORRECT_PIN = "123456";

const loginPage = document.getElementById("login");
const mainPage = document.getElementById("main");
const pinInput = document.getElementById("pin");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("msg");

openBtn.addEventListener("click", () => {
    const pin = pinInput.value.trim();

    if (pin === CORRECT_PIN) {

        message.textContent = "";
        loginPage.classList.add("fade-out");

        setTimeout(() => {
            loginPage.style.display = "none";
            mainPage.style.display = "block";

            mainPage.classList.add("fade-in");

        }, 800);

    } else {

        message.textContent = "PIN Salah 💔";

        pinInput.classList.remove("shake");

        void pinInput.offsetWidth;

        pinInput.classList.add("shake");
    }
});

pinInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        openBtn.click();

    }

});

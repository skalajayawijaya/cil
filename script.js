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
// ===================================
// ENVELOPE & LETTER
// =================================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const letterText = `Hai Cil 🌻

Terima kasih sudah membuka surat ini.

Website kecil ini sengaja kubuat khusus untukmu.

Semoga setiap bunga matahari yang kamu lihat selalu mengingatkan bahwa akan selalu ada seseorang yang mendoakan kebahagiaanmu.

❤️`;

if (envelope) {
    envelope.addEventListener("click", () => {
        envelope.classList.add("open-envelope");

        setTimeout(() => {
            envelope.style.display = "none";

            letter.classList.remove("hidden");
            letter.classList.add("show");

            typeLetter();
        }, 800);
    });
}
function typeLetter(){

    typing.textContent = "";

    let i = 0;

    const timer = setInterval(() => {

        typing.textContent += letterText.charAt(i);

        i++;

        if(i >= letterText.length){

            clearInterval(timer);

        }

    },35);

}

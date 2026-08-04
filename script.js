// ===============================
// LOGIN PIN
// ===============================
const CORRECT_PIN = "060904";

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
// BALAS SURAT
const replyBtn = document.getElementById("replyBtn");
const replySection = document.getElementById("reply");

if (replyBtn && replySection) {
    replyBtn.addEventListener("click", () => {
        replySection.hidden = false;

        replySection.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// FITUR TOMBOL BALASAN

const replyText = document.getElementById("replyText");
const sendReply = document.getElementById("sendReply");
const saveReply = document.getElementById("saveReply");
const downloadReply = document.getElementById("downloadReply");
const copyReply = document.getElementById("copyReply");
const result = document.getElementById("result");

// KIRIM BALASAN
if (sendReply) {
    sendReply.addEventListener("click", () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Tulis balasanmu terlebih dahulu ❤️");
            return;
        }

        result.textContent = "Balasanmu sudah terkirim ❤️";
    });
}

// SIMPAN BALASAN
if (saveReply) {
    saveReply.addEventListener("click", () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Belum ada balasan untuk disimpan.");
            return;
        }

        localStorage.setItem("balasanSurat", text);
        alert("Balasan berhasil disimpan ❤️");
    });
}

// DOWNLOAD TXT
if (downloadReply) {
    downloadReply.addEventListener("click", () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Tulis balasan terlebih dahulu.");
            return;
        }

        const file = new Blob([text], {
            type: "text/plain"
        });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "balasan-surat.txt";
        link.click();

        URL.revokeObjectURL(link.href);
    });
}

// COPY
if (copyReply) {
    copyReply.addEventListener("click", async () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Tidak ada teks untuk dicopy.");
            return;
        }

        await navigator.clipboard.writeText(text);
        alert("Balasan berhasil dicopy ❤️");
    });
}
if (sendReply) {
    sendReply.addEventListener("click", () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Tulis balasanmu terlebih dahulu ❤️");
            return;
        }

        const nomor = "6285158859417"
        const pesan = encodeURIComponent(text);

        window.open(
            `https://wa.me/${nomor}?text=${pesan}`,
            "_blank"
        );
    });
}

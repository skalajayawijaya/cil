// ==============================
// LOGIN PIN
// ==============================

const CORRECT_PIN = "060904";

const loginPage = document.getElementById("login");
const mainPage = document.getElementById("main");
const pinInput = document.getElementById("pin");
const openBtn = document.getElementById("openBtn");
const message = document.getElementById("msg");

openBtn.addEventListener("click", function () {
  const pin = pinInput.value.trim();

  if (pin === CORRECT_PIN) {
    // PIN BENAR
    message.textContent = "";

    loginPage.style.display = "none";
    mainPage.style.display = "block";

  } else {
    // PIN SALAH
    message.textContent = "PIN Salah ❤️";

    pinInput.classList.add("shake");

    setTimeout(function () {
      pinInput.classList.remove("shake");
    }, 500);
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

// KIRIM BALASAN KE GOOGLE SHEETS
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwNdPO0yeFGi2Wa8j5IYc_nmxPopiT7TX-VGxmt8g-rzhj0ToAHn-qCj_C0ZCUh7DYa5g/exec";

if (sendReply) {
    sendReply.addEventListener("click", async () => {
        const text = replyText.value.trim();

        if (text === "") {
            alert("Tulis balasanmu terlebih dahulu ❤️");
            return;
        }

        try {
            await fetch("https://script.google.com/macros/s/AKfycbwNdPO0yeFGi2Wa8j5IYc_nmxPopiT7TX-VGxmt8g-rzhj0ToAHn-qCj_C0ZCUh7DYa5g/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    message: text
                })
            });

            result.textContent = "Balasan berhasil dikirim ❤️";
            replyText.value = "";

        } catch (error) {
            alert("Balasan gagal dikirim.");
            console.error(error);
        }
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
  sendReply.addEventListener("click", async (event) => {
    event.preventDefault();

    const text = replyText.value.trim();

    if (text === "") {
      alert("Tulis balasanmu terlebih dahulu ❤️");
      return;
    }

    try {
await fetch("https://script.google.com/macros/s/AKfycbwNdPO0yeFGi2Wa8j5IYc_nmxPopiT7TX-VGxmt8g-rzhj0ToAHn-qCj_C0ZCUh7DYa5g/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({
      message: text
    })
  });

  alert("Balasan berhasil dikirim ke Google Sheets ❤️");
  replyText.value = "";

} catch (error) {
  alert("Balasan gagal dikirim.");
  console.error(error);
}

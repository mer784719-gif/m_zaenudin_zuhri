const chibiEl = document.getElementById("chibi");
const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

/* SLIDE DATA */
const slides = [
  { img: "gif/1.gif", text: "Halloo gantengkuu 💛" },
  { img: "gif/2.gif", text: "Kamu tau nggak hari ini hari apa?" },
  { img: "gif/3.gif", text: "Yaaapp, hari spesialnya sayangku yang paling ganteng" },
  { img: "gif/4.gif", text: "HBD sayangku, cintakuu, gantengkuu" },
  { img: "gif/5.gif", text: "Di ulang tahunmu ini, berdoa banyak banyak yaa" },
  { img: "gif/6.gif", text: "Aku juga selalu ikut doain kamu dari sini" },
  { img: "gif/7.gif", text: "Semoga kamu jadi pribadi yang lebih baik, lebih dewasa, dan lebih bahagia lagi ke depannya" },
  { img: "gif/8.gif", text: "Sayangku harus panjang umur, sehat terus, dan jangan sering cape-cape yaaa" },
  { img: "gif/9.gif", text: "Aku maunya kamu selalu baik-baik aja" },
  { img: "gif/10.gif", text: "Makasii yaa sudah kuat dan bertahan sejauh ini" },
  { img: "gif/2.gif", text: "Aku bangga banget sama kamu" },
  { img: "gif/11.gif", text: "Semoga kedepannya kita bisa terus bareng-bareng" },
  { img: "gif/12.gif", text: "I love you sayangkuuuuuu M. Zaenudin Zuhri ❤️" }
];

let index = 0;
let typing = false;

/* TAMPIL SLIDE PERTAMA */
showSlide();

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  if (typing) return;

  index++;
  if (index < slides.length) {
    showSlide();
  } else {
    nextBtn.innerText = "💛";
    nextBtn.disabled = true;
  }
});

/* FUNCTION SLIDE */
function showSlide() {
  // ganti chibi
  chibiEl.src = slides[index].img;

  // reset animasi chibi
  chibiEl.style.animation = "none";
  chibiEl.offsetHeight;
  chibiEl.style.animation = "bounce 1.6s infinite ease-in-out";

  // efek ngetik
  textEl.innerHTML = "";
  let i = 0;
  typing = true;

  const interval = setInterval(() => {
    textEl.innerHTML += slides[index].text.charAt(i);
    i++;
    if (i >= slides[index].text.length) {
      clearInterval(interval);
      typing = false;
    }
  }, 45);
}


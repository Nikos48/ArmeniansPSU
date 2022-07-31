const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");
if (hamburger) {
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUl.classList.toggle("active");
})}


const phoneNumber = "+79624453363"
function copyPhone() { 
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("+79624453363")
    .then(() => {
      alert("Номер Скопирован");
    })
    .catch(() => {
      alert("Что-то пошло не так");
    })
}

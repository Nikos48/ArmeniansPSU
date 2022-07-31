const phoneNumber = "+79624453363"
function copyPhone() { 
    /* Copy the text inside the text field */
    navigator.clipboard.writeText("+79624453363")
    .then(() => {
      alert("Номер скопирован");
    })
    .catch(() => {
      alert("Что-то пошло не так");
    })
}

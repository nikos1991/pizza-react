document.addEventListener('DOMContentLoaded', function() {
let modal = document.getElementsByClassName("modal")[0];
let openModalBtn = document.getElementsByClassName("modal-open")[0];
let closeBtn = document.getElementsByClassName("close")[0];

// Открытие модального окна при клике на кнопку
openModalBtn.onclick = function() {
   modal.style.display = "block";
}

// Закрытие модального окна при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});
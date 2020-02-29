var button = document.querySelector(".openform-button");

var popup = document.querySelector(".search-form");

/*var close = popup.querySelector(".modal-close");       кнопка закрытия формы Крестик- В Седоне этого нет*/

var form = popup.querySelector(".booking-form"); /*form-wrapper*/

var adultsNumber = popup.querySelector("[value=adultsNumber]");

var childrenNumber = popup.querySelector("[value=childrenNumber]");

/*var userMessage = popup.querySelector("[name=userMessage]");*/

var isStorageSupport = true;
var currentAdultsNumber = "";
var currentChildrenNumber = "";

try {
  currentAdultsNumber = localStorage.getItem("adultsNumber");
  currentChildrenNumber = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("search-form-show");
  adultsNumber.focus();
  if (currentAdultsNumber) {
    adultsNumber.value = currentAdultsNumber;
    childrenNumber.focus();
  } else {
    adultsNumber.focus();
  }
});
  /*
  if (curChildNumber) {
    userEmail.value = currentEmail;
    userMessage.focus();
  } else {
    userEmail.focus();
  }
});*/

/*
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("search-form-show");
  popup.classList.remove("search-form-error");
});
*/
form.addEventListener("submit", function (evt) {
  if (!adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsNumber", adultsNumber.value);
      localStorage.setItem("childrenNumber", childrenNumber.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
      popup.classList.remove("search-form-error");
    }
  }
});

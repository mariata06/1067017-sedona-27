var button = document.querySelector(".openform-button");
var popup = document.querySelector(".search-form");   /*внешняя обертка формы*/
var form = popup.querySelector("form");  /*в обертке находим саму <форму>*/

var adultsNumber = form.querySelector("[name=adultsNumber]");

var childrenNumber = form.querySelector("[name=childrenNumber]");

var checkin = form.querySelector(".checkin"); 

var isStorageSupport = true;
var currentAdultsNumber = "";
var currentChildrenNumber = "";

try {
  currentAdultsNumber = localStorage.getItem("adultsNumber");
  currentChildrenNumber = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("search-form-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-hide");
  popup.classList.add("search-form-show");
  popup.classList.remove("search-form-error");
  if (currentAdultsNumber) {
    adultsNumber.value = currentAdultsNumber;
    childrenNumber.focus();
  } else {
    adultsNumber.focus();
  }
  
  if (currentChildrenNumber) {
    childrenNumber.value = currentChildrenNumber;
    checkin.focus();
  } else {
    childrenNumber.focus();
  }
});
  
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

/*
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("search-form-show")) {
      popup.classList.remove("search-form-show");
      popup.classList.remove("search-form-error");
    }
  }
});
*/
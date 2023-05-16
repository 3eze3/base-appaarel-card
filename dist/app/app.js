const button = document.querySelector(".register__button");
button.addEventListener("click", event => {
  event.preventDefault();
  checkEmail();
});
function checkEmail() {
  const email = document.querySelector(".register__input");
  if (email === " ") return;
  const regex = /\w@(gmail|hotmail|yahoo).com$/gi;
  if (regex.test(email.value)) {
    thanks();
  } else {
    addRemoveBox();
  }
}
function addRemoveBox() {
  const box = document.querySelector(".register__box");
  box.classList.add("register__active");
  setTimeout(() => {
    box.classList.remove("register__active");
  }, 2000);
}
function thanks() {
  const content = document.querySelector(".card__content");
  const picture = document.querySelector(".card__ilustration");
  const box_thanks = document.querySelector(".card__thanks");
  content.classList.add("card__content--active");
  picture.classList.add("card__ilustration--active");
  setTimeout(() => {
    document.body.style.backgroundImage =
      " linear-gradient(164deg, rgba(108,142,144,1) 50%, rgba(0,212,255,1) 85%, rgba(3,181,178,1) 96%)";
    document.body.style.backgroundColor = "rgb(108,142,144)";
    box_thanks.classList.add("card__thanks--active");
  }, 250);
}

var css = document.querySelector("h3");
var colorOne = document.querySelector("#colorOne");
var colorTwo = document.querySelector("#colorTwo");
var cardBg = document.querySelector(".card-bg");
var copyCssCode = document.querySelector(".copyCssCode");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var copyOriginalText = copyCssCode.innerHTML;

function setGradient() {
  cardBg.style.background =
    "linear-gradient(135deg, " + colorOne.value + "," + colorTwo.value + ")";

  css.textContent = "background-image:" + cardBg.style.background + ";";

  input1.value = colorOne.value;
  input2.value = colorTwo.value;
}

colorOne.addEventListener("input", setGradient);

colorTwo.addEventListener("input", setGradient);

function copied() {
  event.preventDefault();
  copyCssCode.innerHTML = "Copied!";

  setTimeout(function () {
    copyCssCode.innerHTML = copyOriginalText;
  }, 1000);
}

copyCssCode.addEventListener("click", function () {
  var textArea = document.createElement("textarea");
  textArea.value = css.innerHTML;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  copied;
});

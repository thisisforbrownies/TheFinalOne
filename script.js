const form = document.getElementById("form");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");

submit.addEventListener("click", function(e) {
 e.preventDefault();
 alert("You answered " + answer.value);
 HTMLFormElement.prototype.submit.call(form);
});
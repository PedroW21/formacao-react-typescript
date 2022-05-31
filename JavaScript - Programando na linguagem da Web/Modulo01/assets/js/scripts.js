// .textContent retorna (e possibilita a manipulação) o conteudo do h1 e não o elemento
let title = document.querySelector(".header-title");
console.log(title.textContent);

title.textContent = "Aparecida Nutricionista";

console.log(title.textContent);
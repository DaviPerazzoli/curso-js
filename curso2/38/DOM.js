const caixa1 = document.querySelector('#caixa1')
const btnC=[...document.querySelectorAll('.curso')]

console.log(caixa1.children)            //* elementos filhos
console.log(caixa1.firstElementChild)   //* primeiro elemento filho
console.log(caixa1.lastElementChild)    //* último elemento filho

console.log(caixa1.children.length > 0 ? "possui filhos" : "nao possui filhos")

console.log(btnC[0].parentNode) //* elemento pai


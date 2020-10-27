const $root = document.querySelector('#root'); //Pega a div lá do HTML. Tem o cifrão pq é boa prática colocá-lo no início quando a variável se referencia a um elemento do HTML
const qtd = 12;
//const texto = 'Carrinho (' + qtd + ')';
const $carrinho = `<p>Carrinho (${qtd})</p>`; //O código JS fica dentro do ${}
console.log($carrinho);

$root.insertAdjacentHTML('beforeend', $carrinho);
import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';

const categoria = new Categoria(1,'Calçados Infantis');
const produto = new Produto(1, 'Tênis Infantil AllStar', 55.36, 159.99, 'indeterminado', 10, categoria);

console.log(produto.toJSON());
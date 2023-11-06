export default class Produto {
    #codigo;
    #descricao;
    #precoCusto;
    #precoVenda;
    #dataValidade;
    #estoque;
    #categoria;

    constructor(codigo = 0, descricao = '', precoCusto = 0, precoVenda = 0, dataValidade = '', estoque = 0, categoria={}) {
        this.#codigo = codigo;
        this.#descricao = descricao;
        this.#precoCusto = precoCusto;
        this.#precoVenda = precoVenda;
        this.#dataValidade = dataValidade;
        this.#estoque = estoque;
        this.#categoria = categoria;
    }

    get codigo() {
        return this.#codigo;
    }
    set codigo(codigo) {
        this.#codigo = codigo;
    }

    get descricao() {
        return this.#descricao;
    }
    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get precoCusto() {
        return this.#precoCusto;
    }
    set precoCusto(precoCusto) {
        this.#precoCusto = precoCusto;
    }

    get precoVenda() {
        return this.#precoVenda;
    }
    set precoVenda(precoVenda) {
        this.#precoVenda = precoVenda;
    }

    get dataValidade() {
        return this.#dataValidade;
    }
    set dataValidade(dataValidade) {
        this.#dataValidade = dataValidade;
    }

    get estoque() {
        return this.#estoque;
    }
    set estoque(estoque) {
        this.#estoque = estoque;
    }

    get categoria() {
        return this.#categoria;
    }
    set categoria(categoria) {
        this.#categoria = categoria;
    }

    

    toJSON() {
        return {
            codigo: this.#codigo,
            descricao: this.#descricao,
            precoCusto: this.#precoCusto,
            precoVenda: this.#precoVenda,
            dataValidade: this.#dataValidade,
            estoque: this.#estoque,
            categoria: this.#categoria.toJSON()
        }
    }

    async gravar() {}

    async excluir() {}

    async alterar() {}
}
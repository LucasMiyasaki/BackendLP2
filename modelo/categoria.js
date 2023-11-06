export default class Categoria {
    #codigo
    #descricao

    constructor(codigo = 0, descricao = '') {
        this.#codigo = codigo;
        this.#descricao = descricao;
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

    toJSON() {
        return {
            codigo: this.#codigo,
            descricao: this.#descricao
        }
    }

    async gravar() {}

    async excluir() {}

    async alterar() {}
}
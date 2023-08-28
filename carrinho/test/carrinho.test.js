import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe('Carrinhos', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.subtotal).toBeNull();
    });

    it('Deve ter itens', () => {
        const item = new Item('banana', 5, 5)
        const item2 = new Item('uva', 5, 5)
        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);
    })

    it('Deve dar erro ao finalizar compra com carrinho vazio', () => {
        function trataErro() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }
        expect(trataErro).toThrowError('Carrinho de compras vazio')
    })

    it('Deve adicionar o frete', () => {
        const item = new Item('banana', 5, 5)
        const item2 = new Item('uva', 5, 5)
        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(50)

        const final = carrinho.calculaTotal();

        expect(final).toBe(100)
    });

    it('Deve finalizar compra', () => {
        const item = new Item('banana', 5, 5)
        const item2 = new Item('uva', 5, 5)
        const carrinho = new Carrinho();

        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(50)

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 50,
            frete: 50,
            total:100
        })
    })
})
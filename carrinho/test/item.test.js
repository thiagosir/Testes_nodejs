import Item from "../item.js";

describe('Teste dos itens', () => {

    it('Deve ter 3 campos: nome, valor e quantidade', () => {

        const item = new Item('Beterraba', 2.5, 5);
        
        expect(item.nome).toBe('Beterraba')
        expect(item.valor).toBe(2.5)
        expect(item.quantidade).toBe(5)
        expect(item).not.toBeNull();
    })
    it('Deve retornar o valor correto de acordo com a quantidade de itens', () => {
        const item = new Item('Beterraba', 2.5, 5);

        expect(item.pegaValorTotalItem()).toBe(12.5)
    })
})

import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'


describe('Matemagica div', () => {
    test('Deve retornar o valor correto da divisao', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(140)
        matemagica.setValor2(5)
        
        expect(matemagica.getDiv()).toBe(28)
    })

    test('Deve retornar um erro ao tentar realizar uma divisao passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(8)
        // @ts-ignore
        matemagica.setValor2('oi')
        expect(matemagica.getDiv()).toBe(ErrorMessages.NOT_NUMBER)
    })

    test('Deve retornar um erro ao tentar realizar a divisao com o divisor igual a 0', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(50)
        matemagica.setValor2(0)
        expect(matemagica.getDiv()).toBe(ErrorMessages.DIVISOR_ZERO)
    })

    test('Deve realizar a divisao com o dividendo igual a 0', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(0)
        matemagica.setValor2(50)
        expect(matemagica.getDiv()).toBe(0)
    })
})
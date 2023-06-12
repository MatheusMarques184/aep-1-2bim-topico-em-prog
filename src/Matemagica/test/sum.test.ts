import {describe, expect, test} from '@jest/globals'
import { Matemagica } from '../Matemagica'
import { ErrorMessages } from '../errors/errorMessages.enum'

describe('Matemagica sum', () => {
    test('Deve retornar o valor correto da soma', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(1)
        matemagica.setValor2(2)
        
        expect(matemagica.getSum()).toBe(3)
    })

    test('Deve retornar um erro ao tentar realizar uma soma passando uma string', () => {
        const matemagica = new Matemagica()
        matemagica.setValor1(1)
        // @ts-ignore
        matemagica.setValor2('oi')
        expect(matemagica.getSum()).toBe(ErrorMessages.NOT_NUMBER)
    })
})

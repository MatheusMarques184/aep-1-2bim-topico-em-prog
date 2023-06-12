import { describe, test, expect } from "@jest/globals"
import { randomArrayValue } from "../randomArrayValue"
import { ErrorMessages } from "../errors/errorMessages.enum"


describe("class randomValue", () => {
    test("Deve retornar erro ao tentar inserir um produto incorreto", () => {
        const randomObject = new randomArrayValue()
        //@ts-ignore
        expect(randomObject.setProduct({name: 'Caneta', quantity: "10", price: 7.99 })).toBe(ErrorMessages.INVALID_PRODUCT)
    })
    test("Deve retornar erro ao tentar definir uma valor não numerico como tamanho", () => {
        const randomObject = new randomArrayValue()
        //@ts-ignore
        randomObject.setNumberOfRandomObjects("tt")
        expect(randomObject.getRandomize()).toBe(ErrorMessages.NOT_NUMBER)
    })
    test("Deve retornar erro ao tentar definir um valor numero maior que o tamanho do array", () => {
        const randomObject = new randomArrayValue()
        randomObject.setNumberOfRandomObjects(100)
        expect(randomObject.getRandomize()).toBe(ErrorMessages.OVER_LIMIT)
    })
    test("Deve retornar erro ao tentar definir um valor numerico igual ou menor que 0 como tamanho de array", () => {
        const randomObject = new randomArrayValue()
        randomObject.setNumberOfRandomObjects(0)
        expect(randomObject.getRandomize()).toBe(ErrorMessages.UNDER_MIN)
    })
})
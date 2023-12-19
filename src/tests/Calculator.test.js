
import userEvent from '@testing-library/user-event'
import Calculator from '../components/Calculator'
import { render, screen } from '@testing-library/react'

describe("Calculator", () => {
    test("deve renderizar corretamente com os dígitos de operações +, -, *, e /", () => {
        render(<Calculator />)

        const operadorSoma = screen.getByText("+")
        const operadorSubtracao = screen.getByText("-")
        const operadorMultiplicacao = screen.getByText("*")
        const operadorDivisao = screen.getByText("/")

        expect(operadorSoma).toBeInTheDocument()
        expect(operadorSubtracao).toBeInTheDocument()
        expect(operadorMultiplicacao).toBeInTheDocument()
        expect(operadorDivisao).toBeInTheDocument()

    })

    test("deve ter multiplicação funcionando corretamente ao fazer a operaçao", async () => {
        render(<Calculator />)

        const user = userEvent.setup()

        const num1 = screen.getByText("5")
        await user.click(num1)

        const operadorMultiplicacao = screen.getByText("*")
        await user.click(operadorMultiplicacao)

        const num2 = screen.getByText("2")
        await user.click(num2)

        const operadorIgual = screen.getByText("=")
        await user.click(operadorIgual)

        const resultado = screen.queryByText("10")
        
        expect(resultado).toBeInTheDocument()
        expect(resultado).toHaveTextContent("10")
        screen.debug(resultado)

    })

    test("concatenar operações está funcionando corretamente", async () => {
        render(<Calculator />)

        const user = userEvent.setup()

        const num1 = screen.getByText("5")
        await user.click(num1)

        const operadorMultiplicacao = screen.getByText("*")
        await user.click(operadorMultiplicacao)

        const num2 = screen.getByText("2")
        await user.click(num2)

        const operadorSoma = screen.getByText("+")
        await user.click(operadorSoma)

        const num3 = screen.getByText("1")
        await user.click(num3)
        const num4 = screen.getByText("0")
        await user.click(num4)

        const operadorIgual = screen.getByText("=")
        await user.click(operadorIgual)

        const resultado = screen.queryByText("20")
        
        expect(resultado).toBeInTheDocument()
        expect(resultado).toHaveTextContent("20")
    
    })
})
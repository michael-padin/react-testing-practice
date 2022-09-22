import{screen, render, getByRole} from "@testing-library/react"
import Counter from './Counter'

describe("Counter", () => {
    it('should render', () => {
        render(<Counter/>)

        const counterElement = screen.getByRole("heading")
        expect(counterElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button', {
            name: 'Increment',
        })
        expect(incrementButton).toBeInTheDocument()
    })

    it('renders a count of 0', () => {
        render(<Counter/>)

        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    })
})
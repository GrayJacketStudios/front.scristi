import Navbar from './index'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


describe("testing test", () => {
    it("says the name of the site on the component", () => {
        render(<Navbar />)
        expect(screen.getByText(/scristi/i)).toBeInTheDocument();
    })
})
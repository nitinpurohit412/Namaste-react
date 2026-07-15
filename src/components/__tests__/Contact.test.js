import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


//! For grouping test Cases--
describe("Contact Us page Test cases", ()=>{
test("Should load contact us component", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
});


test("Should load button in contact component", ()=>{
    render(<Contact/>)

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
});


test("Should load input in contact component", ()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("Name")

    expect(inputName).toBeInTheDocument()
});


test("Should load 2 input boxes in contact component", ()=>{
    render(<Contact/>)

    //* Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //* Assertion
    expect(inputBoxes.length).toBe(2)

});
})


import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("Should  load Header Component with a login button", ()=>{
    render(<BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);

    const loginButton = screen.getByRole('button')
 
    expect(loginButton).toBeInTheDocument()
});

it("Should  load Header Component with a Cart items button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);

    const cartItems = screen.getByText('Cart :(0 items)')
 
    expect(cartItems).toBeInTheDocument()
});


it("Should  load Header Component with a Cart  button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);

    const cart = screen.getByText(/Cart/)
 
    expect(cart).toBeInTheDocument()
});


it("Should  change login button into logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name: 'Login'})
    fireEvent.click(loginButton)
 
    const logoutButton = screen.getByRole("button", {name: 'Logout'})
    expect(logoutButton).toBeInTheDocument()
});
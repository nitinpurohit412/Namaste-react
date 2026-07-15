// import { fireEvent, render, screen } from "@testing-library/react"
// import { act } from "react"
// import RestaurantMenu from "../RestaurantMenu"
// import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
// import { Provider } from "react-redux"
// import appStore from "../../utils/appStore"
// import "@testing-library/jest-dom"
// import Header from "../Header"

// global.fetch = jest.fn(()=>
// Promise.resolve({
//     json : ()=> Promise.resolve(MOCK_DATA_NAME)
// })
// )


// it("Should load Restaurant Menu Component", async()=>{
//     await act(async => render(
//     <Provider store={appStore}>
//         <Header/>
//     <RestaurantMenu/>
//     </Provider>
// ))

// const addbtns = screen.getAllByRole("button", {name : "Add "})
// fireEvent.click(addbtns[0]);

// expect(screen.getByText("Cart :(1 items)")).toBeInTheDocument()
// })
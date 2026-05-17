// IF nested HTML
import React from "react"
import ReactDOM from "react-dom/client"

//* React element


//* JSX - HTML like syntex or XML Like
//* JSX - Transpiled(convert) before it reaches the js engine- PARCEL - Babel
//* JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)



//! React Element
const heading = <p className="heading">Namaste React in JSX 🚀</p>
console.log(heading)


//! React Functional Component
const Title = () => (
    <h1 className="head">
        {heading}
        Namsate React Using JSX 🚀
    </h1>
)
 
let number = 10000

const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title/>
        <h1 className="heading">Namaste React Functional Component 🚀</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);


root.render(<HeadingComponent />)

 
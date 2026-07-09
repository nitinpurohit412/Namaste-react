import User from "./user";
import UserClass from "./UserClass";
import React from "react";

const About = ()=>{
    return (
        <div>
            About
            <p>
                This is Namaste React
            </p>
            {/* <User name={"Nitin Purohit"} /> */}

            <UserClass name={"Harshit"} location={"Champak Chacha ke ghar k pass"}/>
        </div>

    )
}
export default About;




// class About extends React.Component {
//   constructor(props) {
//     super(props);

//     // console.log("Parent Constructor");
//   }

// componentDidMount(){
// // console.log("Parent component did mount")
// }

//   render() {
//     // console.log("Parent Render");

//     return (
//       <div>
//         About
//         <p>This is Namaste React</p>
//         <UserClass  name={"First"}  location={"Rajasthan"}/>
//       </div>
//     );
//   }
// }
// This is a class based component. And this is not uesd now.
// We dont used to have hooks in react. so we can create useState without hooks in classcomponent with the help of the ---> "(this.state)"
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

      this.state = {
        userInfo: {
            name: "Dummy",
            location: "Dummy locaton"
        }
      }          // This is how we use multiple useState variable in class component.

    //   console.log(this.props.name + "Child Contructor...")
    }

    async componentDidMount(){            //! ComponentDidMount is used to make API call.....
        // console.log(this.props.name + "Child Component did mount")

        //*API call
        const data = await fetch("https://api.github.com/users/nitinpurohit412");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })


        console.log(json)
    }


        render(){
            // console.log(this.props.name + "Child Render...")

            const {name, public_repos, avatar_url} = this.state.userInfo;
            return(
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Repos: {public_repos}</h3>
                <h4>Contact: nitinpurohit412@gmail.com</h4>
        </div>
    )
        }
}

export default UserClass;
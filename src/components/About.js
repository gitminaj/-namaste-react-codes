import React from "react";
import UserContext from "../utils/UserContext"


class About extends React.Component{
    constructor(){
        super()

        this.state = {
            userData : {
                name: "...",
                location: "---"
            }
        }
        console.log("constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/gitminaj");

        const json = await data.json();

        this.setState({userData : json})

    }

    
    render(){
        const {name,location} = this.state.userData;
        return(
            <div className="about-container">
                <div className="about">
                    <h1>Name: {name}</h1>
                    <h1>location: {location}</h1>
                    <h1>designation: CEO<span><sub className="small-font">future</sub></span></h1>
                    <h1>More about us</h1>
                    <p>we are serving people form last one decade, not just delivering food but also the love, care and happiness.</p>
                    <p>And we will continue doing so, lets give us a try and then make a decision.</p>
                </div>
            </div>
        )
    }

}


// const About = () =>{
//     return(
//     <div className="about-container">

//     </div>
//     )
// }


export default About;
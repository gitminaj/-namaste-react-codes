import React from "react";


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
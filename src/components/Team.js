import React from "react";

class Team extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            count:0,
        }

    }
    render(){
        const {name,designation} = this.props;
        const {count} = this.state;
        return(
            <div>
                <h2>count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: count+1
                    })
                }}> Increase</button>
                <h2>Name: {name}</h2>
                <h2>designation: {designation}</h2>
            </div>
        )
    }

}

export default Team;

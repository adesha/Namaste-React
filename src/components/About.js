// const About=()=>{
//     return(
//         <div>
//             <h1>About us</h1>
//             <h3>Hello</h3>
//         </div>
//     )
// }

// export default About

import React from "react"
import { json } from "react-router-dom"

class About extends React.Component{

    constructor(props){
        super(props)

        console.log(props)

        this.state={
            // count:0,
            // count2:2
            userInfo:{
                name:'John',
                location:'USA'
            }
        }
    }

    async componentDidMount(){
        //api call
        const data = await fetch('https://api.github.com/users/adesha')
        
        const json =await data.json()
        console.log(json)

        this.setState({
            userInfo:json
        })
    }
    
    // to use we have to use this keyword e.g this.props.name, this.state.count
    render(){

        const {name,location}=this.state.userInfo;
        return(
            <div>
                <h1>About us</h1>
                <h3>Hello</h3>
                {/* <h3>Count - {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count Increase</button> */}
                <h1>Name: {this.state.userInfo.name}</h1>
                <h1>Location: {location}</h1>
            </div>
        )
    }
}

export default About
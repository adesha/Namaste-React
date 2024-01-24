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

class About extends React.Component{

    constructor(props){
        super(props)

        console.log(props)

        this.state={
            count:0,
            count2:2
        }
    }
    // to use we have to use this keyword e.g this.props.name, this.state.count
    render(){
        return(
            <div>
                <h1>About us</h1>
                <h3>Hello</h3>
                <h3>Count - {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count Increase</button>
            </div>
        )
    }
}

export default About
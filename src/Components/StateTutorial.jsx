
import { Component } from "react"

const name = "Name";
const age = "36"
class StateTutorial extends Component{

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         timeValue : new Date().getTime()
    //     }
    // }

    state = {
        timeValue : new Date().getTime(),
        text : 'Hello World'
    };

    handleChangeText = ()=> {
        this.setState(
            {
                text: "Senthilkumar MCA"
            }
        )
    }

    handleToggleText = ()=> {

    }

    render(){
        return(
            <div>
                <h2>State Tutorials {name}{age}</h2>
                <h4>Current Time Value is {this.state.timeValue}</h4>
                <p>the text value is {this.state.text}</p>
                <button onClick={this.handleChangeText}>ChangeText</button>
                <button onClick={this.handleToggleText}>ToggleText</button>
            </div>
        )
    }
};

export default StateTutorial;
import '../styles/Reward.css';
import React, {Component} from 'react';




class ProgressBarExample extends Component{
    constructor(props){
        super(props)

        this.state = {
            percentage: 50
        }
    }
    render(){
        return(
            <div>
                <ProgressBar percentage={this.state.percentage} />
            </div>

        )
    }
}
const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

export default ProgressBarExample;
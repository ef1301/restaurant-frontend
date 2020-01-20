import '../styles/Reward.css';
import React, {Component} from 'react';




class ProgressBarExample extends Component{
    constructor(props){
        super(props)

        this.state = {
            percantage: 85
        }
    }
    render(){
        return(
            <div>
                <ProgressBar percantage={this.state.percantage} />
            </div>

        )
    }
}
const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
            <Filler percantage={props.percantage} />
        </div>
    )
}

const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percantage}%` }} />
}

export default ProgressBarExample;
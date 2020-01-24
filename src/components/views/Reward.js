import '../styles/Reward.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class ProgressBarExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            percentage: this.props.reward
        }
    }

    componentDidMount() {

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

function mapState(state){
    return {
	reward: state.reward
    }
}

export default connect(mapState, null)(ProgressBarExample);

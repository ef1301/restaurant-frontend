import '../styles/Reward.css';
import React, {Component} from 'react';
import { fetchPointsThunk } from '../../thunks';
import { connect } from 'react-redux';

class ProgressBarExample extends Component{
    constructor(props){
        super(props);
        this.state = {
            percentage: this.props.reward
        }
    }

    componentDidMount() {
	//this.props.fetchPoints();
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

function mapState(state) {
    return {
	reward: state.reward
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
	fetchPoints: () => dispatch(fetchPointsThunk())
    }
}

export default connect(mapState, null)(ProgressBarExample);

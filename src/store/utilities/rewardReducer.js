import axios from 'axios';

const FETCH_POINTS = 'FETCH_POINTS';
const APPLY_REWARD = 'APPLY_REWARD';
const APPLY_POINTS = 'APPLY_POINTS';

export const fetchPointsThunk = (fetchedEmail) => (dispatch) => {
    axios.get("https://bytemee.herokuapp.com/api/users")
	.then(response => response.data)
	.then(users => users.map( (user) => {
	    if(user.email === fetchedEmail) {
		return dispatch(fetchPoints(user));
	    }
	})
	)
	.catch(err => console.log(err))
}

export const applyRewardThunk = (reward) => (dispatch) => {
    let resolvedActionObject = applyReward(reward);
    dispatch(resolvedActionObject);
}

export const applyPointsThunk = (points) => (dispatch) => {
    let resolvedActionObject = applyPoints(points);
    dispatch(resolvedActionObject);
}

function fetchPoints(user) {
    return {
	type: FETCH_POINTS,
	user
    }
}

function applyReward(reward) {
    return {
	type: APPLY_REWARD,
	reward
    }
}

function applyPoints(points) {
    return {
	type: APPLY_POINTS,
	points
    }
}

const rewardReducer = (state = 0, action) => {
    switch(action.type) {
    case FETCH_POINTS:
	console.log('POINTS: ', action.user.points);
	return Number(action.user.points);
    case APPLY_REWARD:
	return state - action.reward;
    case APPLY_POINTS:
	return state + action.points;
    default:
	return state;
    }
}

export default rewardReducer;

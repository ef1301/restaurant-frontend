/*
fetching/updating the account info, fetching and updating the payment_info(locally as a state) [the address, card #, cellphone #], fetching the points and updating points -> user reducer
*/

const FETCH_USER = 'FETCH_USER';
const UPDATE_USER = 'UPDATE_USER';


export const fetchUserThunk = () => (dispatch) => {

}

export const updateUserThunk = (user) => (dispatch) => {
    let resolvedActionObject = updateUser(user);
    dispatch(resolvedActionObject);
}

function fetchUser(user) {
    return {

    }
}

import * as actionTypes from './actionTypes';
import axios from '../../axiosApi';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        auth_token:token
    };
};


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };

};




export const auth = (loginData)=>{
	return dispatch =>{
		dispatch(authStart());
		 axios.post('/api/user/login', loginData)
			.then((res) =>{
				
				if(res.data.data.status === 'success'){
					dispatch(authSuccess(res.data.data.auth_token, res.data.data.id));
					localStorage.setItem('token', res.data.data.auth_token);
                	localStorage.setItem('userId', res.data.data.id);
                	localStorage.setItem('isAuth', true);


				}else{

					dispatch(authFail(res.data.data.message));
				}
				
			}).catch((error)=>{
				dispatch(authFail('Internal server error'));
			})
	}
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));              
        }
    };
};


export const errorSuccessSetNull = () => {
    return {
        type: actionTypes.ERROR_SUCCESS_SET_NULL
    };
};


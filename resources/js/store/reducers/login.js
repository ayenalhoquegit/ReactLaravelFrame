import * as  actionTypes from '../actions/actionTypes';

const initialState = {
	userId 	 : null,
	token 	 : null,
	error    : null,
	loading  : false,
	isAuth	 : false
}


const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.AUTH_START:
		return{
			...state,
			loading:true,
			error:null,
			userId:null,
			token:null,
			isAuth:false
		}

		case actionTypes.AUTH_SUCCESS:
		return{
			...state,
			userId:action.userId,
			token:action.auth_token,
			loading:false,
			error:null,
			isAuth:true
		}

		case actionTypes.AUTH_FAIL:
		return{
			...state,
			error:action.error,
			userId:null,
			token:null,
			loading:false,
			isAuth:false
		}

		case actionTypes.AUTH_LOGOUT:
		return{
			...state,
			userId:null,
			token:null,
			error:null,
			loading:false,
			isAuth:false
		}

		case actionTypes.ERROR_SUCCESS_SET_NULL:
		return{
			...state,
			error:null,
			success:false
		
		}




		
	}

	return state
}

export default reducer

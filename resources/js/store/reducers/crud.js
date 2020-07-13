import * as  actionTypes from '../actions/actionTypes';

const initialState = {
	dataList 	: null,
	success  	: null,
	error    	: null,
	loading    	: false,
	pageCount 	: 1,
	currentPage	:1
}


const reducer = (state = initialState, action) => {

	switch(action.type){
		case actionTypes.FETCH_SUCCESS:
		return{
			...state,
			dataList:action.dataList,
			loading:false,
			error:null
			
		}

		/*return{
			...state,
			dataList:{
					...state.dataList,
					[action.dataList.storeTitle] : action.dataList
			},
			loading:false,
			error:null
			
		}
*/

		case actionTypes.FETCH_PAGI_SUCCESS:
		return{
			...state,
			dataList:action.dataList,
			pageCount:action.dataList[action.dataList.storeTitle].last_page,
			currentPage:action.dataList[action.dataList.storeTitle].current_page,
			loading:false,
			error:null
			
		}

		case actionTypes.SET_CURRENT_PAGE:
		return{
			...state,
			currentPage:action.pageNo
			
		}


		case actionTypes.FETCH_FAIL:
		return{
			...state,
			error:action.error,
			loading:false
			
		}

		case actionTypes.START:
		return{
			...state,
			success:null,
			error:null,
			loading:true
			
		}

		case actionTypes.SUCCESS:
		return{
			...state,
			success:action.success,
			error:null,
			loading:false
			
		}

		case actionTypes.FAIL:
		return{
			...state,
			success:null,
			error:action.error,
			loading:false
			
		}

		case actionTypes.SUCCESS_ERROR_SET_NULL:
		return{
			...state,
			error:null,
			success:null
		
		}




		

		
	}

	return state
}

export default reducer



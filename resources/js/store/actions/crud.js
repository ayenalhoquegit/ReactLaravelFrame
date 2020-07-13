import * as actionTypes from './actionTypes';
import axios from '../../axiosApi';


export const fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SUCCESS,
        dataList: data
    };
};


export const fetchPagiSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PAGI_SUCCESS,
        dataList: data
    };
};

export const setPagiCurrentPage = (pageNo) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        pageNo : pageNo
    };
};



export const fetchFail = (error) => {
    return {
        type: actionTypes.FETCH_FAIL,
        error: error
    };
};

export const getData = (url, params = {}, pagination = 'no')=>{
	return dispatch =>{
		dispatch(start());
		 axios.get(url, params)
			.then((res) =>{
				if(pagination ==='no')
					dispatch(fetchSuccess(res.data.data));
				else
					dispatch(fetchPagiSuccess(res.data.data));
			}).catch((error)=>{

				dispatch(fetchFail('Internal server error'));
			})
	}
}

export const success = (success) => {
    return {
        type: actionTypes.SUCCESS,
        success: success
    };
};


export const fail = (error) => {
    return {
        type: actionTypes.FAIL,
        error: error
    };
};

export const start = () => {
    return {
        type: actionTypes.START
    };
};



export const save = (url, formData)=>{
	return dispatch =>{
		dispatch(start());
		 axios.post(url, formData)
			.then((res) =>{
				console.log('res :', res.data)
				dispatch(success(res.data.success));
			}).catch((error)=>{
				dispatch(fail('Internal server error'));
			})
	}
}

export const deleteData = (url, params)=>{
	return dispatch =>{
		dispatch(start());
		 axios.delete(url, params)
			.then((res) =>{
				dispatch(success(res.data.success));
			}).catch((error)=>{
				dispatch(fail('Internal server error'));
			})
	}
}



export const successErrorSetNull = () => {
    return {
        type: actionTypes.SUCCESS_ERROR_SET_NULL
    };
};



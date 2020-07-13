export const paramsExtract = (location)=>{

	let querystring = location.substring(location.indexOf('?')+1).split('&');
  	let params = {}, pair, d = decodeURIComponent;
  	for (let i = querystring.length - 1; i >= 0; i--) {
    	pair = querystring[i].split('=');
    	params[d(pair[0])] = d(pair[1] || '');
  	}
  	return params;

}

export const checkValidity = (value, rules) => {

	let isValid = true;
    if (!rules) {
        return true;
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;

}


export const inputChangeConfig = (state, event, inputIdentifier) => {
	const updatedForm = {
            ...state
        };
        const updatedFormElement = { 
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdn in updatedForm) {
            formIsValid = updatedForm[inputIdn].valid && formIsValid;
        }
    return {updatedForm, formIsValid};
}
    
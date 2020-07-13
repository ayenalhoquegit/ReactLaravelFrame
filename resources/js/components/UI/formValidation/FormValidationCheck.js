import React from 'react';
 
 const formValidationCheck = (props)=>{
 	console.log('props : ', props)
	let isValid = true;
    if (!props.rules) {
        return true;
    }
    if (props.rules.required) {
        isValid = props.value.trim() !== '' && isValid;
    }

    if (props.rules.minLength) {
        isValid = props.value.length >= props.rules.minLength && isValid
    }

    if (props.rules.maxLength) {
        isValid = props.value.length <= props.rules.maxLength && isValid
    }

    if (props.rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(props.value) && isValid
    }

    if (props.rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(props.value) && isValid
    }

    return isValid;
 }

 export default formValidationCheck;
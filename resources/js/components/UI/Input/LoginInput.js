import React from 'react';
import Aux from '../../../hoc/Auxs';

import   './Input.css';

const loginInput = ( props ) => {
    let inputElement = null;
    const inputClasses = ['form-control'];
    let validationError = ""
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid");
        validationError = <span className="validationErrorSyle">{props.validationMsg}</span>
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement =(<Aux> <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
                {validationError}
              </Aux>                
            );
            break;
        case ( 'textarea' ):
            inputElement = (<Aux> <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
                {validationError}
                </Aux>
                
            );
            break;
        case ( 'select' ):
            inputElement = (
                <Aux>
                    <select
                        className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                    {validationError}
                </Aux>
            );
            break;
        default:
            inputElement = (<Aux> <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
                {validationError}
              </Aux>                
            );
    }

    return (
        <div>
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );

};

export default loginInput;
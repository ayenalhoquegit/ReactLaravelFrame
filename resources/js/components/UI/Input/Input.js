import React from 'react';
import Aux from '../../../hoc/Auxs';

import   './Input.css';

const input = ( props ) => {
    let inputElement    = null;
    let imagePreview    = null;
    const inputClasses  = ['form-control col-md-7 col-sm-7 col-xs-12'];
    let validationError = "";
    let requiredStyle   = "";
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid");
        validationError = <span className="badge  alert-danger" >{props.validationMsg}</span>
    }
    if(Object.keys(props.shouldValidate).length>0){
      requiredStyle = <span className="required red ">*</span>;  
    
    }

    let imagePreviewUrl = null, removeImage = null; 
    if(props.imagePreviewUrl){
         imagePreviewUrl = <img  className="uploadImg" src={props.imagePreviewUrl} />  
         removeImage     = <span className="badge" onClick={props.imageRemove}><i className="glyphicon glyphicon-remove"></i></span>;
    }else{
         imagePreviewUrl = (<p><b>Select an Image for Preview</b></p>);
    }

    
    

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement =( <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            );
            break;
        case ( 'textarea' ):
            inputElement = (<textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            );
            break;
        case ( 'select' ):
            inputElement = (
                
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
                   
            );
            break;

             case ( 'file' ):
                inputElement =(<input
                    accept=".jpg, .png, .gif"
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    onChange={props.changed}  />
                );

                imagePreview = (
                        <div className="form-group ">
                        <label className="control-label col-md-3 col-sm-3 col-xs-12 ">Image Preview</label>
                        <div className="col-md-7 col-sm-7 col-xs-12 form-validation">
                            <div className="parentUploadImg img-thumbnail"> 
                                 {imagePreviewUrl}
                                <div className="removeImage">{removeImage}</div>
                            </div>
                        </div>
                    </div>
                    );
            break;


        default:
            inputElement = ( <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
                             
            );
    }

    return (
        <Aux>
            <div className="form-group ">
                <label className="control-label col-md-3 col-sm-3 col-xs-12 " htmlFor="">{props.label}{requiredStyle}</label>
                <div className="col-md-7 col-sm-7 col-xs-12 form-validation">
                    {inputElement}
                    {validationError}
                </div>
            </div>
            {imagePreview}
        </Aux>
    );

};

export default input;
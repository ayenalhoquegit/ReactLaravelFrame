import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import Loader from '../components/Loaders/Loader';
import * as actionTypes from '../store/actions/index';
import MessageHandler from '../components/UI/Toaster/MessageHandler';
import axios from '../axiosApi';
import Input from '../components/UI/Input/loginInput';
//import FormValidationCheck from '../components/UI/formValidation/FormValidationCheck';

 class Login extends Component{

  constructor(props){
     super(props)
     this.state = {
        loginForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter email'
                },
                value: '',
                validation: {
                    required: true
                },
                validationMsg : 'Please enter a valid email',
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter password'
                },
                value: '',
                validation: {
                    required: true
                },
                validationMsg : 'Password field is Required',
                valid: false,
                touched: false
            }
          },

          formIsValid: false


       
     };

     

  }


  checkValidity(value, rules){
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


  inputChangedHandler = (event, inputIdentifier) => {
      
        this.props.onErrorSuccessSet();   // set errror and success status set null to hide toaster
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedLoginForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedLoginForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedLoginForm) {
            formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({loginForm: updatedLoginForm, formIsValid: formIsValid});
    }
  

  formHandler = (event)=>{
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in this.state.loginForm) {
        formData[formElementIdentifier] = this.state.loginForm[formElementIdentifier].value;
    }
    
    this.props.onAuth(formData);
    
  }
	render(){

    let authRedirect = null;
    if(this.props.isAuth){
        authRedirect = <Redirect to="/dashboard" />
    }

     // form data refactor 
     const formElementsArray = [];
      for (let key in this.state.loginForm) {
          formElementsArray.push({
              id: key,
              config: this.state.loginForm[key]
          });
      }

   
    
      let loadingElement = (
             <div>          
              <h1>Login Form</h1>

                {formElementsArray.map(formElement => (
                    
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        validationMsg={formElement.config.validationMsg}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                        
                   ))}

                    <div className="clearfix"></div>
              
                  <div>
                    <button disabled={!this.state.formIsValid} className="btn btn-default"  type="submit"> Log in</button>
                    <a className="reset_pass" href="#">Lost your password?</a>   
                  </div>
                  <div className="clearfix"></div>
                  <div className="separator">
                    <div className="clearfix"></div>
                    <br />
                    <div>
                      <h1><i className="fa fa-paw"></i> GENTELELA</h1>
                      <p>© 2019 All Rights Reserved. Privacy and Terms</p>
                    </div>
                  </div>

            </div>
      );
    if(this.props.loading){
        loadingElement = <Loader/>
    }
       
		return (
			
			<div className="login">
            <a className="hiddenanchor" id="signup"></a>
            <a className="hiddenanchor" id="signin"></a>
            <div className="login_wrapper">

              <div className="animate form login_form">
                <section className="login_content">
                <form className="form-horizontal" method = "post" onSubmit={this.formHandler}>  
                  {loadingElement}
                 {authRedirect}
                 <MessageHandler error = {this.props.error} />
                </form>
                </section>
              </div>

            </div>
      </div>
		);
	}
}

const mapStateToProps = state => {
    return {
        userId: state.log.userId,
        error : state.log.error,
        loading:state.log.loading,
        isAuth:state.log.isAuth
       
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (formData) => dispatch(actionTypes.auth(formData)),
        onErrorSuccessSet: () => dispatch(actionTypes.errorSuccessSetNull())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);









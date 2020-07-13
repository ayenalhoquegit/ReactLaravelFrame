import React, {Component} from 'react'; 
import Aux from '../../hoc/Auxs';
import { connect } from 'react-redux';
import Input from '../UI/Input/Input';
import Loader from '../Loaders/Loader';
import MessageHandler from '../UI/Toaster/MessageHandler';
import * as actionTypes from '../../store/actions/index';
import * as  helperFun from '../Helper/Helper';
import axios from '../../axiosApi';


class  CrudAddForm extends Component{

	constructor(props){
     super(props)
     this.state = {
       	crudForm: {
            name: {
            	label : 'Name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter name'
                },
                value: '',
                validation: {
                    required: true
                },
                validationMsg : 'Please enter name',
                valid: false,
                touched: false
            },
            email: {
            	label : 'Email',
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail : true
                },
                validationMsg : 'Please enter a valid email',
                valid: false,
                touched: false
            },
            address: {
            	label : 'Address',
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter address'
                },
                value: '',
                validation: {},
                validationMsg : 'Please enter address',
                valid: true,
                touched: false
            },
            status: {
            	label : 'Status',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 1, displayValue: 'Active'},
                        {value: 0, displayValue: 'Inactive'}
                    ]
                },
                value: 1,
                validation: {},
                valid: true
            },
            image: {
            	label : 'Image',
                elementType: 'file',
                elementConfig: {
                    type: 'file'
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            }


          },

          formIsValid: false,
          file: '',
          imagePreviewUrl: '',
          editId : '',
          buttonText : 'Save'


       
     };

     

  }

 
  componentWillMount(){
 	
  	 this.props.onSuccessErrorSetNull();   // set errror and success status set null to hide toaster

	  let params = helperFun.paramsExtract(this.props.location.search);

	   axios.get('/api/crud/'+params.id+'/edit?token='+this.props.token)
			.then((res) =>{
				this.setEditData(res.data.programmer);
			}).catch((error)=>{
				this.props.onfetchFail('Internal  server error')
			})
  }

 
  	setEditData(editData){
	  	if(editData){
		 const updatedForm = {
	            ...this.state.crudForm
	        };
	        updatedForm['name'].value 		= editData.name;
	        updatedForm['email'].value 		= editData.email;
	        updatedForm['address'].value 	= editData.address;
	        updatedForm['status'].value 	= editData.status;
	        for (let formElementIdentifier in updatedForm) {
	        	updatedForm[formElementIdentifier].valid = true;
	    	}

	        this.setState({crudForm: updatedForm, editId : editData.id, formIsValid : true, buttonText: 'Update'});
	  	}
  	}

  

	formHandler = (event)=>{
	    event.preventDefault();
      const formData = new FormData();
      for (let formElementIdentifier in this.state.crudForm) {
        if(formElementIdentifier !=='image')
          formData.append(formElementIdentifier, this.state.crudForm[formElementIdentifier].value);
      }
      formData.append('token', this.props.token);
      formData.append('image', this.state.file);
      if(this.state.editId)  formData.append('id', this.state.editId); 
	   
      this.props.onCrudFormAction('/api/crud',formData);
      this.setState({imagePreviewUrl:'', file :''})

	    if(!this.state.editId && !this.props.crudError) this.formReset();	
	}


    crudListViewHandler = () => {
        this.props.history.replace( '/crud' );
    }

    formReset(){

    	const updatedForm = {
            ...this.state.crudForm
        };

        for (let formElementIdentifier in updatedForm) {
        	if(formElementIdentifier ==='status') updatedForm[formElementIdentifier].value = 1;
	        else updatedForm[formElementIdentifier].value = '';
	    }
        this.setState({crudForm: updatedForm});

    }


    inputChangedHandler = (event, inputIdentifier) => {
    	if(inputIdentifier ==='image'){
    		console.log('image :', event)
    		this.imageChangeHandler(event);
    	}else{
    		const config = helperFun.inputChangeConfig(this.state.crudForm, event, inputIdentifier);
	        this.props.onSuccessErrorSetNull();   // set errror and success status set null to hide toaster
	        this.setState({crudForm: config['updatedForm'], formIsValid: config['formIsValid']});
       	
    	}

      	
    }

    imageChangeHandler = (e)=>{

    	let reader 	= new FileReader();
	    let file 	= e.target.files[0];

	    console.log('fileData :', file)

	    reader.onloadend = () => {
	    	
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    }

	    reader.readAsDataURL(file)

    	
    }

    imageRemove = (e)=>{
    	this.setState({
    		imagePreviewUrl:''
    	});
    	
    }
  


	render(){

		// form data refactor 
     	const formElementsArray = [];
      	for (let key in this.state.crudForm) {
          formElementsArray.push({
              id: key,
              config: this.state.crudForm[key]
          });
      	}

      	let form = (
      		<form  className="form-horizontal form-label-left" onSubmit={this.formHandler} encType="multipart/form-data">
      		   {formElementsArray.map(formElement => (
                    
                <Input 
                    key={formElement.id}
                    label={formElement.config.label}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    validationMsg={formElement.config.validationMsg}
                    touched={formElement.config.touched}
                    imagePreviewUrl={this.state.imagePreviewUrl}
                    imageRemove = {(e) => this.imageRemove(e)}
                    fileKey={this.state.theInputKey || ''}
                    changed={ formElement.id ==='image'? (e) => this.imageChangeHandler(e) : (event) => this.inputChangedHandler(event, formElement.id)} 
                    />
                    
               ))}


      			<div className="ln_solid"></div>
			    <div className="form-group">
			        <div className="col-md-8 col-sm-6 col-xs-12 col-md-offset-3 pull-right">
			          <button className="btn btn-round btn-default" type="button" onClick={this.crudListViewHandler}>Back to List</button>
			          <button type="submit" className="btn btn-round  btn-success" disabled={!this.state.formIsValid}>{this.state.buttonText}</button>
			        </div>
			    </div>

      		</form>
      	)

      	if(this.props.loading){
        	form = <Loader/>
    	}


		return (
			<div className="x_panel">
  				<div className="x_content">
  					{form}
  					<MessageHandler success={this.props.crudSuccess} error={this.props.crudError} />
  				</div>
  			</div>
		)
	}
	
}


const mapStateToProps = state => {
    return {
    	editData 	: state.crd.dataList,
    	crudSuccess : state.crd.success,
        crudError 	: state.crd.error,
        loading		: state.crd.loading,
        token		: state.log.token
        
       
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onCrudFormAction		: (url, formData) => dispatch(actionTypes.save(url, formData)),
        onfetchFail				: (error) => dispatch(actionTypes.fetchFail(error)),
        onSuccessErrorSetNull	: () => dispatch(actionTypes.successErrorSetNull())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrudAddForm)


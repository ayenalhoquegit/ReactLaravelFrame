import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MessageHandler extends Component{
	toastId = null; 
    notify = (msg) =>{
      if (! toast.isActive(this.toastId)) {
      	 	if(this.props.error){
      	 		toast.error(msg, {position: "top-center", autoClose:3000, toastId:15});
      	 	}else{
      	 		toast.success(msg, {position: "top-center", autoClose:3000, toastId:15});
      	 	}
           		 
      }
    };
       
    render(){
        //this.props.onSuccessErrorSetNull();
      
    	  if(this.props.success){
           this.notify(this.props.success);
        }
        if(this.props.error){
           this.notify(this.props.error);
        }
    	return (
    		<ToastContainer /> 
    	);
    }

}





export default MessageHandler;
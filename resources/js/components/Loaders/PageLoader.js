import React from 'react';
import './PageLoader.css';
const loader = ()=>{
	return (
		<div  className="PageLoader">
		  <div className="text-center LoaderContent">
		    <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
		  </div>
		</div>
	);
}

export default loader;
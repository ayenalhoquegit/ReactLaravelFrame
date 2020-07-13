import React, {Component,lazy, Suspense} from 'react'; 
import {Route, Switch} from 'react-router-dom';


const CrudAddForm 	= lazy(() => import('./CrudAddForm'));
const CrudList 		= lazy(() => import('./CrudList'));



class Crud extends Component{

  render(){
  	
    return (
           <div className="right_col" role="main">
	          <div className="page-title">
	            <div className="col-md-12 ">
	              <div className="title_left ">
	                <h3>Crud</h3>
	              </div>
	              <div className="pull-right">
	               
	              </div>
	            </div>
	            <br/>
	          </div>
	          <div className="clearfix"></div>
	          
	          <div className="row">
	            <div className="col-md-12 col-sm-12 col-xs-12">
	              <div className="x_panel">
	                <div className="x_content" style={{minHeight:'450Px'}}>
	                	<Suspense fallback={ <div> Loading... </div> }>
		                  	<Switch>
		                  	 <Route exact path="/crud/add-crud-form" render = {(props) => <CrudAddForm {...this.props}  /> }  />
		                  	 <Route exact path="/crud/edit-crud-form" render = {(props) => <CrudAddForm {...this.props}  /> }  />
		                  	 <Route  path="/crud" render = {(props) => <CrudList {...this.props}  /> }  />
		                  	</Switch>
		                </Suspense>

	                </div>
	              </div>
	            </div>
	          </div>

	        </div>   
        );
      }
    }

    

export default Crud;


		          
          
		        
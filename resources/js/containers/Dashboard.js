import React, {Component, lazy, Suspense} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


import Header from '../components/Header';
import Navigation from '../components/Navigation';
import FooterCom from '../components/Footer';

const DashboardMiddle 	= lazy(() => import('../components/DashboardMiddle'));
const Menu 				= lazy(() => import('../components/Menu/Menu'));
const Crud 				= lazy(() => import('../components/Crud/Crud'));
const Role 				= lazy(() => import('../components/User/Role'));
const User 				= lazy(() => import('../components/User/User'));
const ArrayCrud 		= lazy(() => import('../components/ArrayCrud/ArrayCrud'));
const Profile 			= lazy(() => import('../components/Profile'));
const ChangePassword 	= lazy(() => import('../components/ChangePassword'));


 class Dashboard extends Component{
	render(){
		let authStatus   = localStorage.getItem('isAuth')
		let authRedirect = null;
		if(!authStatus && !this.props.isAuth){
			authRedirect  = <Redirect to="/login" /> 
		}

		return (
			<div className="container body">
		      <div className="main_container">		      	
		        <Header />
		      	<Navigation/>

		      	<Suspense fallback={ <div> Loading... </div> }>
		      		<Switch>
		      			{authRedirect}
		      		 	<Route exact path="/dashboard" render = {(props) => <DashboardMiddle {...this.props}  /> }  />
	                    <Route exact path="/menu" render = {(props) => <Menu {...this.props} /> }  />
	                    <Route exact path="/crud" render = {(props) => <Crud {...this.props} /> }  />
	                    <Route exact path="/crud/add-crud-form" render = {(props) => <Crud {...this.props} /> }  />
	                    <Route exact path="/crud/edit-crud-form" render = {(props) => <Crud {...this.props} /> }  />
	                    <Route exact path="/userManage-userRole" render = {(props) => <Role {...this.props}  /> }  />
	                    <Route exact path="/userManage-user" render = {(props) => <User {...this.props}  /> }  />
	                    <Route exact path="/arrayCrud" render = {(props) => <ArrayCrud  {...this.props} /> }  />
	                    <Route exact path="/profile" render = {(props) => <Profile {...this.props} /> }  />
	                    <Route exact path="/changePassword" render = {(props) => <ChangePassword  {...this.props} /> }  />
	                    <Redirect from="/logout" to="/login" />
	                    <Route  path="/" render = {(props) => <DashboardMiddle {...this.props} />} /> }   />


	                    
                	</Switch>
                </Suspense>

		      </div>

		       <FooterCom />
		    </div>
		)
	}
}

const mapStateToProps = state => {
    return {
        isAuth:state.log.isAuth
        
    };
};

export default connect(mapStateToProps)(Dashboard);

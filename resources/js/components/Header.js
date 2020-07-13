import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'; 	
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/index';

class Header extends Component{

	logoutHandler = ()=>{
		this.props.onLogout();
		console.log('logout is fire')
	}
	render(){
		return (
			<div className="top_nav">
			  <div className="nav_menu">
			    <nav>
			      <div className="nav toggle">
			        <a id="menu_toggle"><i className="fa fa-bars"></i></a> 
			      </div>
			      <ul className="nav navbar-nav navbar-right">
			        <li className="">
			          <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
			            image
			            Ayenal
			            <span className=" fa fa-angle-down"></span>
			          </a>
			          <ul className="dropdown-menu dropdown-usermenu pull-right">
			            <li><NavLink to="/profile"> Profile</NavLink></li>
			            <li><NavLink to="/changePassword"> Change Password</NavLink></li>
			            <li onClick={this.logoutHandler} ><NavLink to="/logout"><i className="fa fa-sign-out pull-right"></i> Log Out</NavLink></li>
			          </ul>
			        </li>
			      </ul>
			    </nav>
			  </div>
			</div>
		);
	}


}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: (email, password) => dispatch(actionTypes.logout())       
    }
}

export default connect(null, mapDispatchToProps)(Header);
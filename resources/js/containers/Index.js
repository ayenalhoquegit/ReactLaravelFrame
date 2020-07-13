import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import * as actionTypes from '../store/actions/index';


class Index extends Component{

    componentDidMount(){
        this.props.onCheckAuthState();
    }
    render() {
        return (
            <Switch>
                <Route exact  path="/login"  component={Login} />
                <Route exact path="/dashboard"  component={Dashboard} />
                <Route  path="/"  component={Dashboard} />
            </Switch>
        );
    }
}


const mapStateToProps = state => {
  return {
    isAuth:state.log.isAuth
  };
};


const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthState: () => dispatch(actionTypes.authCheckState())
       
       
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));







import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'; 

export default class Navigation extends Component{
  render(){
    return (
           <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <div className="navbar nav_title" >
                <a href="#" className="site_title"><i className="fa fa-paw"></i> <span>School name!</span></a>
              </div>
              <div className="clearfix"></div>
              <div className="profile clearfix">
                <div className="profile_pic">
                  profile pic
                </div>
                <div className="profile_info">
                  <span>Welcome,</span>
                  <h2>Admin</h2>
                </div>
                <div className="clearfix"></div>
              </div>
             
              <br />
              <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                  <h3>General</h3>
                  <ul className="nav side-menu">
                    <li><NavLink to="/menu"><i className="fa fa-bars"></i> Menu</NavLink></li>
                    <li><NavLink to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard </NavLink></li>
                    <li><NavLink to="/crud"><i className="fa fa-tachometer"></i> Crud  </NavLink></li>
                    <li><a href="#"><i className="fa fa-tachometer"></i>User manages<span className="fa fa-chevron-down"></span></a>
                          <ul className="nav child_menu">
                              <li><NavLink to="userManage-userRole">User Role<span></span></NavLink></li>
                              <li><NavLink to="userManage-user">User<span></span></NavLink></li>
                          </ul>
                    </li>  

                    <li><NavLink to="/arrayCrud"><i className="fa fa-tachometer"></i> Array Crud  </NavLink></li>


                  </ul>
                </div>

              </div>
             
              <div className="sidebar-footer hidden-small">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                  <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                  <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                  <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                  <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
              </div>
            
            </div>
          </div>
        );
      }
    }

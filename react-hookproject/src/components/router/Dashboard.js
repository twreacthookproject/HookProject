import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import { Switch, Route } from "react-router-dom";
import Login from '../user/Login';
import SignUp from '../user/SignUp';
import App from './App';
class Dashboard extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        const { currentUser, error } = this.props;
    return(
        <Switch>
        <Route exact path="/login" component={()=><Login/>}></Route>
        <Route exact path="/signup" component={()=><SignUp/>}></Route>
        {currentUser?
        <Route exact path="/" component={()=><App/>}></Route>
    :<Login/>}
      </Switch>
    )   
}
}

function mapStateToProps(state) {
    return {
      currentUser: state.userReducer.currentUser,
      error: state.userReducer.error,
    };
  }

  const mapDispatchToProps = {
    login,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



import React, {  useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as  userActions from '../../redux/actions/userActions'
import { Card,CardBody,CardHeader } from "reactstrap";

function SignUp (props) {
        const {user,setUser}= useState(props.saveUser)
        function handleChange(event) {
            const { name, value } = event.target;
            setUser((previousUser) => ({
              ...previousUser,
              [name]: value,
            }));
        
            console.log(user)
          }
        return (
            <>
            <Card>
                <CardHeader>
                <h1>Sign Up</h1>
                </CardHeader>
                <CardBody>
                    <form>
<label htmlFor="username">Kullanıcı Adı</label>
<input type="text" name="username" className="form-control" id="username" onChange={()=>handleChange} />
<br/>
<label htmlFor="password">Şifre</label>
<input type="password" name="password" className="form-control" id="password" onChange={()=>handleChange} />
<br/>
<label htmlFor="password2">Şifre</label>
<input type="password" name="password2" className="form-control" id="password2" onChange={()=>handleChange} />
<br/>
<input type="submit" className="btn btn-primary" value="Üye Ol"/>
                    </form>
                </CardBody>
            </Card>
            </>
        );
    }





function mapStateToProps(state) {
    return {
    userAdd: state.saveUserReducer,
    };
    }
    
    function mapDispatchToProps(dispatch) {
    return {
    actions: {
    addToUser: bindActionCreators(userActions.addToUser, dispatch),
    },
    };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/userActions';
import { Card,CardBody, CardFooter, CardHeader } from 'reactstrap';
import SideBar from '../sidebar/SideBar';
import Content from '../content/Content';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { currentUser, error } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        {currentUser ? (
           <div className="App wrapper">
           <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
           <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
         </div>
        ) : (
          <div className='row' style={{marginTop:"100px"}}>
<div className='col-6 offset-3'>
<Card className='w-100'>
            <CardHeader>
              <h2>Giriş Yap</h2>
            </CardHeader>
            <CardBody>
            <form onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="email">E-posta:</label>
              <input type="text" id="email" name="email" className='form-control' value={email} onChange={this.handleInputChange} />
            </div>
            <br />
            <div>
              <label htmlFor="password">Şifre:</label>
              <input type="password" id="password" name="password" className='form-control' value={password} onChange={this.handleInputChange} />
            </div>
            <br/>
            <button type="submit" className='btn btn-primary'>Giriş Yap</button>
            {error && <p>{error}</p>}
          </form>
            </CardBody>
            <CardFooter>
              <p>Hoş Geldiniz!</p>
            </CardFooter>
          </Card>
</div>
          </div>
          
          
        )}
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

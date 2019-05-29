import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../actions';
import /*styled,*/ { withTheme } from 'styled-components';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            passInput: ''
        }
    }

    componentDidMount() {
        if(this.props.loggedIn) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate() {
        if(this.props.loggedIn) {
            this.props.history.push('/');
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let username = this.state.userInput;
        let password = this.state.passInput
        this.props.userLogin(username, password);
        this.setState({
            userInput: '',
            passInput: ''
        });
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>Login</h1>
                    <div onSubmit={this.handleSubmit} autoComplete="off">
                        <div variant="filled">
                            <div htmlFor="userInput">Username</div>
                            <div required type="text" name="userInput" value={this.state.userInput} onChange={this.handleInput} />
                        </div>
                        <div variant="filled">
                            <div htmlFor="passInput">Password</div>
                            <div required type="password" name="passInput" value={this.state.passInput} onChange={this.handleInput} />
                        </div>
                        <div type="submit">{this.props.loggingIn ? <div size="28" /> : 'Login'}</div>
                        <div to="/register">Don't have an account? Sign Up Here!</div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    userLogin: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.userReducer.loggedIn,
        loggingIn: state.userReducer.loggingIn
    }
};
export default connect(mapStateToProps, { userLogin })(withTheme(Login));
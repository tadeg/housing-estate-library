import React, { Component } from "react";
import { connect } from "react-redux";
import { loginActions } from "../../actions/loginActions";
import PropTypes from "prop-types";
import { Row, Col, Container } from "react-bootstrap";

class LoginPage extends React {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            userNameError: false,
            passwordError: false
        };
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };


    handleSubmit = async e => {
        e.preventDefault();
        const { username, password } = this.state;
            if(!username) {
                this.setState({ userNameError: true });
            }
            if (!password) {
                this.setState({ passwordError: true});
            }
            if (username && password) {
                await this.props.dispatch(loginActions.login(username, password));
            }
    };

    render() {
        const { loginPending, isLogged } = this.props;
        const { username, password, userNameError, passwordError } = this.state;

    return (
        <Container>
            <Row>
                <Col md={{ offset: 4, span: 4 }}>
                    {!isLogged && (
                        <div>
                            <h2>Login</h2>
                            {loginPending && "Login in progress...."}
                            {userNameError && (
                                <div className="small alert alert-danger">
                                    Username is required
                                </div>
                            )}
                            {passwordError && (
                                <div className="small alert alert-danger">
                                    Password is required
                                </div>
                            )}
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={"form-group"}>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={username}
                                        onChange={this.handleChange}
                                        />
                                </div>

                                <div className={"form-group"}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                        />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary">Log in</button>
                                </div>
                            </form>
                        </div>
                    )}
                </Col>
            </Row>

        </Container>

    );
    }
    
    static propTypes = {
        dispatch: PropTypes.func,
        attributesUpdate: PropTypes.func,
        loginPending: PropTypes.bool,
        isLogged: PropTypes.bool
    };
}



function mapStateToProps(state) {
    return {
        loginPending: state.loginReducer.loginPending,
        isLogged: state.loginReducer.isLogged
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage};


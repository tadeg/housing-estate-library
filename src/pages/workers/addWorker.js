import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { connect } from "react-redux";
import { addWorker } from "../../actions/workerActions";



class AddWorker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            worker: {
                firstname: "",
                lastname: "",
                email: "",
                phone: ""
            }
        };
    }


    handleChange = event => {
        this.setState(prevState => ({
            worker: {
                ...prevState.worker,
                [event.target.name]: event.target.value
            }
        }));
    };


    handleSubmit = () => {
        this.props.addWorkerToState(this.state.worker);
        this.setState({ worker: [] });
    };




    render() {

        return (

            <Container>

                <Row>

                    <Col xs={12} md={4}>
                        <label htmlFor="firstname" className="mt-2">
                            Firstname:
                        </label>
                        <input
                            name="firstname"
                            value={this.state.worker.firstname}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="lastname" className="mt-2">
                            Lastname:
                        </label>
                        <input
                            name="lastname"
                            value={this.state.worker.lastname}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="email" className="mt-2">
                            E-mail:
                        </label>
                        <input
                            name="email"
                            value={this.state.worker.email}
                            className="form-control mt-2"
                            onChange={this.handleChange}
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="phone" className="mt-2">
                            Phone:
                        </label>
                        <input
                            name="phone"
                            value={this.state.worker.phone}
                            className="form-control mt-2"
                            onChange={this.handleChange}
                        />
                    </Col>


                    <Col xs={12}>
                        <button
                            className="btn btn-primary btn-lg btn-block mt-2"
                            onClick={this.handleSubmit}
                        >
                            Enter new worker:
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    };

};


    const mapDispatchToProps = dispatch => {
       
        return {
            addWorkerToState: worker => {
                dispatch(addWorker(worker));
            }
        };
    };


export default connect(null, mapDispatchToProps)(AddWorker);



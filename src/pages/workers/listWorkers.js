import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { removeWorker } from "../../actions/workerActions";


class ListWorkers extends Component {
    constructor(props) {
        super(props);
    }


    handleRemove = id => {
        this.props.remove(id);
        };


    render() {

        return (

            <Container>
                <Row>
                    {this.props.workersCurrent.map(worker => (
                        <Col md={4} key={worker.id}>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">{worker.firstname}</h5>
                                    <h5 className="card-title">{worker.lastname}</h5>
                                    <p className="card-text">{worker.email}</p>
                                    <p className="card-text">{worker.phone}</p>

                                </div>
                            </div>

                            <p className="card-text">
                                <button
                                    type="button"
                                    className="btn btn danger"
                                    onClick={() => this.handleRemove(worker.id)}
                                >
                                    Delete
                                </button>
                            </p>

                        </Col>
                    ))}
                </Row>
            </Container>
            );
        }
    }


    const mapStateToProps = (state, ownProps) => {
        return {
            workersCurrent: state.workersReducer.workers
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            remove: id => {
                dispatch(removeWorker(id))
            }
        };
    };

    
    export default connect(mapStateToProps, mapDispatchToProps)(ListWorkers);


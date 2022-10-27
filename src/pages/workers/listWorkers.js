import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";


class ListWorkers extends Component {
    constructor(props) {
        super(props);
    }


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

    
    export default connect(mapStateToProps)(ListWorkers);


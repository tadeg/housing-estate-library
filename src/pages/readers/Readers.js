import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';

class Readers extends Component {
// for API REST 


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

componentDidMount() {
    fetch('https://reqres.in/api/users/')
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    isLoaded: true,
                    users: result.data
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
};

render() {

    if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container>
            <BurgerMenuHome />
            <h3>Data from API</h3>  
                <Row>
                    {this.state.users.map(user => (
                        <Col md={4} key={user.id}>
                            <div className="card mt-2">
                                <img
                                    className="card-img-top"
                                    src={user.avatar}
                                    alt="Reader's image"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{user.first_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
                );
            }   
        }
    }

export default Readers;


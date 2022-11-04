import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import fetchAllFollowers from "../../services/http/FollowersService";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';


class ListFollowers extends Component {
    constructor(props) {
        super(props);
    }

componentDidMount = () => {
    this.props.getFollowers();
}


    render() {

        return (

            <Container>
            <BurgerMenuHome />
                <Row>
                    {this.props.followersFetchingInProgress && <div>Loading ... </div>}
                    {this.props.followersCurrent &&
                        this.props.followersCurrent.map(follower => (
                            <Col md={4} key={follower.id}>
                            <div className="card mt-2">
                                <img
                                    className="card-img-top"
                                    src={follower.avatar}
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{follower.first_name}</h5>
                                    <p className="card-text">{follower.email}</p>
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
            followersCurrent: state.followersReducer.followers,
            followersFetchingInProgress: state.followersReducer.inprogress
        };
    };

    const mapDispatchToProps = dispatch => {
        return {
            getFollowers: () => {
                dispatch(fetchAllFollowers())
            }
        };
    };

    export default connect(mapStateToProps, mapDispatchToProps)(ListFollowers);


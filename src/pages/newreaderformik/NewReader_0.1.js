import React from "react";
import { Formik, Field, Form } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';


const NewReader = ({ props }) => {
    return (
       <Container>

        <BurgerMenuHome />

        <Row>
            <Col xs={12}>
                <h1 className="name-welcome">The Housing Estate Library "Reader"</h1>
                    <h1 className="name-welcome">Welcome!</h1>
                    <h2 className="name-welcome">Add new reader to the library:</h2>
                    <h3>Enter reader data:</h3>
            </Col>
        </Row>

        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                phone: "",
                email:"",
                street: "",
            }}
                onSubmit={values => {
                    console.log(values);
                }}
            >


            <Form>
                <Row>
                    <Col xs={12} md={4}>
                        <label htmlFor="firstname">Name:</label>
                        <Field name="firstname" id="firstname" className="form-control" />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="lastname">Lastname:</label>
                        <Field name="lastname" id="lastname" className="form-control" />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="phone">Phone:</label>
                        <Field name="phone" id="phone" className="form-control" />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="email">Email:</label>
                        <Field name="email" id="email" className="form-control" />
                    </Col>

                    <Col xs={12} md={4}>
                        <label htmlFor="street">Street:</label>
                        <Field name="street" id="street" className="form-control" />
                    </Col>


                    <Col xs={12} className="mt-2">
                        <button 
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Send
                        </button>
                    </Col>
                </Row>
            </Form>
        </Formik> 
        </Container>
        );
    }; 

export default NewReader;

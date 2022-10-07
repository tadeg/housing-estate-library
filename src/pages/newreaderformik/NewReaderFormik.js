import React from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import * as Yup from "yup";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import NewReaderInput from '../../components/FormikForms/NewReaderInput';
import NewReaderTextArea from '../../components/FormikForms/NewReaderTextArea';
import NewReaderCheckbox from '../../components/FormikForms/NewReaderCheckbox';
import NewReaderSelect from '../../components/FormikForms/NewReaderSelect';




const NewReaderFormik = ({ props }) => {

    const citizenshipOfReader = [
        { id: "-", name: "---" },
        { id: "en", name: "English" },
        { id: "pl", name: "Polish" },
        { id: "fr", name: "French" },
        { id: "ge", name: "German" },
        { id: "pr", name: "Portuguese" },
        { id: "sp", name: "Spanish" },
        { id: "it", name: "Italian" }
    ];

    
    return (
        <div>

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

        </Container>



        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                phone: "",
                email:"",
                street: "",
                citizenship: "",
                notes: "",
                citycard: ""
            }}

            validationSchema={Yup.object({

                firstname: Yup.string()
                    .min(2, "Name field must contain a minimum of 2 characters!")
                    .max(15, "Name field may contain up to 15 characters")
                    .required("Mandatory field"),

                lastname: Yup.string()
                    .min(2, "Lastname field must contain a minimum of 2 characters!")
                    .max(15, "Lastname field may contain up to 15 characters")
                    .required("Mandatory field"),

                phone: Yup.string()
                    .min(9, "Phone field must contain a minimum of 9 characters!")
                    .max(15, "Phone field may contain up to 15 characters")
                    .required("Mandatory field"),

                email: Yup.string()
                    .min(6, "Email field must contain a minimum of 6 characters!")
                    .max(50, "Email field may contain up to 50 characters"),

                street: Yup.string()
                    .min(2, "Street field must contain a minimum of 2 characters!")
                    .max(40, "Street field may contain up to 40 characters")
                    .required("Mandatory field"),  

                citizenship: Yup.string()
                    .oneOf(
                        ["English", "Polish", "French", "German", "Portuguese", "Spanish", "Italian" ],
                        "Incorrect citizenship"
                    )
                    .required("Mandatory field"), 
                                 
                notes: Yup.string()
                    .max(50, "Citizenship field may contain up to 50 characters!"),
      
                citycard: Yup.boolean().required("Mandatory field"), 

            })}

                onSubmit={values => {
                    console.log(values);
                    alert("Communication with API endpoint to be constructed...");
                }}
            >


            <Form className="w-100">

            <Container>

                <Row>
                    <Col xs={12} md={4}>
                        <NewReaderInput 
                            label="Name:"
                            name="firstname"
                            type="text"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderInput 
                            label="Lastname:"
                            name="lastname"
                            type="text"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderInput 
                            label="Phone:"
                            name="phone"
                            type="text"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderInput 
                            label="Email:"
                            name="email"
                            type="text"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderInput 
                            label="Street:"
                            name="street"
                            type="text"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderSelect
                            label="Citizenship:"
                            name="citizenship"
                            className="form-control"
                            options={citizenshipOfReader}
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderTextArea
                            label="Notes:"
                            name="notes"
                            className="form-control"
                        />
                    </Col>

                    <Col xs={12} md={4}>
                        <NewReaderCheckbox
                            label="Has Reader got a promotional citycard?" 
                            name="citycard"
                            className="form-control"
                        />
                    </Col>


                    <Col xs={12} md={10} className="mt-2">
                        <button 
                            type="submit"
                            className="btn btn-primary btn-lg btn-block mt-2"
                        >
                            Send
                        </button>
                    </Col>
                </Row>
                </Container>

            </Form>
        </Formik> 
        </div>
        );
    }; 

export default NewReaderFormik;

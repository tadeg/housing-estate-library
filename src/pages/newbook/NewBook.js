import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import NewBookDataInput from "../../components/NewBookDataInput/NewBookDataInput";
import NewBookDataSelect from '../../components/NewBookDataSelect/NewBookDataSelect';
import NewBookDataTextArea from '../../components/NewBookDataTextArea/NewBookDataTextArea';
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';
import '../../css/NewBook.css';


class NewBook extends Component {


languageOptions = [
    { id: "-", name: "---" },
    { id: "en", name: "English" },
    { id: "pl", name: "Polish" },
    { id: "fr", name: "French" },
    { id: "ge", name: "German" },
    { id: "pr", name: "Portuguese" },
    { id: "sp", name: "Spanish" },
    { id: "it", name: "Italian" }
];

coverOptions = [
    { id: "-", name: "---" },
    {id: "pb", name: "Paperback"},
    {id: "hd", name: "Hardcover"},
];


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            authorFirstname: "",
            authorLastname: "",
            publisher: "",
            publicationYear: "",
            language: "",
            cover: "",
            pages: "",
            notes: "",
            newedition: false,
                errors: {
                    errOftitle: "",
                    errOfauthorFirstname: "",
                    errOfauthorLastname: "",
                    errOfpublisher: "",
                    errOfpublicationYear: "",
                    errOflanguage: "",
                    errOfcover: "",
                    errOfpages: "",
                    errOfnotes: "",
                    errOfnewedition: ""
                }
        };
    }

    // changeHandler = event => {
    //     this.setState({ firstname: event.target.value});
    // };




    changeHandler = event => {

        let inputName = event.target.name;
        let inputValue = 
            event.target.type === "checkbox"
            ? event.target.checked  
            : event.target.value;


        this.setState(prevState => ({ 
            ...prevState,
            [inputName]: inputValue 
        }));



   // Validation performed at the moment of inputing values to input fields


        if (inputName === "title") {

            if (inputValue.length < 2) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOftitle: "The title should have at least 2 characters!"
                    }
                }));

            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOftitle: ""
                    }
                }));
            }
        }


        if (inputName === "authorFirstname") {

        if (inputValue.length < 2) {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    errOfauthorFirstname: "Author's firstname should have at least 2 characters!"
                }
            }));

        } else {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    errOfauthorFirstname: ""
                }
            }));
        }
        }


        if (inputName === "authorLastname") {

            if (inputValue.length < 2) {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOfauthorLastname: "Author's lastname should have at least 2 characters!"
                    }
                }));
    
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOfauthorLastname: ""
                    }
                }));
            }
            }
    };



    // Validation performed at the moment of submiting form with the usage of Send button

    submitHandler = event => {
        let errorOccured = false;

            if (this.state.title.length < 2) {
                errorOccured = true;
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOftitle: "The title should have at least 2 characters!"
                    }
                }));

            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOftitle: ""
                    }
                }));
            }
        

            if (this.state.authorFirstname.length < 2) {
                errorOccured = true;
                this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    errOfauthorFirstname: "Author's firstname should have at least 2 characters!"
                }
            }));

        } else {
            this.setState(prevState => ({
                errors: {
                    ...prevState.errors,
                    errOfauthorFirstname: ""
                }
            }));
        }
    

            if (this.state.authorLastname.length < 2) {
                errorOccured = true;
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOfauthorLastname: "Author's lastname should have at least 2 characters!"
                    }
                }));
    
            } else {
                this.setState(prevState => ({
                    errors: {
                        ...prevState.errors,
                        errOfauthorLastname: ""
                    }
                }));
            }

        if (errorOccured) {
            event.preventDefault();
          
        } else {
            alert("Communication with API endpoint to be constructed...");
        }
        };


   


    render() {
        return(
            <Container> 

                <div className="wrapper">
                <BurgerMenuHome />
                <form onSubmit={this.submitHandler}>

                    <div className="form-group">
                        <Row>
                            <Col xs={12}>
                                <h1>The Housing Estate Library "Reader"</h1>
                                <h1>Welcome!</h1>
                                <h2>Add new book to the library:</h2>
                                <h3>Enter book data:</h3>
                            </Col>
                        </Row>

                        <Row>  
                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="text"
                                name="title"
                                label="Title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOftitle}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="text"
                                name="authorFirstname"
                                label="Author's firstname"
                                className="form-control"
                                value={this.state.authorFirstname}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfauthorFirstname}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="text"
                                name="authorLastname"
                                label="Author's lastname"
                                className="form-control"
                                value={this.state.authorLastname}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfauthorLastname}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="text"
                                name="publisher"
                                label="Publisher"
                                className="form-control"
                                value={this.state.publisher}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfpublisher}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="text"
                                name="publicationYear"
                                label="Publication Year"
                                className="form-control"
                                value={this.state.publicationYear}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfpublicationYear}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataSelect
                                name="language"
                                label="Language"
                                className="form-control"
                                value={this.state.language}
                                onChange={this.changeHandler}
                                options={this.languageOptions}
                                error={this.state.errors.errOflanguage}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataSelect
                                name="cover"
                                label="Format"
                                className="form-control"
                                value={this.state.cover}
                                onChange={this.changeHandler}
                                options={this.coverOptions}
                                error={this.state.errors.errOfcover}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="number"
                                name="pages"
                                label="Number of Pages"
                                className="form-control"
                                value={this.state.pages}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfpages}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataTextArea
                                type="text"
                                name="notes"
                                label="Notes"
                                className="form-control"
                                value={this.state.notes}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfnotes}
                            />
                            </Col>

                            <Col xs={12} md={4}>
                            <NewBookDataInput
                                type="checkbox"
                                name="newedition"
                                label="New edition of an existing book?"
                                className="form-control"
                                value={this.state.newedition}
                                onChange={this.changeHandler}
                                error={this.state.errors.errOfnewedition}
                            />
                            </Col>

                     
                        </Row>

                        <Row>
                            <Col xs={8} md={4}>
                                <NewBookDataInput
                                    type="submit"
                                    className="btn btn-primary btn-lg btn-block"
                                    value="Send"
                                />
                            </Col>
                        </Row>


                    </div>
                </form>


                <Row>
                    <Col>
                        <h2>Entered data:</h2>
                        <ul className="list-group">
                           
                            <li className="list-group-item">
                            Title:<span> </span>
                            {this.state.title === "" ? "not available": this.state.title}
                            </li>

                            <li className="list-group-item">
                            Author's firstname:<span> </span>
                            {this.state.authorFirstname === "" ? "not available": this.state.authorFirstname}
                            </li>

                            <li className="list-group-item">
                            Author's lastname:<span> </span>
                            {this.state.authorLastname === "" ? "not available": this.state.authorLastname}
                            </li>

                            <li className="list-group-item">
                            Publisher:<span> </span>
                            {this.state.publisher === "" ? "not available": this.state.publisher}
                            </li>

                            <li className="list-group-item">
                            Publication Year:<span> </span>
                            {this.state.publicationYear === "" ? "not available": this.state.publicationYear}
                            </li>

                            <li className="list-group-item">
                            Language:<span> </span>
                            {this.state.language === "" ? "not available": this.state.language}
                            </li>

                            <li className="list-group-item">
                            Format:<span> </span>
                            {this.state.cover === "" ? "not available": this.state.cover}
                            </li>


                            <li className="list-group-item">
                            Number of pages:<span> </span>
                            {this.state.pages === "" ? "not available": this.state.pages}
                            </li>

                            <li className="list-group-item">
                           Notes:<span> </span>
                            {this.state.notes === "" ? "not available": this.state.notes}
                            </li>

                            <li className="list-group-item">
                            New edition of an existing book?:<span> </span>
                            {this.state.newedition ? "Yes": "No"}
                            </li>


                        </ul>
                    </Col>
                </Row>

                </div>
            </Container>
        );
    }
    }

    export default NewBook;
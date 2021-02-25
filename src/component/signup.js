import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard,MDBCardBody } from 'mdbreact';
import './login.css';
class signup extends React.Component {
  state = {
    name: "",
    email: "",
    // confirmEmail: "",
    password: ""
  };
  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="formSign" md="center">
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >

          <MDBContainer >
            <MDBRow md="center">
              <MDBCol md="8">
                <MDBCard>
                  <MDBCardBody className="mx-4">
                <form>
                 <p className="h4 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      value={this.state.name}
                      name="name"
                      onChange={this.changeHandler}
                      group type="text"
                      id="defaultFormRegisterEmilEx2"
                      className="form-control"
                      required/>
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" required
                      success="right" />
                    <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="email"s validate
                      error="wrong" success="right" required/>
                    <MDBInput label="Your password" icon="lock" group type="password" validate required/>
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit">Register</MDBBtn>
                    <MDBBtn  href="http://localhost:3000"> Back Login</MDBBtn>
                  </div>
                </form>
                </MDBCardBody>
                </MDBCard>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    );
  };
};

export default signup;
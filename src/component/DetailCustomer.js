import React from "react";
import './dashboad.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
class DetailCustomer extends React.Component {
    render() {
        return (
            <div className="formDetail">
            <MDBContainer >
                <MDBCol style={{ maxWidth: "22rem" }} >
                    <MDBCard  >
                        <MDBCardImage className="img-fluid" src="https://vnn-imgs-f.vgcloud.vn/2021/01/11/19/mu-mbappe.jpg"/>
                        <MDBCardBody>
                            <MDBCardTitle>Profile</MDBCardTitle>
                            <MDBCardText>Name : Lam Nguyen</MDBCardText>
                            <MDBCardText>SDT:08888888 ,</MDBCardText>
                            <MDBBtn href="#">Edit</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBContainer>
            </div>
        );
    }
}
export default DetailCustomer;
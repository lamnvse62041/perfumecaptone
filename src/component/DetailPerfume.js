import  React  from "react";
import './dashboad.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class DetailPerfume extends React.Component{
    render(){
        return(
            <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img" src="https://vnn-imgs-f.vgcloud.vn/2021/01/11/19/mu-mbappe.jpg"
           />
        <MDBCardBody>
          <MDBCardTitle>Nuoc hoa name</MDBCardTitle>
          <MDBCardText>nam tinh yeu kieu</MDBCardText>
          <MDBCardText>thom nhe ,</MDBCardText>
          <MDBBtn href="#">Back</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        );
    }
}
export default DetailPerfume;
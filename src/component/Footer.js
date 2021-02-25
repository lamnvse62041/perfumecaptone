import React from 'react';
import { MDBContainer ,MDBCardFooter} from "mdbreact";
class Footer extends React.Component{
    render(){
        return(
            <MDBCardFooter className="footer">
            <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> Perfume </a>
            </MDBContainer>
        </MDBCardFooter>
        );
    }
}
export default Footer;
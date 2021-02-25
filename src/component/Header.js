import React   from "react";

import {  MDBNav,MDBNavItem,MDBNavLink,MDBIcon,MDBCardHeader} from "mdbreact";
class Header extends React.Component{
    render(){
        return(
            <MDBCardHeader>
            <MDBNav tabs>
            <MDBNavItem >
                <MDBNavLink
                    link
                    to="#" >
                    <MDBIcon icon="home"   color="primary"/> Dashboard
</MDBNavLink></MDBNavItem>
            <MDBNavItem >
                <MDBNavLink
                    link
                    to="#"
                >
                    <MDBIcon icon="user" /> Profile
</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink
                    link
                    to="#"
                >
                    <MDBIcon icon="heart" /> Follow
</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink
                    link
                    to="#"
                >
                    <MDBIcon icon="envelope" /> Contact
</MDBNavLink>
            </MDBNavItem>
        </MDBNav>
        </MDBCardHeader>

        );
    }
}
export default Header;
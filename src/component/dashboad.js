import React from "react";
import './dashboad.css';
import {
    MDBContainer, MDBCardText, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBScrollbar,
    MDBRow, MDBCol, MDBListGroupItem, MDBListGroup, MDBTable, MDBTableBody, MDBTableHead,
    MDBNav, MDBTabPane, MDBNavItem, MDBNavLink, MDBIcon, MDBTabContent, MDBCardImage, MDBCardHeader, MDBCardFooter
} from "mdbreact";
import Footer from "./Footer";
import DataTable from "./DataTable";
class dashboad extends React.Component {
    render() {
        return (
            <div class="body">


                <div class="flex-container">
                    <div class="sidebar-1">

                        <MDBListGroup style={{ width: "17rem" }}>
                            <strong>  <MDBListGroupItem href="#" active> Managerment Perfume</MDBListGroupItem></strong>
                            <MDBListGroupItem href="#">Managerment Deal</MDBListGroupItem>
                            <MDBListGroupItem href="#">Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem href="#">Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem href="#" active>Vestibulum at eros</MDBListGroupItem>
                            <MDBListGroupItem></MDBListGroupItem>
                        </MDBListGroup>

                    </div >
                    <div class="content">
                        <strong> <MDBCardHeader><MDBIcon icon="user" /> Managerment</MDBCardHeader></strong>
                       < DataTable/>
                    </div >
                    <div class="sidebar-2">

                        <MDBCol>
                            <MDBCard >
                                <MDBCardImage cascade className="img-fluid" src="https://wowmart.vn/wp-content/uploads/2019/06/nuoc-hoa-nam-blue-de-chanel-pour-home-edp-100ml.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Man title</MDBCardTitle>
                                    <MDBBtn href="#">Show</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol>
                            <MDBCard className="img">
                                <MDBCardImage cascade className="img-fluid" src="https://wowmart.vn/wp-content/uploads/2019/06/nuoc-hoa-nam-blue-de-chanel-pour-home-edp-100ml.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Man title</MDBCardTitle>
                                    <MDBBtn href="#">Show</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className="img">
                                <MDBCardImage cascade className="img-fluid" src="https://wowmart.vn/wp-content/uploads/2019/06/nuoc-hoa-nam-blue-de-chanel-pour-home-edp-100ml.jpg" />
                                <MDBCardBody cascade>
                                    <MDBCardTitle>Man title</MDBCardTitle>
                                    <MDBBtn href="#">Show</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </div >
                </div >
            </div>

        );
    }
}
export default dashboad;
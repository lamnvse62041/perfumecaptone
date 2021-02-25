import React from "react";
import './dashboad.css';
import {
    MDBContainer,
    MDBRow, MDBCol, MDBListGroupItem, MDBListGroup,MDBTable,MDBTableBody,MDBTableHead,
    MDBNav, MDBTabPane, MDBNavItem, MDBNavLink, MDBIcon, MDBCMDBSpinner, MDBTabContent, MDBCardImage, MDBCardHeader, MDBCardFooter
} from "mdbreact";
class dashboad extends React.Component {
    render() {
        return (
            
                    <div class="content">
                    <MDBCardHeader><MDBIcon icon="user"/>  Managerment</MDBCardHeader>
                    <MDBTable>
                        
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
            </div>
        );
    }
}
export default dashboad;
import {  Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";

const OrgUsers = () => {
  const orgUsers = useSelector((state) => state.orgUsers.orgUsers);
  const organization = useSelector((state) => state.userAuth.organization)
  
  const renderOrgUsers = () => {
    if (orgUsers && orgUsers.length > 0) {
      return (
        <Dropdown>
          <Dropdown.Toggle className="nav-dropdowns" variant="light" id="dropdown-members">
            Organization: {organization} ({orgUsers.length})
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {orgUsers.map((member, index) => (
              <Dropdown.Item key={index}>{member.email}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )
    } else {
      return;
    }
  }

  return (
    <>
      { orgUsers ? <>{renderOrgUsers()}</> : <div></div> }
    </>
  )
 }


export default OrgUsers;
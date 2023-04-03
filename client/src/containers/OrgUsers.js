import {  Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const OrgUsers = () => {
  // dummy array of users - will get this from store eventually
  const members = ["Johnny", "Nils", "Michael"];

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-members">
        Members ({members.length})
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {members.map((member, index) => (
          <Dropdown.Item key={index}>{member}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default OrgUsers;
import React from 'react';

function NavBar(){
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Notifications</Nav.Link>
      <Nav.Link href="#link">Messages</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Tweet</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;
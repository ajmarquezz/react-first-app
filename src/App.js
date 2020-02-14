import React, { Component } from 'react';
// import { render } from '@testing-library/react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'cheese', label: 'Cheese' }
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      // date: new Date()
      user_name: 'Alfonso',
      title: 'Software Engineer',
      jsonList: []
    });
  }

  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/ceILeUmYoi?indent=2', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          jsonList: json
        })
      })
      .catch(error => console.log(error));
  }

  handleClick() {
    this.setState({
      user_name: 'Alfonso Marquez',
      title: 'Engineer'
    })
  }

  state = {
    selectedOption: null
  }
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option Selected:`, this.state.selectedOption)
    );
  }

  render() {

    const { selectedOption } = this.state;
    //array for each
    // const arrayToRender = [];
    // array.forEach(function(word) {
    //   arrayToRender.push(
    //     <p key={word}>{word}</p> 
    //   )  
    // })

    return (


      <div>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Brand href="#home">First App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Lorem Ipsum</h1>
              <p> see i am a lot of things but i can assure you im not what it is they say i am | not lace not potpourri nobody like meee~</p>
              <Select
                isMulti
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder='Select Flavor(s)'
              />
              <hr />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Companyg</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.jsonList.map(item => {
                       return (
                      <tr key='item'>
                         <td>{item.name}</td>
                         <td>{item.address}</td>
                         <td>{item.age}</td>
                         <td>{item.company}</td>

                      </tr>  
                       )
                     })}
                </tbody>
              </Table>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

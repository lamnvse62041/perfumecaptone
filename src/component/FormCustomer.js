import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardTitle, MDBFormInline, MDBInput } from 'mdbreact';

class FormCustomer extends Component {
  state = {
    radio: 2
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render() {
    return (
      <MDBCard >
        <MDBCardTitle> Form Pefume</MDBCardTitle>
      <MDBFormInline className="h4 text-center mb-4">
        <MDBInput
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          label='Nam'
          type='radio'
          id='radio1'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          label='Nu'
          type='radio'
          id='radio2'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(3)}
          checked={this.state.radio === 3 ? true : false}
          label='3'
          type='radio'
          id='radio3'
          containerClass='mr-5'
        />
      </MDBFormInline>
      <MDBFormInline>
        <MDBInput
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          label='Nong'
          type='radio'
          id='radio1'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          label='Lanh'
          type='radio'
          id='radio2'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(3)}
          checked={this.state.radio === 3 ? true : false}
          label='mat me'
          type='radio'
          id='radio3'
          containerClass='mr-5'
        />
      </MDBFormInline>
      <MDBFormInline>
        <MDBInput
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          label='Huong go'
          type='radio'
          id='radio1'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          label='Huong Hoa'
          type='radio'
          id='radio2'
          containerClass='mr-5'
        />
        <MDBInput
          onClick={this.onClick(3)}
          checked={this.state.radio === 3 ? true : false}
          label='huong .............'
          type='radio'
          id='radio3'
          containerClass='mr-5'
        />
      </MDBFormInline>
      <MDBBtn>Submit</MDBBtn>
      </MDBCard>
    );
  }
}

export default FormCustomer;
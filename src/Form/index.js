import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import * as emailjs from 'emailjs-com'
import styled from "styled-components";
import NavBar from "../NavBar";
import Footer from "../Footer";

class QuoteForm extends React.Component {

  state = {
    submitted: false,
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    comment: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
    
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({submitted: true})

    const { name, companyName, phoneNumber, email, comment } = this.state
    
    let templateParams = {
      from_name: name,
      emailAddress: email,
      notes: comment,
      phone: phoneNumber,
      company: companyName
    }
     emailjs.send(
      'gmail',
      'template_Uv0n3Bxw',
       templateParams,
      'user_DsPQJXfrLstvUgUPqLS9E'
    ).then(function(response) {
         console.log('SUCCESS!', response);
      }, function(error) {
         console.log('FAILED...', error);
      });



   this.setState({name: '',
     companyName: '',
     phoneNumber: '',
     email: '',
     comment: ''})
    }

  render () {
    return( 
    <React.Fragment>
    <NavBar/>
    <div id="form">
    {(!this.state.submitted) && 
    <StyledForm onSubmit={this.handleSubmit}>
    <StyledFormField>
      <label className = "formLable">Name:</label>
      <input name='name' value={this.state.name} placeholder='Name' onChange={this.handleChange}/>
      <label className = "formLable">Company Name:</label>
      <input name='companyName' value={this.state.companyName} placeholder='Company Name' onChange={this.handleChange} />
      <label className = "formLable">Phone Number:</label>
      <input name='phoneNumber' type="number" value={this.state.phoneNumber} placeholder='Phone Number' onChange={this.handleChange}/>
      <label className = "formLable">Email Address:</label>
      <input name='email' type="email" value={this.state.email} placeholder='Email Address' onChange={this.handleChange}/>
    </StyledFormField>
    <StyledFormField>
      <label className = "formLable">Comments</label>
      <textarea name='comment' value={this.state.comment} placeholder='...' onChange={this.handleChange}/>
    </StyledFormField>
    <Button type='submit'>Submit</Button>
  </StyledForm>}
  </div>
  {(this.state.submitted) ? <div className="thanks"> Thanks. Someone will be in touch soon. </div>: null}
  <Footer/>
  </React.Fragment>
    );
  }
}

const StyledForm = styled(Form)`
  &&& {
    text-align: justify;
    display: grid;
    padding-top: 2%;
  }
`;

const StyledFormField = styled(Form.Field)`
  &&& {
  width: 100%;
  height: auto;
  padding: 20px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: whitesmoke;
  font-size: 16px;
  resize: none;
  label + label {
    margin-top: 50px;
  }
  }
`;

export default QuoteForm;

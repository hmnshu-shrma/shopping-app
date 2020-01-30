import React from 'react'
import TextField from '@material-ui/core/TextField'
// import Logo from 'Assets/images/logo.png'


class LoginSignupView extends React.Component {
  state={
    error:{
      name:false,
      lastname:false,
      email:false,
      password:false,
      confirmpassword:false
    },
    fname:'',
    lname:'',
    email:'',
    password:'',
    confirmpassword:''
  }
  
  handleChange = (e) => {
    e.preventDefault()
    const elName = e.target.name
    const elvalue = e.target.value
    this.setState({[elName]:elvalue})
  }
  
  
  render() {
    const {
      error,
      fname,
      lname,
      email,
      password,
      confirmpassword
    } = this.state
    console.log(this.state)
    
    return (
      <React.Fragment>
        <div className='login' >
          <div className='form'>
            <div className='label-cont'>
              <p className='label-head'>
                Signup
              </p>
              <span className='label-desc'>
                We do not share personal details with anyone
              </span>
            </div>
            <div className='label-cont'>
              <TextField
                error={error.name}
                id='first-name'
                name='fname'
                label='First Name'
                value={fname}
                onChange={this.handlechange}
              />
              <TextField
                error={error.lastname}
                id='last-name'
                label='Last Name'
                value={lname}
                name='lname'
                onChange={this.handlechange}
              />
              <TextField
                error={error.email}
                id='email'
                label='Email'
                value={email}
                name='email'
                onChange={this.handlechange}
              />
              <TextField
                error={error.password}
                id='password'
                label='password'
                value={password}
                name='password'
                onChange={this.handlechange}
              />
              <TextField
                error={error.confirmpassword}
                id='re-password'
                label='Confirm Passwords'
                value={confirmpassword}
                name='confirmpassword'
                onChange={this.handlechange}
                
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginSignupView

import React from 'react'
import { Link } from 'react-router-dom'
const LoginSignupLinks = (props) => {
  return (
    <React.Fragment>
      <div className='login-container'>
        <p className='link-block'>
          <Link to='signup'>
            <span className='link'>
    Signup
            </span>
          </Link>
          <Link to='login'>
            <span className='login'>
    Login
            </span>
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}
export default LoginSignupLinks

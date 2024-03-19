import React from 'react'
import styles from './Login.module.css'
import { Input } from '@/Common/reusableComponents/Input'
import inputControls from './configuration.json'
const Login = () => {

  return (
    <div className='container-fluid'>
      <h3 className='text-center my-3'>Login</h3>
      {/* <Input label="User Id" type="text" errMsg="Please Enter User ID" />
      <Input label="Password" type="password" errMsg="Please Enter Password " /> */}
      {
          inputControls.map((obj, ind, oa) => {
            // return <Input key={`Input_${ind}`} label={label} type={type} errMsg={errMsg} />
            return <Input key={`Input_${ind}`} {...obj} />
          })
      }
      <div className='row'>
          <div className='offset-sm-5 col-sm-7'>
              <button className='btn btn-primary'>Login </button>
          </div>
      </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import styles from './Login.module.css'
import { Input } from '@/Common/reusableComponents/Input'
import inputControls from './configuration.json'
import { regExp } from '@/Common/validations/validations'


const Login = () => {
  const [inputControlsArr, setInputControlsArr] = useState(inputControls)
  const handleLogin = () => {
    alert('send request to server')
  }
  const handleChange = (eve) => {
    const { name, value } = eve.target;
    const clonedinputControlsArray = JSON.parse(JSON.stringify(inputControlsArr));
    const inputControlObj = clonedinputControlsArray.find((obj) => {
      return obj.name === name
    });
    inputControlObj.isShowError = false;
    inputControlObj.value = value;
    const { criteria } = inputControlObj;
    debugger
    for (let i = 0; i < criteria?.length; i++) {
      const regExFn = regExp[criteria[i]]
      const errMsg = regExFn(value);
      if(errMsg){
        inputControlObj.errMsg = errMsg;
        inputControlObj.isShowError = true;
        break
      }
    }
    setInputControlsArr(clonedinputControlsArray)
    
  }
  return (
    <div className='container-fluid'>
      <h3 className='text-center my-3'>Login</h3>
      {
        inputControlsArr.map((obj, ind, oa) => {
          return <Input key={`Input_${ind}`} {...obj} handleChange={handleChange} />
        })
      }
      <div className='row'>
        <div className='offset-sm-5 col-sm-7'>
          <button className='btn btn-primary' onClick={handleLogin} >Login </button>
        </div>
      </div>
    </div>
  )
}

export default Login

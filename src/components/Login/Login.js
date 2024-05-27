"use client"

import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import { Input } from '@/Common/reusableComponents/Input'
import inputControls from './configuration.json'
import { regExp, validateForm, validateInputControl } from '@/Common/validations/validations'
import Link from 'next/link'


const Login = () => {
  const [inputControlsArr, setInputControlsArr] = useState(inputControls)
  const handleLogin = () => {
    const [isInvalidForm, dataObj] = validateForm(inputControlsArr, setInputControlsArr)
    if(isInvalidForm){
      return
    }
    console.log(dataObj)
    alert('send request to server')
  }
  const handleChange = (eve) => {
      validateInputControl(eve, inputControlsArr, setInputControlsArr)
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
          <button className='btn btn-primary me-3' onClick={handleLogin} >Login </button>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

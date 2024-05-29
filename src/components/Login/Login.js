"use client"

import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import { Input } from '@/Common/reusableComponents/Input'
import inputControls from './configuration.json'
import { regExp, validateForm, validateInputControl } from '@/Common/validations/validations'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { ServerCall } from '@/Common/api/serverCall'


const Login = () => {
  const [inputControlsArr, setInputControlsArr] = useState(inputControls)
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const [isInvalidForm, dataObj] = validateForm(inputControlsArr, setInputControlsArr)
      if (isInvalidForm) {
        return;
      }
      dispatch({ type: 'LOADER', payload: true })
      const res = await ServerCall.sendPostReq('http://localhost:2020/std/login', { data: dataObj })
      if(res?.data?.length){
      dispatch({type: 'LOGIN', payload: {isLoggedIn:true, user:res.data[0 ]}})
      dispatch({type: 'TOASTER', payload: {isShowToaster:true, message:'Success',bgColor:'green'}})
      } else {
      dispatch({type: 'TOASTER', payload: {isShowToaster:true, message:'Please check entered uid or password',bgColor:'red'}})
      }    
    } catch (e) {
      console.error(e);
      dispatch({type: 'TOASTER', payload: {isShowToaster:true, message:e.message,bgColor:'red'}})
    } finally {
      dispatch({ type: 'LOADER', payload: false })
    }
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

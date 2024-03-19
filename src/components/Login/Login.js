import React from 'react'
import styles from './Login.module.css'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const fnLogin = () => {
        dispatch({
            type: "LOGIN",
            payload: {
                user: {},
                isLoggedIn: true
            }
        })
    }
  return (
    <div>
      Login Component
      <button onClick={fnLogin}>Login</button>
    </div>
  )
}

export default Login

import React, { useEffect } from 'react'
import styles from './toaster.module.css'
import { useDispatch } from 'react-redux'


const Toaster = ({bgcolor, msg}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type:'TOASTER',
                payload: {isShowToaster:false, message: "", bgColor:""}
            })
        }, 3000);
    }, [])
  return (
    <div style={{backgroundColor:bgcolor}} className={styles.toaster}>
        {msg}
    </div>
  )
}

export default Toaster

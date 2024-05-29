import React, { useEffect, useState } from 'react'
import styles from './toaster.module.css'
import { useDispatch } from 'react-redux'


const Toaster = ({bgcolor, msg}) => {
    const dispatch = useDispatch()
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setWidth((val) => {
                if(val > 300){
                    clearInterval(intervalId)
                    dispatch({
                        type:'TOASTER',
                        payload: {isShowToaster:false, message: "", bgColor:""}
                    })
                }
                return val+1
            })
        }, 30);
    }, [])
  return (
    <div style={{backgroundColor:bgcolor}} className={styles.toaster}>
        <span className='ms-2'>{msg}</span>
        <div style={{width}}></div>
    </div>
  )
}

export default Toaster

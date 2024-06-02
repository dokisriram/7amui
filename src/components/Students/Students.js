import React, { useEffect, useState } from 'react'
import styles from './Students.module.css'
import { ServerCall } from '@/Common/api/serverCall';


const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {

    }, [])
    const fnGetStudents = () => {
        ServerCall.sendGetReq('std/get-std')
    }
  return (
    <div>
      
    </div>
  )
}

export default Students

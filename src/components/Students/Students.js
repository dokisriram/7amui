"use client"
import React, { useEffect, useState } from 'react'
import styles from './Students.module.css'
import { ServerCall } from '@/Common/api/serverCall';
import Table from '@/Common/reusableComponents/Table/Table';
import { useDispatch } from 'react-redux';


const Students = () => {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fnGetStudents = async () => {
      try {
        dispatch({ type: 'LOADER', payload: true })
        const res = await ServerCall.sendGetReq('std/get-std')
        if (Array.isArray(res?.data)) {
          setStudents(res?.data);
        }
      } catch (error) {

      } finally {
        dispatch({ type: 'LOADER', payload: false })
      }
    }
    fnGetStudents();
  }, [dispatch])

  return (
    <div>
      <h3 className='my-3 text-center'>Students</h3>
      <Table
        headers={['NAME', 'UID', 'ROLL NO', 'ADDRESS']}
        rows={students}
        tds={['Name', 'uid', 'rno', 'address']}
      />
    </div>
  )
}

export default Students

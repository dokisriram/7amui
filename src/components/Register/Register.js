"use client"
import React, { useState } from 'react'
import styles from './Register.module.css'
import configurations from './configuration.json';
import { Input } from '@/Common/reusableComponents/Input';
import { validateInputControl, validateForm } from '@/Common/validations/validations';
import { Textarea } from '@/Common/reusableComponents/Textarea';
import { Select } from '@/Common/reusableComponents/Select';
import Link from 'next/link';
import { ServerCall } from '@/Common/api/serverCall';

const Register = () => {
    const [inputControls, setInputControls] = useState(configurations)
    const handleChange = (eve) => {
        validateInputControl(eve, inputControls, setInputControls)
    }
    const handleRegister = () => {
        const [isInvalidForm, dataObj] = validateForm(inputControls, setInputControls)
        if (isInvalidForm) return;
        console.log(dataObj)
        ServerCall.sendPostReq('http://localhost:2000/std/reg-std', { data: dataObj })
        .then((res)=> {
            console.log(1,res)
        }).catch((err) => {
            console.log(2,err);
        }).finally(()=> {
            console.log("Finally");
        })
    }
    return (
        <div className='container-fluid'>
            <h3 className='my-3 text-center'>Register</h3>
            {
                inputControls.map((obj, index) => {
                    switch (obj.tag) {
                        case 'input':
                            return <Input key={`input_${index}`} {...obj} handleChange={handleChange} />
                        case 'select':
                            return <Select key={`input_${index}`} {...obj} handleChange={handleChange} />
                        case 'textarea':
                            return <Textarea key={`ta_${index}`} {...obj} handleChange={handleChange} />
                    }
                })
            }

            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={handleRegister} className='btn btn-primary me-3'>Register</button>
                    <Link href="/login">To Login</Link>
                </div>
            </div>
        </div>

    )
}


export default Register

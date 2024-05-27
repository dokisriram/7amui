import React from 'react'

const Textarea = ({ label, errMsg, isShowError, name, value, handleChange }) => {

    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <label>{label}:</label>
            </div>
            <div className='col-sm-3'>
                <textarea className='form-control' value={value} name={name} onChange={handleChange}></textarea>
            </div>
            <div className='col-sm-4'>
                {isShowError && <b className='text-danger'>{errMsg}</b>}
            </div>
        </div>
    )
}

export default Textarea

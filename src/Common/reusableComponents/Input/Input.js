import React from 'react'

const Input = ({label, errMsg, type, isShowError, handleChange, name, value}) => {
    return (
        <div>
            <div className='row mb-3'>
                <div className="col-sm-5 text-end">
                    <label htmlFor="">{label}</label>
                </div>
                <div className="col-sm-3">
                    <input name={name} value={value} onChange={handleChange} type={type} className="form-control" />
                </div>
                <div className="col-sm-4">
                    { isShowError && <b className='text-danger'>{errMsg}</b> }
                </div>
            </div>
        </div>
    )
}

export default Input

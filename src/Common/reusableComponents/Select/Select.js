import React from 'react'

const Select = ({label, errMsg, isShowError,name, value,values ,handleChange, options}) => {
    return (
        <div>
            <div className='row mb-3'>
                <div className="col-sm-5 text-end">
                    <label htmlFor="">{label}</label>
                </div>
                <div className="col-sm-3">
                    <select className='form-control' name={name} value={value} onChange={handleChange}>
                        <option value="">--Please Select--</option>
                        {
                            options.map((val, ind) => {
                                return <option value={values[ind]} key={`option_${ind}`}>{val}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col-sm-4">
                    { isShowError && <b className='text-danger'>{errMsg}</b> }
                </div>
            </div>
        </div>
    )
}

export default Select

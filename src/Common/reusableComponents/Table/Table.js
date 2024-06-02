import React from 'react'

const Table = ({headers, rows, tds}) => {
  return (
    <div className='table-responsive'>
      <table className='table'>
        <thead>
            {
                headers?.map((val, ind) => {
                    return <th key={`th_${ind}`}>{val}</th>
                })
            }
        </thead>
        <tbody>
            {
                rows?.map((obj, ind) => {
                    return <tr key={`tr_${ind}`}>
                        {
                          tds?.map((val, index)=> {
                            <td key={`td_${index}`}>{obj[val]}</td>
                          })
                        }
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table

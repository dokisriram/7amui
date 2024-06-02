import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

const Table = ({headers, rows, tds}) => {
  const perPage=5;
  const [currPage,setCurrPage]=useState(1)
  const [currData, setCurrData] = useState([]);
  useEffect(()=>{
    const end=currPage*perPage;
    const start=end-perPage;
    setCurrData(rows.slice(start,end))
 },[currPage, rows])
  return (
    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead className='table-dark'>
            <tr>
            {
                headers?.map((val, ind) => {
                    return <th key={`th_${ind}`}>{val}</th>
                })
            }
            </tr>
        </thead>
        <tbody>
            {
                currData?.map((obj, ind) => {
                    return <tr key={`tr_${ind}`}>
                        {
                          tds?.map((val, index)=> {
                            return <td key={`td_${index}`}>{obj[val]}</td>
                          })
                        }
                    </tr>
                })
            }
        </tbody>
      </table>
      <Pagination currPage={currPage} setCurrPage={setCurrPage} totalPages={Math.ceil(rows.length/perPage)} />
    </div>
  )
}

export default Table

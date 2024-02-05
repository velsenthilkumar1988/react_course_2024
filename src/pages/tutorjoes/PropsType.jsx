import React from 'react'

const PropsType = (props) => {;
  return (
    <div className='student'>
      <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Status?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.sno}</td>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.ismarried ? "Yes" : "No"}</td>
            </tr>
        </tbody>

      </table>
    </div>
  )
}

export default PropsType;

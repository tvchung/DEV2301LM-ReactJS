import React from 'react'

export default function Task() {
  return (
    <>
         <tr>
            <td className="text-center">1</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis ea c
            </td>
            <td className="text-center">
              <span className="label label-danger">High</span>
            </td>
            <td>
              <button type="button" className="btn btn-warning">
                Edit
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
    </>
  )
}

import React from 'react'
const Part = ( {courses} ) => {
    return (
      <div>
      <p> {courses.name} {courses.exercises} </p>
      </div>
    )
  }
export default Part
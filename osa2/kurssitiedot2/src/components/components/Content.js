import React from 'react'
import Part from './components/Part'

const Content = ( {course, } ) => {
    return (
      <div>
        {course.map(course =>
            <Part key={course.id} courses={course} />
            )}
      </div>
    )
  }
export default Content
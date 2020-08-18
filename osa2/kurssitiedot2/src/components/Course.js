import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

const Course = ( {courses} ) => {

    const total = courses[0].parts.reduce(function(sum, order) {
        return sum + order.exercises
    }, 0)
    const total2 = courses[1].parts.reduce(function(sum, order) {
        return sum + order.exercises
    }, 0)
    return (
        <div>
            <Header name={courses[0].name} />
            <Content course={courses[0].parts}/>
            <h3> Total of exercises {total}</h3>
            <Header name={courses[1].name} />
            <Content course={courses[1].parts}/>
            <h3> Total of exercises {total2}</h3>
        </div>
    )
}

export default Course
import React from 'react'
import CourseActions from './CourseActions'
import CourseBrick from './CourseBrick'

function Course() {
  return (
    <div>
        {/* courseActions */}
        <CourseActions/>
        <CourseBrick/>
        {/* courses */}
    </div>
  )
}

export default Course
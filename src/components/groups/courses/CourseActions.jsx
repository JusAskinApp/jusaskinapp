import {React, useState} from 'react'
import { Button, CircularProgress, Alert} from '@mui/material';
import CourseFormModal from '../models/CourseFormModal';
import useAddCourse from '../../../hooks/useAddCourse';

function CourseActions() {
    const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
    const { addCourse, loading } = useAddCourse();

    const handleCourseSubmit = (course) => {
        addCourse(course);
        setIsCourseModalOpen(false);
    };
  return (
    <div>
        <Button variant="contained" onClick={() => setIsCourseModalOpen(true)}>Create Course</Button>
        
        {loading && <CircularProgress />}
        <CourseFormModal 
                open={isCourseModalOpen} 
                handleClose={() => setIsCourseModalOpen(false)} 
                handleSubmit={handleCourseSubmit} 
            />
    </div>
  )
}

export default CourseActions
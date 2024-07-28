import { React, useState } from "react";
import { Button, CircularProgress, Grid } from "@mui/material";
import CourseFormModal from "../models/CourseFormModal";
import useAddCourse from "../../../hooks/useAddCourse";
import LessonFormModal from "../models/LessonFormModal";
import useAddLessons from "../../../hooks/useAddLesson";

function CourseActions() {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);

  const { addCourse, loading } = useAddCourse();
  const { addLessons, loadingLesson } = useAddLessons("mwFG0r1EkfK7lWpwGg5T");

  const handleCourseSubmit = (course) => {
    addCourse(course);
    setIsCourseModalOpen(false);
  };

  const handleLessonSubmit = (lesson) => {
    console.log(lesson);
    addLessons(lesson);
    setIsLessonModalOpen(false);
  };
  return (
    <div>
     <Grid container spacing={2}>
            <Grid item>
                <Button variant="contained" onClick={() => setIsCourseModalOpen(true)}>
                    Create Course
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => setIsLessonModalOpen(true)}>
                    Create Lesson
                </Button>
            </Grid>
        </Grid>
        
      {loading && <CircularProgress />}
      <CourseFormModal
        open={isCourseModalOpen}
        handleClose={() => setIsCourseModalOpen(false)}
        handleSubmit={handleCourseSubmit}
      />

      <LessonFormModal
        open={isLessonModalOpen}
        handleClose={() => setIsLessonModalOpen(false)}
        handleSubmit={handleLessonSubmit}
      />
    </div>
  );
}

export default CourseActions;

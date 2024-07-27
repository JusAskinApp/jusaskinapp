import React, { useState,useEffect } from 'react';
import { Modal, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl,Grid, Typography } from '@mui/material';
import { uploadFiles } from '../../../utility/uploadUtility';

const CourseFormModal = ({ open, handleClose, handleSubmit }) => {
    const [course, setCourse] = useState({
        courseName: '',
        courseDescription: '',
        createdBy: '',
        coursePic: null,
        courseAffiliatedGroupID: '12345',
        price: '',
        rating: '',
        language: '',
        courseOverview: '',
        courseRequirements: ''
    });
    const [fileName, setFileName] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'coursePic') {
            setCourse({
                ...course,
                [name]: Array.from(files)
            });
            setFileName(files[0]?.name || ''); // Update file name state
        } else {
            setCourse({
                ...course,
                [name]: value
            });
        }
    };

    useEffect(() => {
        setIsFormValid(validateForm());
    }, [course]);

    const validateForm = () => {
        const { courseName, courseDescription, createdBy, coursePic, price, rating, language, courseOverview, courseRequirements } = course;
        return courseName && courseDescription && createdBy && coursePic && price && rating && language && courseOverview && courseRequirements;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(course.coursePic.length > 0){
            course.coursePic = await uploadFiles(course.coursePic)
        }
        handleSubmit(course);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 600, 
                bgcolor: 'background.paper', 
                maxHeight: '90vh', 
                overflowY: 'auto',
                boxShadow: 24, 
                p: 4 
            }}>
                <Typography variant="h6" gutterBottom>
                    Create Course
                </Typography>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField name="courseName" label="Course Name" fullWidth size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="createdBy" label="Created By" fullWidth size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="courseDescription" label="Course Description" fullWidth multiline rows={4} size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" component="label" fullWidth>
                                Upload Course Picture
                                <input type="file" name="coursePic" hidden onChange={handleChange} />
                            </Button>
                            {fileName && (
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    Selected File: {fileName}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField name="courseAffiliatedGroupID" label="Course Affiliated Group ID" value={course.courseAffiliatedGroupID} fullWidth disabled size="small" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField name="price" label="Price" type="number" fullWidth size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField name="rating" label="Rating" type="number" fullWidth size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth size="small">
                                <InputLabel>Language</InputLabel>
                                <Select name="language" value={course.language} onChange={handleChange} >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Spanish">Spanish</MenuItem>
                                    <MenuItem value="French">French</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="courseOverview" label="Course Overview" fullWidth multiline rows={4} size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name="courseRequirements" label="Course Requirements" fullWidth multiline rows={4} size="small" onChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button  type="submit" variant="contained" color="primary" fullWidth disabled={!isFormValid}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default CourseFormModal;

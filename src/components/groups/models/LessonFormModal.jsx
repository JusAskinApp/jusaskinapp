import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, IconButton, Grid } from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const LessonFormModal = ({ open, handleClose, handleSubmit }) => {
    const [lessons, setLessons] = useState([{
        lessonTopic: '',
        topicNames: [{ name: '', content: null }],
        topicDescription: ''
    }]);

    const handleLessonChange = (index, e) => {
        const { name, value } = e.target;
        const newLessons = [...lessons];
        newLessons[index][name] = value;
        setLessons(newLessons);
    };

    const handleTopicNameChange = (lessonIndex, topicIndex, e) => {
        const { name, value, files } = e.target;
        const newLessons = [...lessons];
        if (name === 'content') {
            newLessons[lessonIndex].topicNames[topicIndex][name] = files[0];
        } else {
            newLessons[lessonIndex].topicNames[topicIndex][name] = value;
        }
        setLessons(newLessons);
    };

    const addLesson = () => {
        setLessons([...lessons, {
            lessonTopic: '',
            topicNames: [{ name: '', content: null }],
            topicDescription: ''
        }]);
    };

    const removeLesson = (index) => {
        const newLessons = lessons.filter((_, i) => i !== index);
        setLessons(newLessons);
    };

    const addTopicName = (lessonIndex) => {
        const newLessons = [...lessons];
        newLessons[lessonIndex].topicNames.push({ name: '', content: null });
        setLessons(newLessons);
    };

    const removeTopicName = (lessonIndex, topicIndex) => {
        const newLessons = [...lessons];
        newLessons[lessonIndex].topicNames = newLessons[lessonIndex].topicNames.filter((_, i) => i !== topicIndex);
        setLessons(newLessons);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(lessons);
    };

    return (
        <Modal open={open} onClose={handleClose}>
        <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            maxHeight: '90vh', 
            width: 600, 
            overflowY: 'auto',
            bgcolor: 'background.paper', 
            boxShadow: 24, 
            p: 4 
        }}>
            <Typography variant="h6" gutterBottom>
                Add Lessons
            </Typography>
            <form onSubmit={onSubmit}>
                {lessons.map((lesson, lessonIndex) => (
                    <Box key={lessonIndex} sx={{ mb: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={11}>
                                <TextField 
                                    name="lessonTopic" 
                                    label={`Lesson Topic ${lessonIndex + 1}`} 
                                    fullWidth 
                                    margin="normal" 
                                    size="small"
                                    
                                    value={lesson.lessonTopic} 
                                    onChange={(e) => handleLessonChange(lessonIndex, e)} 
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton onClick={() => removeLesson(lessonIndex)} disabled={lessons.length === 1}>
                                    <RemoveCircle />
                                </IconButton>
                            </Grid>
                        </Grid>
                        {lesson.topicNames.map((topic, topicIndex) => (
                            <Grid container spacing={2} key={topicIndex} alignItems="center">
                                <Grid item xs={12} sm={4}>
                                    <TextField 
                                        label={`Topic Name ${topicIndex + 1}`} 
                                        fullWidth 
                                        margin="normal" 
                                        size="small"
                                        value={topic.name} 
                                        name="name"
                                        onChange={(e) => handleTopicNameChange(lessonIndex, topicIndex, e)} 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Button 
                                        variant="contained" 
                                        component="label" 
                                        fullWidth 
                                        margin="normal"
                                        size="small"
                                    >
                                        Upload Content
                                        <input 
                                            type="file" 
                                            name="content" 
                                            hidden 
                                            onChange={(e) => handleTopicNameChange(lessonIndex, topicIndex, e)} 
                                        />
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <IconButton onClick={() => removeTopicName(lessonIndex, topicIndex)} disabled={lesson.topicNames.length === 1}>
                                        <RemoveCircle />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        ))}
                        <Button 
                            variant="text" 
                            startIcon={<AddCircle />} 
                            onClick={() => addTopicName(lessonIndex)}
                            fullWidth
                            sx={{ mb: 2 }}
                        >
                            Add Topic Name
                        </Button>
                        <TextField 
                            name="topicDescription" 
                            label="Topic Description" 
                            fullWidth 
                            margin="normal" 
                            multiline 
                            size="small"
                            rows={4} 
                            value={lesson.topicDescription} 
                            onChange={(e) => handleLessonChange(lessonIndex, e)} 
                        />
                    </Box>
                ))}
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ mb: 2 }}
                    onClick={addLesson}
                    startIcon={<AddCircle />}
                >
                    Add Lesson
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </form>
        </Box>
    </Modal>
    );
};

export default LessonFormModal;

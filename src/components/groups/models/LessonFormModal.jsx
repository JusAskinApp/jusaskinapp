import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const LessonFormModal = ({ open, handleClose, handleSubmit }) => {
    const [lesson, setLesson] = useState({
        lessonTopic: '',
        topicName: '',
        topicDescription: '',
        content: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'content') {
            setLesson({
                ...lesson,
                [name]: files[0]
            });
        } else {
            setLesson({
                ...lesson,
                [name]: value
            });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(lesson);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 400, 
                bgcolor: 'background.paper', 
                boxShadow: 24, 
                p: 4 
            }}>
                <form onSubmit={onSubmit}>
                    <TextField name="lessonTopic" label="Lesson Topic" fullWidth margin="normal" onChange={handleChange} />
                    <TextField name="topicName" label="Topic Name" fullWidth margin="normal" onChange={handleChange} />
                    <TextField name="topicDescription" label="Topic Description" fullWidth margin="normal" multiline rows={4} onChange={handleChange} />
                    <Button variant="contained" component="label" fullWidth margin="normal">
                        Upload Content
                        <input type="file" name="content" hidden onChange={handleChange} />
                    </Button>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default LessonFormModal;

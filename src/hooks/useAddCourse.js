import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddCourse = () => {
    debugger
    const [loading, setLoading] = useState(false);

    const addCourse = async (courseData) => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/courses/create-course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            if (!response.ok) {
                throw new Error('Failed to create course');
            }

            const data = await response.json();
            toast.success('Course created successfully');

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { addCourse, loading };
};

export default useAddCourse;

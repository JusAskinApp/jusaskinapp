import { useState } from 'react';
import toast from 'react-hot-toast';

const useAddLessons = (courseId) => {
debugger
    const [loadingLesson, setLoading] = useState(false);

    const addLessons = async (lessonsData) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/courses/${courseId}/add-lessons`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lessonsData),
            });

            if (!response.ok) {
                throw new Error('Failed to add lessons');
            }

            const data = await response.json();
            toast.success('Lessons added successfully', { duration: 3000 });
            return data;
        } catch (err) {
            toast.error(err.message, { duration: 3000 });
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { addLessons, loadingLesson };
};

export default useAddLessons;

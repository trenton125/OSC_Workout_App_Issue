//CUSTOM EXERCISE CEN


// Drop down for selection variant
import React, {useState} from 'react';
function CreateExercise() {
    const existingExercises = [
        {id: '1', name: "Bench Press"},
        {id: '2', name: "Squat"},
        {id: '3', name: "Deadlift"},
        {id: '4', name: "Pull Up"},
        {id: '5', name: "Bicep Curl"},
        {id: '6', name: "Tricep Extension"},
        {id: '7', name: "Shoulder Press"},
        {id: '9', name: "Leg Extension"},
        {id: '10', name: "Leg Curl"},
        {id: '11', name: "Lateral Raise"},
        {id: '12', name: "Chest Fly"}
    ]
    const [exerciseName, setExerciseName] = useState('');
    const [variantOf, setVariantOf] = useState('');
    const [customExercises, setCustomExercises] = useState([]);
    const handleCreateExercise = () => {
        if(!exerciseName.trim() || !variantOf) {
            return;
        }
        const relatedExercise = existingExercises.find((exercise) => exercise.id === variantOf);
        if(!relatedExercise) {
            return;
        }
        const customExercise = {
            id: `custom-${Date.now()}`,
            name: exerciseName.trim(),
            variantOf: relatedExercise.id,
            variantOfName: relatedExercise.name,
            bodyPart: relatedExercise.bodyPart,
            target: relatedExercise.target,
            equipment: relatedExercise.equipment,
            isCustom: true
        };
        setCustomExercises((prev) => [...prev, customExercise]);
        setExerciseName('');
        setVariantOf('');
    };
    // Page for creating new exercises
    return (
        <div>
            <h1>Create Exercise</h1>
            <div>
                <label>
                    Exercise Name: 
                    <input
                        type="text"
                        value={exerciseName}
                        onChange={(e) => setExerciseName(e.target.value)}
                        placeholder="Enter exercise name"
                    />
                </label>
            </div>
            <div>
                <label>
                    Variant Of: 
                    <select
                    value={variantOf}
                    onChange={(e) => setVariantOf(e.target.value)}
                    >
                        <option value="">Select an exercise</option>
                        {existingExercises.map((exercise) => (
                            <option key={exercise.id} value={exercise.id}>
                                {exercise.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button onClick={handleCreateExercise}>Create Exercise</button>
            {customExercises.length > 0 && (
                <div>
                    <h2>Custom Exercises</h2>
                    {customExercises.map((exercise) => (
                        <div key={exercise.id}>
                            <strong>{exercise.name}</strong> (Variant of: {exercise.variantOfName})
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default CreateExercise;
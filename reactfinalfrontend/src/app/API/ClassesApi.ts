import axios from 'axios'

const API_URL = "http://lcoalhost: 3000";

export interface Classes {
    _id: string;
    classNames: string;
    hitpoints: number; 
     wealth: 180;
     classAlignment: string;
}

// Fetch All classes
async function fetchClasses(): Promise<Classes[]> {
    try {
        const response = await axios.get(`${API_URL}/classes`)
        return response.data;
    } catch (error) {
        console.log("Error fetching classes: ", error);
        throw new Error("Faild to fetch classes");
    }
}
// Delete a Student
async function deleteClasses(id: string): Promise<void> {
    try {
        await axios.delete(`${API_URL}/classes/${id}`)
    } catch (error) {
        console.log("Error deleting classes: ", error);
        throw new Error("Failed to delete classes");
    }
}

// submit (add or update) a Student
async function submitClasses(studentData: Omit<Classes, "_id">, 
    id?: string
): Promise<void> {
    try {
        if (id) {
            await axios.put(`${API_URL}/classes/${id}`, ClassesData);
        } else {
            // Add a classes
            const newId = Date.now().toString();
            await axios.post(`${API_URL}/classes`, { ...classesData, _id: newId });
        }
    } catch (error) {
        console.log("Error submitting classes: ", error);
        throw new Error("Failed to submit classes");
    }
}
export {fetchClasses, deleteClasses, submitClasses};
"use client"; 

import { useEffect, useState } from "react";
import ClassesForm from "./ClassesForm";
import { deleteClasses, fetchClasses, submitClasses } from "./API/ClassesApi"; 

interface Classes {
  _id: string;
  classesName: string;
  hitpoints: number;
  wealth: number;
  classAlignment: string;
 
}

const classesPage = () => {
  const [classes, setClasses] = useState<Classes[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<Classes | null>(null)

// fetch all students
const loadStudents =async ()=> {
  try {
    const data = await fetchClasses();
    setClasses(data)
  } catch (error) {
    console.error("Error Fetching Students: ", error);
  }
};
//submit students
const handleSubmit = async (classes: Omit<Classes, "_id">, id?: string)=> {
  try {
    await submitClasses(classes, id );
    setSelectedClasses(null);
  } catch (error) {
    console.error("Error Submitting Classes.")
  }
}
//delete student by id
const handleDelete = async (id: string) => {
  try {
    await deleteClasses(id);
  } catch (error) {
    console.error("Error Submitting Classes.", error)
  }
}
//initial data fetch
useEffect(()=> {
  loadClasses();
}, []);

  return (
    <div className="p-8 max-w-7x1 mx-auto">
      <h1 className="text-3x1 font-extrabold text-gray-800 mb-6">Classes</h1>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg mb-8">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Id</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Classes Name</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">hitpoints</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">wealth</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Class Alighnment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classes.map((classes)=> (
              <tr key={classes._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{classes._id}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{classes.classesName}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{classes.hitpoints}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{classes.classAlignment}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-1g mr-2 text-sm"onClick={(classes)=> {}}>
                    Update
                  </button>
                </>
                <td>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-1g mr-2 text-sm"onClick={()=> {}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ClassesForm classes={selectedClasses} onSubmit={handleSubmit}/>
    </div>
  );
};

export default ClassesPage;
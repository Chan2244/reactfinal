"use client"; 

import { useEffect, useState } from "react";
import MonstersForm "./MonstersForm";
import { deleteMonster, fetchMonsters, submitMonster } from ".../API/MonstersApi"; 

interface Monsters {
  _id: string;
  monstersName: string;
  monstersType: string;
  monstersClimate: string;
  monstersTerrain: string;
  monstersXp: number;
}

const MonstersPage = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [selectedMonsters, setSelectedMonsters] = useState<Monsters | null>(null)

// fetch all Monsters
const loadStudents =async ()=> {
  try {
    const data = await fetchMonsters();
    setMonsters(data)
  } catch (error) {
    console.error("Error Fetching Monsters: ", error);
  }
};
//submit students
const handleSubmit = async (student: Omit<Monsters, "_id">, id?: string)=> {
  try {
    await submitMonsters(monsters, id );
    setSelectedMonsters(null);
  } catch (error) {
    console.error("Error Submitting Monster.")
  }
}
//delete student by id
const handleDelete = async (id: string) => {
  try {
    await deleteMonsters(id);
  } catch (error) {
    console.error("Error Submitting Monsters.", error)
  }
}
//initial data fetch
useEffect(()=> {
  loadMonsters();
}, []);

  return (
    <div className="p-8 max-w-7x1 mx-auto">
      <h1 className="text-3x1 font-extrabold text-gray-800 mb-6">Monsters</h1>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg mb-8">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Id</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Monsters Name</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Monsters Type</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Monsters Climate</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Monsters Terrain</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Monsters Xp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {monsters.map((monsters)=> (
              <tr key={monsters._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters._id}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters.monstersName}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters.monstersType}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters.monstersClimate}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters.monstersTerrain}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{monsters.monstersXp}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-1g mr-2 text-sm"onClick={(student)=> {}}>
                    Update
                  </button>
                </td>
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

      <MonstersForm student={selectedMonsters} onSubmit={handleSubmit}/>
    </div>
  );
};

export default MonstersPage;
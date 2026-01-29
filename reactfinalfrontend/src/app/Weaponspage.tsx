"use client"; 

import { useEffect, useState } from "react";
import WeaponsForm from "./WeaponsForm";
import { deleteWeapons, fetchWeapons, submitWeapons } from ".../API/WeaponsApi"; 

interface Weapons {
  _id: string;
  weaponsName: string;
  weaponsDamage: number;
  weapnsCost: number;
  weaponsClass: string;
  weaponsType: string;
}

const WeaponsPage = () => {
  const [weapons, setWeapons] = useState<Weapons[]>([]);
  const [selectedWeapons, setSelectedWeapons] = useState<Weapons | null>(null)

// fetch all students
const loadWeapons =async ()=> {
  try {
    const data = await fetchWeapons();
    setWeapons(data)
  } catch (error) {
    console.error("Error Fetching Weapons: ", error);
  }
};
//submit students
const handleSubmit = async (student: Omit<Weapons, "_id">, id?: string)=> {
  try {
    await submitWeapons(weapons, id );
    setSelectedWeapons(null);
  } catch (error) {
    console.error("Error Submitting Weapons.")
  }
}
//delete student by id
const handleDelete = async (id: string) => {
  try {
    await deleteWeapons(id);
  } catch (error) {
    console.error("Error Submitting Weapons.", error)
  }
}
//initial data fetch
useEffect(()=> {
  loadWeapons);
}, []);

  return (
    <div className="p-8 max-w-7x1 mx-auto">
      <h1 className="text-3x1 font-extrabold text-gray-800 mb-6">Weapons</h1>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg mb-8">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Id</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Weapons Name</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Weapons Damage</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Weapons Cost</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Weapons Class</th>
              <th className="px-6 py3 text-left text-sm font-semibold text-gray-600">Weapons Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {weapons.map((weapons)=> (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons._id}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons.weaponsName}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons.weaponsDamage}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons.weaponsCost}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons.weaponsClass}</td>
                <td className="px-6 py-4 text-sm text-gray-700 whitespace-nonwrap">{weapons.weaponsType}</td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-1g mr-2 text-sm"onClick={(weapons)=> {}}>
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

      <WeaponsForm student={selectedWeapons} onSubmit={handleSubmit}/>
    </div>
  );
};

export default WeaponsPage;
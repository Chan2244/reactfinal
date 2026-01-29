import React, {useState, useEffect} from 'react'

interface Weapons {
    _id: string;
    weaponsName: string;
    weaponDamage: number;
    weaponCost: number;
    weaponClass: string;
    weaponType: string;
}

interface WeaponsFormProps {
    weapons: Weapons | null;
    onSubmit: (weapons: Omit<Weapons, "_id">, id?: string) => void;
}

const WeaponsForm = ({weapons, onSubmit}: WeaponsFormProps) => {
    const [formWeapons, setFormWeapons =useState<Omit<Weapons, "_id">>({
        WeaponsName: "",
        WeaponsDamage: "",
        WeaponsCost: "",
        WeaponsClass: "",
        WeaponsType:"",

    });

    useEffect(()=> {
        if(weapons){
            const{_id, ...rest} = weapons;
        } else {
            setFormWeapons({
            WeaponsName: "",
            WeaponsDamage: "",
            WeaponsCost: "",
            WeaponClass: "",
            WeaponType: "",
        });
        }
    },[weapons]);

    const handleChange =(field: keyof Omit<Weapons, "_id">, value: any)=>{
        setFormState((prev) => ({...prev, [field]: value }));
    };

    const handleSubmit = ()=> {
        onSubmit(formState, weapons?._id);
    }

    return (
    <div className="bg-white shadow-1g p-6 rounded-1g">
        <h2 className="text-2x1 font-bold text-gray-800 mb-4">
            {weapons ? "Update Monsters": "Add New Monsters"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <input type="text"
            placeholder="WeaponsName"
            value={formState.weaponsName}
            onChange={(e) => handleChange("weaponsName", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="WeaponsDamage"
            value={formState.WeaponsDamage}
            onChange={(e) => handleChange("WeaponsDamage", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="WeaponsCost"
            value={formState.monstersClimate}
            onChange={(e) => handleChange("WeaponsCost", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
              <input type="text"
            placeholder="WeaponsClass"
            value={formState.WeaponsClass}
            onChange={(e) => handleChange("WeaponsClass", e.target.value)}
            className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
             <input type="text"
             placeholder="WeaponsType"
             value={fromState.weaponsType}
             onChange={(e) => handleChange("WeaponsType", e.target.value)}
             className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 rounded-lg w-full text-black"
             />
        </div>
        <button
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
        onClick={handleSubmit}
        >{weapons ? "Update Weapons" : "Add new Weapons"}
        </button>
    </div>
    );
};

export default WeaponsForm